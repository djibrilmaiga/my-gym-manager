// Simulation des données de paiement
const payments = [
    {
        subscriberId: 1,
        firstName: "Djibril",
        lastName: "Maïga",
        type: "Inscription",
        amount: 15000,
        paymentDate: "2024-09-10",
        paymentMethod: "Cash",
    },
    {
        subscriberId: 2,
        firstName: "Ali",
        lastName: "Traoré",
        type: "Abonnement",
        amount: 12000,
        paymentDate: "2024-08-30",
        paymentMethod: "Mobile Money",
    },
    {
        subscriberId: 3,
        firstName: "Fatoumata",
        lastName: "Keita",
        type: "Cours",
        amount: 20000,
        paymentDate: "2024-09-01",
        paymentMethod: "Carte",
    }
];

// Fonction pour charger les paiements dans le tableau
function loadPayments(payments) {
    const paymentList = document.getElementById("payment-list");
    paymentList.innerHTML = ""; // On vide la liste
    payments.forEach(payment => {
        const row = `<tr>
            <td>${payment.subscriberId}</td>
            <td>${payment.lastName}</td>
            <td>${payment.firstName}</td>
            <td>${payment.type}</td>
            <td>${payment.amount} CFA</td>
            <td>${payment.paymentDate}</td>
            <td>${payment.paymentMethod}</td>
            <td><button class="btn btn-primary" onclick="window.location.href='/html/manager/paiement-details.html'">Voir Détails</button></td>
        </tr>`;
        paymentList.innerHTML += row;
    });
}

// Fonction pour filtrer par méthode de paiement
function filterByMethod() {
    const selectedMethod = document.getElementById("method").value;
    const filteredPayments = payments.filter(payment => {
        return selectedMethod === "" || payment.paymentMethod === selectedMethod;
    });
    loadPayments(filteredPayments);
}

// Événements pour les filtres
document.getElementById("method").addEventListener("change", filterByMethod);

// Charger les paiements au chargement de la page
window.onload = function() {
    loadPayments(payments);
}