document.addEventListener('DOMContentLoaded', () => {
    const detailsButton = document.getElementById('details-button');
    const options = document.getElementById('options');
    const orderButton = document.getElementById('order-button');
    const confirmation = document.getElementById('confirmation');

    detailsButton.addEventListener('click', () => {
        options.classList.toggle('hidden');
    });

    orderButton.addEventListener('click', () => {
        const variant = document.getElementById('variant').value;
        const quantity = document.getElementById('quantity').value;
        confirmation.textContent =
            'Objednali ste ' + quantity + ' ks variantu ' + variant + '.';
        confirmation.classList.remove('hidden');
    });
});
