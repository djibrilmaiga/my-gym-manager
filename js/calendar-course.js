document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: '/api/cours', // URL où vous récupérez vos cours
        eventClick: function(info) {
            // Redirection vers la page de détails du cours
            window.location.href = '/html/manager/cours-detail.html?id=' + info.event.id;
        },
        eventDidMount: function(info) {
            // Personnalisation de l'apparence de l'événement si nécessaire
        },
        editable: false,
        selectable: true,
        dateClick: function(info) {
            // Si nécessaire, gérer les événements de clic sur une date sans cours
        }
    });

    calendar.render();
});
