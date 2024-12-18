const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        const sourceDiv = document.querySelector('div[class*="channel-info-content"]');
        const targetDiv = document.querySelector('div[class*="channel-root__upper-watch--with-chat"]');

        if (sourceDiv && targetDiv) {
            if (!sourceDiv.contains(targetDiv) && !targetDiv.contains(sourceDiv)) {
                if (sourceDiv.parentNode && !sourceDiv.parentNode.contains(targetDiv)) {
                    if (sourceDiv.parentNode !== targetDiv.parentNode) {
                        sourceDiv.parentNode.insertBefore(targetDiv, sourceDiv);
                    }
                }
            }
        }

        const persistentPlayer = document.querySelector('div[data-a-player-state]');
        if (persistentPlayer) {
            persistentPlayer.style.top = '0px';
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });
