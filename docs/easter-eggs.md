# 🥚 404 Page Easter Eggs Documentation

## Overview

The SkullBrain 404 page contains multiple hidden easter eggs that users can discover through various interactions. Here's a complete guide to all available easter eggs and how to activate them.

---

## 🎮 Easter Egg #1: Konami Code Overdrive

**Activation Method:** Keyboard sequence  
**Input:** `↑ ↑ ↓ ↓ ← → ← → B A`  

### Effects

- Activates "KONAMI OVERDRIVE ACTIVATED" status indicator
- Everything starts bouncing (`animate-bounce`)
- Phrase changes speed up (500ms intervals instead of 3000ms)
- Entire content container gets bounce animation
- ⚡ lightning bolt indicators appear

### Duration: Permanent until page refresh

---

## 🟢 Easter Egg #2: Matrix Mode

**Activation Method:** Keyboard sequence  
**Input:** Type `MATRIX` (sequential key presses)  
**Duration**: Permanent until page refresh

### Effects

- Matrix digital rain overlay appears across entire screen
- All text turns green (`text-green-400`)
- 404 title gets chromatic aberration effect
- Phrase text becomes monospace font and animates character by character
- Skull spins continuously
- Phrase changes become very rapid (200ms intervals)
- Status indicator: "> ENTERING THE MATRIX... REALITY.EXE NOT FOUND"

**Note**: 5-second timeout window for sequence completion

---

## 🌈 Easter Egg #3: Rainbow Mode

**Activation Method:** Type specific words  
**Input:** Any of these words

```js
    'skullbrain', 'brainrot', 'ohio',
    'sigma', 'rizz', 'gyatt', 'skibidi',
    'mewing', 'looksmaxxing', 'chad', 'gigachad',
    'based', 'cringe', 'sussy', 'amogus', 'sus',
    'imposter','fr', 'slay', 'bet',
    'lowkey', 'fire', 'goated', 'sheesh', 
    'bruh', 'dank', 'karen', 'chad',
    'noob', 'trash', 'goat', 'nuts', 
    'godlike', 'vibe', 'aura', 'ick', 
    'delulu', 'dab', 'yeet','cap',
```

**Detection:** Case-insensitive, checks last 10 typed characters

### Effects

- 404 title becomes rainbow gradient text
- Phrase text becomes rainbow gradient with bounce animation
- Background noise overlay gets pulse animation
- Skull becomes transparent with bounce animation
- Status indicator: "🌈 RAINBOW BRAINROT MODE UNLOCKED 🌈"

**Note**: Can be reactivated by typing any trigger word again

---

## 💀 Easter Egg #4: Skull Overdrive

**Activation Method:** Click the skull multiple times  
**Input:** Click the skull 7+ times  
**Counter:** Resets after activation

### Effects

- Code block slides down and becomes visible
- Skull gets flash animation (`animate-flash`)
- Action buttons get glitch animation (`animate-fast-glitch`)
- Shows SkullBrain-themed code snippet
- All overdrive elements get glitch effects

---

## 🔄 Easter Egg #5: Page Flip (Hidden)

**Activation Method:** Rapid skull clicking  
**Input:** Triple-click the skull within 1 second (3 clicks < 200ms apart)  
**Detection:** Measures time between clicks

### Effects

- **Flips the entire page upside down!** (`transform: rotate(180deg)`)
- Smooth 1-second transition animation
- Click again (triple-click) to flip back to normal
- Completely hidden - no status indicators

**Note**: Most hidden easter egg - no visual feedback about activation method

## 🐛 Reset Conditions

- **Page Refresh**: Resets all easter eggs
- **Rainbow Mode**: Auto-disables after 10 seconds
- **Other Modes**: Permanent until refresh
- **Counters**: Reset after successful activation

This documentation serves as your master reference for all hidden features!
