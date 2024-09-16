// Fonction pour afficher le formulaire de souscription à un abonnement
function toggleAbonnementForm() {
    const formAbonnement = document.getElementById('form-abonnement');
    const switchAbonnement = document.getElementById('switch-abonnement');
    formAbonnement.style.display = switchAbonnement.checked ? 'block' : 'none';
}

// Fonction pour rediriger vers la page de modification
function editAbonne(id) {
    window.location.href = `/html/manager/abonne-details.html?id=${id}`;
}

// Fonction pour afficher la fenêtre de confirmation de suppression
function confirmDelete(id) {
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    const confirmModal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));

    // Attacher l'ID à l'événement de suppression
    confirmDeleteBtn.onclick = function () {
        deleteAbonne(id);
        confirmModal.hide();
    };

    confirmModal.show();
}

// Fonction pour supprimer un abonné (fonction front-end, à compléter avec la logique backend)
function deleteAbonne(id) {
    console.log('Abonné avec ID ' + id + ' supprimé.');
    // Logique pour supprimer l'abonné (envoi au backend)
};

    function supprimerCours(id) {
        if (confirm("Êtes-vous sûr de vouloir supprimer ce cours ?")) {
            // Logique pour supprimer le cours via une requête à l'API ou suppression dans le DOM
            alert("Cours " + id + " supprimé.");
            // Ici, vous pouvez également faire une requête pour supprimer le cours côté serveur
        }
    };