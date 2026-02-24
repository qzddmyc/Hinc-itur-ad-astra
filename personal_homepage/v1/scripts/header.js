document.addEventListener('DOMContentLoaded', function () {
    const hour = new Date().getHours();
    const greeting = hour >= 4 && hour < 12 ? "Morning" : hour >= 12 && hour < 18 ? "Afternoon" : "Evening";
    document.querySelector('.main-header .left').innerHTML = `${greeting}, stranger.`;
});