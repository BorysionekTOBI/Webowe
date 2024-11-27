$(document).ready(function() {
    // Po kliknięciu "Dodaj imię" pokaż pole input i przycisk do wyświetlenia powitania
    $('#add-name-btn').click(function() {
        $('#name-input').val(''); // Wyczyść input
        $('#name-input, #show-greeting-btn').show(); // Pokaż input i przycisk "Wyświetl powitanie"
    });

    // Po kliknięciu "Wyświetl powitanie" wyświetl powitanie lub komunikat o braku imienia
    $('#show-greeting-btn').click(function() {
        let name = $('#name-input').val().trim(); // Pobierz wartość inputu i usuń białe znaki

        if (name) {
            alert("Witaj, " + name + "!"); // Wyświetl powitanie z imieniem
        } else {
            alert("Proszę wpisać swoje imię."); // Komunikat, jeśli input jest pusty
        }

        // Wyczyść i ukryj input oraz przycisk po wyświetleniu powitania
        $('#name-input').val('').hide();
        $('#show-greeting-btn').hide();
    });
});
