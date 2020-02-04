
const handleSubmimt = (e) => {
    const target = e.target.closest('form');

    if(target) {
        e.preventDefault();

        const target = e.target.querySelector('[name="q"]');

        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            input.value = response.value;
        });
    }
}

addEventListener('submit', handleSubmimt);


