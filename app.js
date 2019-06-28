class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

document.getElementById("book-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData();
    fetch("http://localhost:8000/addbook.php", {
        method: 'post',
        body: formData,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
    }).catch(function (e) {
        console.error(e);
    })
})


