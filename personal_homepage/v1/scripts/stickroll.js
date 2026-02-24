document.addEventListener('DOMContentLoaded', function () {

    const StackCards = document.querySelectorAll(".stack-card");
    const stackArea = document.querySelector(".stack-area");

    function rotateCards() {
        let angle = 0;
        StackCards.forEach((card) => {
            if (card.classList.contains("card-active")) {
                card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
            } else {
                card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
                angle = angle - 10;
            }
        });
    }

    rotateCards();

    window.addEventListener("scroll", () => {
        const proportion = stackArea.getBoundingClientRect().top / window.innerHeight;
        if (proportion <= 0) {
            let n = StackCards.length;
            let index = Math.ceil((proportion * n) / 2);
            index = Math.abs(index) - 1;
            for (let i = 0; i < n; i++) {
                if (i <= index) {
                    StackCards[i].classList.add("card-active");
                } else {
                    StackCards[i].classList.remove("card-active");
                }
            }
            rotateCards();
        }
    });

    function adjust() {
        let windowWidth = window.innerWidth;
        let left = document.querySelector(".stick-left");
        left.remove();
        if (windowWidth < 900) {
            stackArea.insertAdjacentElement("beforebegin", left);
        } else {
            stackArea.insertAdjacentElement("afterbegin", left);
        }
    }
    adjust();

    window.addEventListener("resize", adjust);

});