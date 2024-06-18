function searchName() {
    const searchTerm = document.getElementById('search-box').value.trim().toLowerCase();

    // Fetch the text file (assuming names.txt in the same directory)
    fetch('names.txt')
        .then(response => response.text())
        .then(data => {
            const names = data.split('\n').map(name => name.trim().toLowerCase());
            if (names.includes(searchTerm)) {
                document.getElementById('search-result').textContent = `'${searchTerm}' is a bitch!`;
            } else {
                document.getElementById('search-result').textContent = `'${searchTerm}' isnt a bitch!`;
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('search-result').textContent = 'Error fetching data.';
        });
}

// Ball following cursor
document.addEventListener('mousemove', (event) => {
    const cursorBall = document.getElementById('cursor-ball');
    cursorBall.style.left = event.pageX + 'px';
    cursorBall.style.top = event.pageY + 'px';
});
