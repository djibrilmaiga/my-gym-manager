document.addEventListener("DOMContentLoaded", function() {
    // Gestion de la soumission du formulaire
    document.getElementById('update-state-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const etat = document.getElementById('equipment-state').value;
        const commentaires = document.getElementById('comments').value;

        // Envoi des données de mise à jour
        fetch(`/api/equipements/${equipmentId}/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ etat, commentaires })
        }).then(response => response.json())
          .then(data => {
              alert('État mis à jour avec succès !');
              // Réactualiser les informations ou rediriger
          });
    });
});
