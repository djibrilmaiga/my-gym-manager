function filtrerCours() {
    // Obtenir les valeurs de recherche et de filtre
    const searchValue = document.getElementById("search-course").value.toLowerCase();
    const instructorFilter = document.getElementById("filter-instructor").value;

    // Obtenir les lignes du tableau
    const rows = document.querySelectorAll("#courses-table tbody tr");

    // Parcourir chaque ligne du tableau
    rows.forEach(row => {
        const courseName = row.cells[0].textContent.toLowerCase();
        const instructorName = row.cells[3].textContent;

        // Conditions pour afficher ou masquer la ligne
        const matchesSearch = courseName.includes(searchValue);
        const matchesInstructor = instructorFilter === "" || instructorName === instructorFilter;

        if (matchesSearch && matchesInstructor) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}