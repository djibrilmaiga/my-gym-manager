    // Fonction de recherche par nom d'équipement
    document.getElementById('searchInput').addEventListener('keyup', function() {
        const searchValue = this.value.toLowerCase();
        const rows = document.querySelectorAll('#equipmentTable tr');

        rows.forEach(row => {
            const equipmentName = row.cells[0].textContent.toLowerCase();
            if (equipmentName.includes(searchValue)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    // Fonction de filtrage par type d'équipement
    document.getElementById('filterType').addEventListener('change', function() {
        const filterValue = this.value;
        const rows = document.querySelectorAll('#equipmentTable tr');

        rows.forEach(row => {
            const equipmentType = row.cells[1].textContent;
            if (filterValue === '' || equipmentType === filterValue) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
