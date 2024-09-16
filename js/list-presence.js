let presences = {};

function afficherPresences(coursNom, instructeurNom) {
    document.getElementById("cours-nom").innerText = coursNom;
    document.getElementById("instructeur-nom").innerText = instructeurNom;
    document.getElementById("presence-section").style.display = 'block';

    // Réinitialiser les présences pour chaque cours
    presences = {
        'Amadou Koné': null,
        'Aminata Diallo': null,
    };

    // Réinitialiser les cases cochées
    let checkboxes = document.querySelectorAll("#liste-presences input[type='checkbox']");
    checkboxes.forEach(checkbox => checkbox.checked = false);

    document.getElementById("alert-absent").classList.add('d-none');
}

function marquerPresence(nomAbonne, estPresent) {
    presences[nomAbonne] = estPresent;

    // Vérifier s'il y a des absents
    const absents = Object.values(presences).includes(false);
    if (absents) {
        document.getElementById("alert-absent").classList.remove('d-none');
    } else {
        document.getElementById("alert-absent").classList.add('d-none');
    }
}

function exporterPresence(format) {
    if (format === 'pdf') {
        alert("Les présences seront exportées en PDF (fonctionnalité à implémenter).");
    } else if (format === 'excel') {
        alert("Les présences seront exportées en Excel (fonctionnalité à implémenter).");
    }
}