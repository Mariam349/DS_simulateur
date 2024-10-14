document.addEventListener('DOMContentLoaded', () => {
    const model = new LoanModel(1000, 2, 2);
    const view = new LoanView();
    const controller = new LoanController(model, view);
});
