document.addEventListener('DOMContentLoaded', () => {
    const loadingOutForTheme = document.querySelector('.loadingOut');
    const contentElementForTheme = document.querySelector('.content');
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const catImg = document.querySelector('.introduction-container .introduce img');

    // 通过查询系统配色修改
    const applyDarkMode = (matches) => {
        loadingOutForTheme.classList.toggle('dark', matches);
        contentElementForTheme.classList.toggle('dark', matches);
        if (matches) {
            catImg.src = './imgs/cat_dark.png';
        } else {
            catImg.src = './imgs/cat.png';
        }
    };
    applyDarkMode(darkModeMediaQuery.matches);

    darkModeMediaQuery.addEventListener('change', (e) => {
        applyDarkMode(e.matches);
    });

    // 通过点击img-cat-wrapper切换
    const toggleImgButton = document.querySelector('.introduction-container .img-cat-wrapper');
    toggleImgButton.addEventListener('click', (e) => {
        e.preventDefault();
        loadingOutForTheme.classList.toggle('dark');
        contentElementForTheme.classList.toggle('dark');
        if (catImg.getAttribute('src') === './imgs/cat.png') {
            catImg.src = './imgs/cat_dark.png';
        } else {
            catImg.src = './imgs/cat.png';
        }
    })

    // 阻止img的拖拽
    catImg.addEventListener('dragstart', (e) => {
        e.preventDefault();
    })
});

