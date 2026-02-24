document.addEventListener('DOMContentLoaded', function () {

    const loadingOut = document.querySelector('.loadingOut');
    const loading = document.querySelector('.loading');
    const content = document.querySelector('.content');

    const fixedLoadTime = 500;

    // 打开网页后，为.loading元素添加消失的动画
    window.addEventListener('load', function () {
        setTimeout(() => {
            loading.classList.add('disappearingDots');
        }, fixedLoadTime);

        setTimeout(() => {
            content.classList.remove('disabled');
        }, fixedLoadTime + 500);

        setTimeout(() => {
            loadingOut.classList.add('disappearingLoadingOut');
        }, fixedLoadTime + 1100);
    });
    // 解除注释后，为div.content添加disabled; 为loadingOut去除disabled.

    // .loading动画结束时，背景色转换
    loading.addEventListener('animationend', () => {
        loading.classList.add('disabled')
        loading.classList.remove('disappearingDots');
    })

    // .loadingOut动画结束时，去除该元素的显示
    loadingOut.addEventListener('animationend', (e) => {
        if (e.target === loadingOut) {
            loadingOut.classList.remove('disappearingLoadingOut');
            loadingOut.classList.add('disabled');
        }
    })

    // 生成旋转的原点.dot，并初始化类
    const loadingDiv = document.querySelector('.dots');
    const numbers_of_dots = 36;
    const dotDeg = parseInt(360 / numbers_of_dots);
    const containerSize = 230;
    const aniDuration = 2;
    for (let i = 0; i < numbers_of_dots; i++) {
        const dotDiv = document.createElement('div');
        dotDiv.classList.add('dot');
        dotDiv.style.transform = `rotate(${dotDeg * (i + 1)}deg) translateY(-${containerSize / 2}px)`;

        divBefore = document.createElement('div');
        divBefore.classList.add('bef');
        divAfter = document.createElement('div');
        divAfter.classList.add('aft');
        divBefore.style.animationDelay = `-${(aniDuration / numbers_of_dots * 6 * (i + 1)).toFixed(3)}s`;
        divAfter.style.animationDelay = `-${(aniDuration / numbers_of_dots * 6 * (i + 1)).toFixed(3)}s`;
        dotDiv.appendChild(divBefore);
        dotDiv.appendChild(divAfter);

        loadingDiv.appendChild(dotDiv);
    }
    
});