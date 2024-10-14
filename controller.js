class LoanController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        document.getElementById('calculateButton').addEventListener('click', () => {
            this.handleCalcul();
        });
    }

    handleCalcul() {
        
        const montant = parseFloat(document.getElementById('montant').value);
        const annees = parseInt(document.getElementById('annees').value);
        const taux = parseFloat(document.getElementById('taux').value);

        
        if (isNaN(montant) || montant <= 0) {
            this.view.afficherErreur("Veuillez entrer un montant valide.");
            return;
        }
        if (isNaN(annees) || annees <= 0) {
            this.view.afficherErreur("Veuillez entrer une durée en années valide.");
            return;
        }
        if (isNaN(taux) || taux <= 0) {
            this.view.afficherErreur("Veuillez entrer un taux d'intérêt valide.");
            return;
        }

        
        this.model = new LoanModel(montant, annees, taux);

        
        const mensualite = this.model.calculerMensualite();
        this.view.clearErreur(); 
        this.view.afficherMensualite(mensualite);

        
        const echeancier = this.model.genererEcheancier();
        this.view.afficherEcheancier(echeancier);

        
        const labels = echeancier.map(item => `Mois ${item.periode}`);
        const interetsData = echeancier.map(item => item.interet);
        const capitalAmortiData = echeancier.map(item => item.capitalAmorti);

        
        this.view.afficherGraphique(labels, interetsData, capitalAmortiData);
    }
}
