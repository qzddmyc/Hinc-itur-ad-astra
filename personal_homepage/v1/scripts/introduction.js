document.addEventListener('DOMContentLoaded', function () {
    const ageDiv = document.querySelector('.card .intro-item .my-age');

    const a_now = new Date();
    const a_year = a_now.getFullYear();
    const a_month = a_now.getMonth() + 1;
    const a_date = a_now.getDate();

    let myAge = a_year - 2005;

    if (a_month <= 7) {
        myAge -= 1;
    } else if (a_month === 8) {
        if (a_date <= 27) {
            myAge -= 1;
        } else { }
    } else { }

    if (myAge <= 18) {
        myAge = 19;
        alert("Local Time Wrong: Check your system clock!")
    }

    ageDiv.innerHTML = myAge;
});

// plants.css导致的相关hover异常，需要自定义添加hover
document.addEventListener('DOMContentLoaded', function () {
    const parent = document.querySelector('.img-cat-wrapper');

    function isMouseInParent(e) {
        // 获取父元素的边界矩形
        const rect = parent.getBoundingClientRect();

        // 检查鼠标是否在父元素的边界范围内
        return (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
        );
    }

    let timerId;

    // 监听父元素内的鼠标移动
    parent.addEventListener('mousemove', (e) => {
        // 只有当鼠标在父元素自身范围内时才添加hover类
        if (isMouseInParent(e)) {
            parent.classList.add('hover');

            // 移动端时，自动取消显示，模拟短暂hover
            const viewportWidth = window.innerWidth;
            if (viewportWidth < 768) {
                if (timerId) {
                    clearTimeout(timerId);
                }
                timerId = setTimeout(function () {
                    parent.classList.remove('hover');
                }, 2000);
            }
        } else {
            parent.classList.remove('hover');
            if (timerId) {
                clearTimeout(timerId);
                timerId = null;
            }
        }
    });

    // 鼠标离开父元素时移除hover类
    parent.addEventListener('mouseleave', () => {
        parent.classList.remove('hover');
        if (timerId) {
            clearTimeout(timerId);
            timerId = null;
        }
    });
});