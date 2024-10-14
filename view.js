class LoanView {
    constructor() {
        this.resultContainer = document.getElementById('resultat');
        this.errorContainer = document.getElementById('error');
    }

    afficherErreur(message) {
        this.errorContainer.innerHTML = `<p style="color: red;"><strong>Erreur:</strong> ${message}</p>`;
    }

    clearErreur() {
        this.errorContainer.innerHTML = '';
    }

    afficherMensualite(mensualite) {
        this.resultContainer.innerHTML = `<p>Mensualité : <strong>${mensualite.toFixed(2)} €</strong></p>`;
    }

    afficherEcheancier(echeancier) {
        let tableau = '<table class="result-table"><thead><tr><th>Période</th><th>Capital Amorti</th><th>Intérêts</th><th>Capital Restant</th><th>Mensualité</th></tr></thead><tbody>';

        echeancier.forEach((ligne) => {
            tableau += `<tr>
                            <td>${ligne.periode}</td>
                            <td>${ligne.capitalAmorti}</td>
                            <td>${ligne.interet}</td>
                            <td>${ligne.capitalRestant}</td>
                            <td>${ligne.mensualite}</td>
                        </tr>`;
        });

        tableau += '</tbody></table>';
        this.resultContainer.innerHTML += tableau;

        
        const resultTable = document.querySelector('.result-table');
        resultTable.style.opacity = 0;
        setTimeout(() => {
            resultTable.style.opacity = 1;
        }, 100);
    }

    afficherGraphique(labels, interets, capitalAmorti) {
        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Intérêts',
                        data: interets,
                        borderColor: 'rgba(255, 99, 132, 1)',
                        fill: false
                    },
                    {
                        label: 'Capital Amorti',
                        data: capitalAmorti,
                        borderColor: 'rgba(54, 162, 235, 1)',
                        fill: false
                    }
                ]
            }
        });
    }
}
