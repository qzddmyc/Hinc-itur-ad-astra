document.addEventListener('DOMContentLoaded', function () {

    const skipDomArrow = document.querySelector('.skipDomArrow');

    skipDomArrow.addEventListener('click', function () {
        const target = this.dataset.skipElemId;
        scrollToElement(target);
    })

    function scrollToElement(targetId) {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
});