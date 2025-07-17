
document.getElementById('btn').addEventListener('click', () => {
    fetch('/gethello')
        .then(response => response.text())
        .then(data => {
            document.getElementById('response').textContent = data;
        })
        .catch(err => {
            document.getElementById('response').textContent = 'Fetch error in data';
            console.error(err);
        });
});