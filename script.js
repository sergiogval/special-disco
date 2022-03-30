const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 500
        if (c < counter) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            settimeout(updateCounter, 1);
        } 
    }

    updateCounter()
})