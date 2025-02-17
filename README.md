# ChromePiPControl Extension

![Logo](images/video-player-colors(512px).png)

**ChromePiPControl** is a Chrome extension that allows you to control videos in Picture-in-Picture (PiP) mode across all tabs. It provides the ability to toggle PiP mode, play/pause videos, and return to the tab where the video is playing—all with keyboard shortcuts.

## Features
- **Toggle Picture-in-Picture (PiP) mode**: Automatically activates or deactivates PiP for the first active video found on any tab.
- **Play/Pause control**: Toggle play/pause for the currently active video in PiP mode.
- **Return to tab**: Quickly switch back to the tab where the PiP video is playing.

## Commands

### 1. **Toggle PiP Mode**
   - **Command**: `Alt+P` (default)
   - **Action**: This command will toggle Picture-in-Picture (PiP) mode for the first video playing across all tabs. If no video is playing, it will activate PiP mode on the last detected video.

### 2. **Toggle Play/Pause**
   - **Command**: `Alt+O` (default)
   - **Action**: This command will toggle play/pause for the video in PiP mode.

### 3. **Back to Tab**
   - **Command**: `Alt+L` (default)
   - **Action**: This command will return you to the tab where the PiP video is playing and make it active.

## How to Change Commands

You can modify the default keyboard shortcuts in Chrome by following these steps:

1. Open Chrome and go to the **Extensions page** by typing `chrome://extensions/` in the address bar.
2. Click on the **hamburger menu** (three horizontal lines) at the top left of the page.
3. Select **Keyboard shortcuts**.
4. In the Keyboard Shortcuts window, scroll down to find **ChromePiPControl**.
5. Click on the input field next to each command and set your desired shortcut.
6. Press **Save** to confirm your changes.

## Installation

To install the **ChromePiPControl** extension:

1. Clone or download the repository.
2. Go to `chrome://extensions/` in your Chrome browser.
3. Enable **Developer mode** by toggling the switch at the top right.
4. Click on the **Load unpacked** button and select the directory where the extension files are located.
5. The extension should now be active and ready to use.

## Notes
- The extension works across all open tabs and automatically detects playing videos.
- The commands can be customized via the Chrome Extensions page as described above.
- Ensure that you have the necessary permissions to use the extension, such as `activeTab` and `tabs`.

---

© 2025 ChromePiPControl
