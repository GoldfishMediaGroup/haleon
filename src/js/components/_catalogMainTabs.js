function catalogMainTabs() {
  const tabs = document.querySelectorAll('.catalog__main-tab-item');
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabs.forEach((innerTab, i) => {
        innerTab.classList.remove('isActive');
      });
      tab.classList.add('isActive');
    });
  });
}

export default catalogMainTabs;
