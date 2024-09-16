function rechercherCours() {
    // Logique pour chercher un cours
    // Afficher les résultats des cours dans le tableau
}

function rechercherAbonne() {
    // Logique pour chercher un abonné
    // Afficher les résultats des abonnés dans le tableau
}

function inscrireCours(courseId) {
    // Logique pour sélectionner un cours et activer la section des abonnés
    document.getElementById('abonne-section').style.display = 'block';
    // Remplir les détails du cours sélectionné (par ex. nom de l'instructeur)
}

function confirmerInscription() {
    // Logique pour afficher le popup de confirmation
    var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
}

function validerInscription() {
    // Logique pour valider et enregistrer les abonnés
    // Fermer le modal et notifier de la réussite
}