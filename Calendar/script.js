window.onload = function() {
    const select = document.querySelector('select');
    const header = document.querySelector('h1');

    function updateMonth() {
        header.textContent = select.value;
    }

    function createCalendar() {

    }

    select.addEventListener('change', updateMonth())
}