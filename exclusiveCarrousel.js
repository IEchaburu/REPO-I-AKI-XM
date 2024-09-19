function desmarcarOutros(checkbox) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
}
function setupEventListeners() {
    const specificCheckbox = document.getElementById('QR\~QID271\~ANSWER\~4');//esto es lo que debo ajustar
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    if (specificCheckbox) {
        specificCheckbox.addEventListener('click', function() {
            desmarcarOutros(specificCheckbox);
        });
    }
    checkboxes.forEach(cb => {
        if (cb !== specificCheckbox) {
            cb.addEventListener('click', function() {
                specificCheckbox.checked = false;
            });
        }
    });
}
setupEventListeners();