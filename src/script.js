const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        buttons.forEach(b => {
            b.classList.remove('bg-indigo-600', 'text-white', 'shadow-md', 'hover:-translate-y-0.5'); 
            b.classList.add('bg-white', 'text-slate-600', 'border', 'border-slate-200');
        });
        btn.classList.remove('bg-white', 'text-slate-600', 'border', 'border-slate-200');
        btn.classList.add('bg-indigo-600', 'text-white', 'shadow-md', 'hover:-translate-y-0.5');

        const filter = btn.getAttribute('data-filter');

        cards.forEach(card => {
            const category = card.getAttribute('data-category');
        
            if (filter === 'all' || filter === category) {
                card.classList.remove('hidden');
                card.style.opacity = '0';
                setTimeout(() => card.style.opacity = '1', 50);
            } else {
                card.classList.add('hidden');
            }
        });
    });
});