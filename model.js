class LoanModel {
    constructor(montant, annees, taux) {
        this.montant = montant;
        this.annees = annees;
        this.taux = taux / 100;
        this.mensualite = 0;
        this.nombreMois = this.annees * 12;
        this.tauxMensuel = this.taux / 12;
    }

    calculerMensualite() {
        this.mensualite = (this.montant * this.tauxMensuel) / (1 - Math.pow(1 + this.tauxMensuel, -this.nombreMois));
        return this.mensualite;
    }

    genererEcheancier() {
        let echeancier = [];
        let capitalRestant = this.montant;

        for (let i = 1; i <= this.nombreMois; i++) {
            let interet = capitalRestant * this.tauxMensuel;
            let capitalAmorti = this.mensualite - interet;
            capitalRestant -= capitalAmorti;

            echeancier.push({
                periode: i,
                capitalAmorti: capitalAmorti.toFixed(2),
                interet: interet.toFixed(2),
                capitalRestant: capitalRestant.toFixed(2),
                mensualite: this.mensualite.toFixed(2)
            });
        }

        return echeancier;
    }
}
