// Vanilla JS Tab Logic
document.addEventListener('DOMContentLoaded', () => {
    const vanillaTabsContainer = document.getElementById('vanilla-tabs-container');
    if (vanillaTabsContainer) { // nullチェック
        const tabButtons = vanillaTabsContainer.querySelectorAll('.tab-buttons button');
        const tabPanels = vanillaTabsContainer.querySelectorAll('.tab-content .tab-panel');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanels.forEach(panel => panel.classList.remove('active'));

                button.classList.add('active');
                const targetPanelId = button.getAttribute('data-tab-target');
                const targetPanel = vanillaTabsContainer.querySelector(targetPanelId);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    }
}); 