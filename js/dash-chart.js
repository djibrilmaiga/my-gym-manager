// Scripts for FullCalendar and Chart.js
const ctxParticipation = document.getElementById('participationChart').getContext('2d');
const participationChart = new Chart(ctxParticipation, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Participation',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var ctx = document.getElementById('paiementsChart').getContext('2d');
var paiementsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
            label: 'Paiements (FCFA)',
            data: [30000, 40000, 35000, 50000, 60000, 45000],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
             borderColor: 'rgba(54, 162, 235, 1)',
             borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});