# AITextAssistant 

A Chrome Extension that proofreads, rewrites, and summarizes text using Chrome built-in AI (Gemini Nano).

## Features
- Proofread text for grammar and clarity
- Rewrite text in a formal style
- Summarize long paragraphs and highlight key points

## Installation
1. Download or clone this repository.
2. Open `chrome://extensions/` in Chrome.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select this folder.
5. Click the extension icon to open the popup.

## API Integration
- Requires access to Chrome’s Gemini Nano client-side AI APIs.
- Replace any mock API functions with `chrome.ai.*` calls as shown in `popup.js`.
