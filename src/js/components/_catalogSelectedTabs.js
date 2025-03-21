function catalogSelectedTabs() {
    const tabs = document.querySelectorAll('.catalog__selected-tab-item');
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => {
        tabs.forEach((innerTab, i) => {
          innerTab.classList.remove('isActive');
        });
        tab.classList.add('isActive');
      });
    });
}

export default catalogSelectedTabs;