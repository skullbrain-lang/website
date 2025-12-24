
'use client';

import { useState, useRef } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function EditorPage() {
  const [code, setCode] = useState("");
  const editorRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="container mx-auto p-4 flex-1">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full min-h-[calc(100vh-10rem)]">
        {/* Editor Column */}
        <div className="flex flex-col md:col-span-2">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-headline font-semibold">Code Editor</h2>
            <Button>
              <Play className="mr-2 h-4 w-4" />
              Run
            </Button>
          </div>
          <Textarea
            ref={editorRef}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write your code here..."
            className="flex-1 font-code bg-card border-2 border-border focus-visible:ring-primary h-full min-h-[400px] md:min-h-0 text-base"
            aria-label="Code Editor"
          />
        </div>

        {/* Output Column */}
        <div className="flex flex-col gap-4">
          <div className='flex-1 flex flex-col h-full'>
            <h2 className="text-xl font-headline font-semibold mb-2">Console</h2>
            <Card className="flex-1 bg-card">
              <CardContent className="p-4">
                <pre className="text-sm font-code text-muted-foreground whitespace-pre-wrap">Output will be displayed here.</pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
