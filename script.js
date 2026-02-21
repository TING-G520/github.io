function filterTutors() {
    const subject = document.getElementById('subject-filter').value;
    const area = document.getElementById('area-filter').value;
    const price = document.getElementById('price-filter').value;

    const cards = document.querySelectorAll('.tutor-card');
    cards.forEach(card => {
        let show = true;

        if (subject && card.dataset.subject !== subject) show = false;
        if (area && card.dataset.area !== area) show = false;
        if (price) {
            const cardPrice = parseInt(card.dataset.price);
            if (price === 'low' && cardPrice >= 200) show = false;
            if (price === 'medium' && (cardPrice < 200 || cardPrice > 400)) show = false;
            if (price === 'high' && cardPrice <= 400) show = false;
        }

        card.style.display = show ? 'inline-block' : 'none';
    });
}
