let lastPipTabId = null; 
let lastPipWindowId = null;

chrome.commands.onCommand.addListener((command) => {
    if (command === "toggle_pip") {
        console.log("toggle_pip command has been pressed");
        chrome.tabs.query({ audible: true }, function (tabs) {
            if (tabs.length > 0) {
                let tabId = tabs[0].id;
                lastPipTabId = tabId; 
                lastPipWindowId = tabs[0].windowId; 
                
                chrome.scripting.executeScript({
                    target: { tabId: tabId },
                    function: togglePiP
                });
            } else if (lastPipTabId) {
                chrome.scripting.executeScript({
                    target: { tabId: lastPipTabId },
                    function: togglePiP
                });
            } else {
                console.log("No video available for PiP.");
            }
        });
    } else if (command === "toggle_pause") {
        console.log("toggle_pause command has been pressed");
        if (lastPipTabId) {
            chrome.scripting.executeScript({
                target: { tabId: lastPipTabId },
                function: togglePlayPause
            });
        } else {
            console.log("No PiP tab available to toggle play/pause.");
        }
    } else if(command === "back_to_tab") {
        console.log("back_to_tab command has been pressed");
        if (lastPipTabId) {
            chrome.windows.update(lastPipWindowId, { focused: true }, function () {

                chrome.tabs.update(lastPipTabId, { active: true });
            });
        }
        else {
            console.log("No PiP tab available to back to tap from");
        }
    } 

    // } else if (command === "toggle_move") {
    //     console.log("toggle_move command has been pressed");

    // } else if (command === "toggle_move") {
    //     console.log("toggle_move command has been pressed");

});

function togglePiP() {
    let video = document.querySelector("video");
    if (video) {
        if (document.pictureInPictureElement) {
            // If already in PiP, exit PiP
            document.exitPictureInPicture();
        } else {
            // Request PiP mode
            video.requestPictureInPicture();
        }
    } else {
        console.log("No video found on this page.");
    }
}

function togglePlayPause() {
    let video = document.querySelector("video");
    if (video) {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
            
        }
    } else {
        console.log("No video found to toggle play/pause.");
    }
}