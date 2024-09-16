// Script pour gérer les inscriptions des cours
let selectedCourse = '';
let selectedInstructor = '';
let remainingCapacity = 0;

function inscrire(courseName, instructorName, capacity) {
    const searchAbonne = document.getElementById("search-abonne").value;

    // Vérifier si un abonné a été sélectionné
    if (!searchAbonne) {
        alert('Veuillez sélectionner un abonné avant de continuer.');
        return;
    }

    selectedCourse = courseName;
    selectedInstructor = instructorName;
    remainingCapacity = capacity;

    // Vérifier la capacité restante
    if (remainingCapacity <= 0) {
        document.getElementById("alert-capacity").classList.remove('d-none');
        document.getElementById("alternative-options").style.display = "block";
        return;
    }

    // Afficher le popup de confirmation
    document.getElementById("confirmation-message").innerText = `Voulez-vous inscrire ${searchAbonne} au cours "${selectedCourse}" avec ${selectedInstructor} ?`;
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
}

function confirmerInscription() {
    // Décrémenter la capacité restante
    remainingCapacity--;
    
    // Mettre à jour la capacité dans l'interface
    if (selectedCourse === 'Karaté pour Débutants') {
        document.getElementById('karate-capacity').innerText = remainingCapacity;
    } else if (selectedCourse === 'Boxe pour Intermédiaires') {
        document.getElementById('boxe-capacity').innerText = remainingCapacity;
    }

    // Fermer le modal de confirmation
    const confirmationModal = bootstrap.Modal.getInstance(document.getElementById('confirmationModal'));
    confirmationModal.hide();

    // Envoyer la confirmation par SMS/email (simulé ici par une alerte)
    alert(`L'inscription a été confirmée pour le cours "${selectedCourse}". Un message de confirmation a été envoyé à l'abonné et à l'instructeur.`);
    
    // Masquer l'alerte de capacité si elle était visible
    document.getElementById("alert-capacity").classList.add('d-none');
    document.getElementById("alternative-options").style.display = "none";
}