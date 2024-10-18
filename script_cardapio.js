
        const buttons = document.querySelectorAll('.filter-btn');
        const items = document.querySelectorAll('.item');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');
                
                items.forEach(item => {
                    if (category === 'todos' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    

