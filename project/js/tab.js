function setActiveTab(index) {
    let tabs = document.getElementsByClassName('tabs__tab');
    let content = document.getElementsByClassName('page__content');

    for (let i=0; i < tabs.length; i++){
        tabs[i].classList.remove('tabs__tab--active');
        content[i].classList.add('hidden');
    }

    tabs[index].classList.add('tabs__tab--active')
    content[index].classList.remove('hidden');
}

let tabs = document.getElementsByClassName('tabs__tab');
for (let i=0; i < tabs.length; i++){
    tabs[i].addEventListener("click", () => setActiveTab(i));
}