document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('id');

    // Requête pour récupérer les détails du cours
    fetch(`/api/cours/${courseId}`)
        .then(response => response.json())
        .then(course => {
            document.getElementById('course-title').textContent = course.title;
            document.getElementById('course-instructor').textContent = course.instructor;
            document.getElementById('course-time').textContent = `${course.start} - ${course.end}`;
            document.getElementById('course-description').textContent = course.description;

            // Afficher la liste des participants
            const participantsList = document.getElementById('participants-list');
            course.participants.forEach(participant => {
                const listItem = document.createElement('li');
                listItem.textContent = participant.name;
                participantsList.appendChild(listItem);
            });
        });
});