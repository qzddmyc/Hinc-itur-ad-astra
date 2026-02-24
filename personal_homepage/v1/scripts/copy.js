document.addEventListener('DOMContentLoaded', function () {
    const copyElemCard = document.querySelector('.card-back-to-copy');

    copyElemCard.addEventListener('click', function () {
        copyTextToClipboard(this.dataset.copy);
    });

    function copyTextToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text)
                .catch(err => {
                    alert('Copy error! Please copy manually.')
                });
        } else {
            alert('Copy error! Please copy manually.')
        }
    }
});