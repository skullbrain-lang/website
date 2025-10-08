
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { X, Maximize, Minimize } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingVideoProps {
  videoUrl: string;
  onClose: () => void;
}

const FloatingVideo: React.FC<FloatingVideoProps> = ({ videoUrl, onClose }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [size, setSize] = useState({ width: 270, height: 540 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [prevSize, setPrevSize] = useState({ width: 270, height: 540 });
  const [prevPosition, setPrevPosition] = useState({ x: 50, y: 50 });
  
  const videoRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const resizeStartRef = useRef({ x: 0, y: 0, width: 0, height: 0 });

  const handleDragStart = (e: React.MouseEvent) => {
    if (isResizing) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    document.body.classList.add('no-select');
  };

  const handleResizeStart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
    resizeStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      width: size.width,
      height: size.height,
    };
    document.body.classList.add('no-select');
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - dragStartRef.current.x;
      const newY = e.clientY - dragStartRef.current.y;
      setPosition({ x: newX, y: newY });
    }
    if (isResizing) {
      const newWidth = resizeStartRef.current.width + (e.clientX - resizeStartRef.current.x);
      const newHeight = resizeStartRef.current.height + (e.clientY - resizeStartRef.current.y);
      setSize({
        width: Math.max(newWidth, 150),
        height: Math.max(newHeight, 200),
      });
    }
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
    document.body.classList.remove('no-select');
  };

  const toggleMaximize = () => {
    if (isMaximized) {
      setSize(prevSize);
      setPosition(prevPosition);
    } else {
      setPrevSize(size);
      setPrevPosition(position);
      setSize({ width: window.innerWidth * 0.9, height: window.innerHeight * 0.9 });
      setPosition({ x: window.innerWidth * 0.05, y: window.innerHeight * 0.05 });
    }
    setIsMaximized(!isMaximized);
  };
  
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.classList.remove('no-select');
    };
  }, [isDragging, isResizing]);

  return (
    <div
      ref={videoRef}
      className={cn(
        "fixed z-[100] bg-card border border-border shadow-2xl rounded-lg flex flex-col transition-all duration-300",
        isMaximized ? "transition-none" : ""
      )}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
      }}
    >
      <div
        className="h-8 bg-muted/50 rounded-t-lg flex items-center justify-end px-2 cursor-move"
        onMouseDown={handleDragStart}
      >
        <div className="flex items-center gap-1">
          <button onClick={toggleMaximize} className="p-1 hover:bg-muted rounded-sm">
            {isMaximized ? <Minimize className="h-3 w-3" /> : <Maximize className="h-3 w-3" />}
          </button>
          <button onClick={onClose} className="p-1 hover:bg-destructive/80 hover:text-destructive-foreground rounded-sm">
            <X className="h-3 w-3" />
          </button>
        </div>
      </div>
      <div className="p-2 text-center bg-card">
        <p className="text-xs text-muted-foreground font-handwritten">Your attention span is cooked. Here&apos;s something to watch while you &quot;learn&qout;.</p>
      </div>
      <div className="flex-1 w-full h-full bg-black">
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={cn(isDragging || isResizing ? "pointer-events-none" : "")}
        ></iframe>
      </div>
      <div
        className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
        onMouseDown={handleResizeStart}
        style={{ zIndex: 101 }}
      >
        <div className="w-full h-full border-r-2 border-b-2 border-muted-foreground/50"></div>
      </div>
    </div>
  );
};

export default FloatingVideo;
