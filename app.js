function showAlert(message, classes) {
    const div = document.createElement('div');
    div.className = `alert alert-${classes}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.myform-container');
    const form = document.getElementById('book-form');
    container.insertBefore(div, form);
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
}
function checkInt(value) {
    let storeValue = value;
    value = parseInt(value);
    value = value.toString();
    if (value === storeValue) {
        return true;
    } else {
        return false;
    }
}
function confirmaction() {
    return confirm("Are you sure want to delete data");
}
function clearField() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}
//post data to database
document.getElementById("book-form").addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;
    if (title === '' || author === '' || isbn === '') {
        showAlert("Please Fill all field", "success");
        return;
    } else if (!checkInt(isbn)) {
        showAlert("ISBN should Be numeric", "success");
        return;
    }
    const formData = new FormData(document.getElementById('book-form'));
    fetch("addbook.php", {
        method: 'post',
        body: formData
    }).then(function (response) {
        return response.text();
    }).then(function (text) {
        console.log(text);
        var jsonvalue = JSON.parse(text);
        var successValue = jsonvalue.response.success;
        if (successValue == 1) {
            window.location.href = "index.php";
        } else {
            showAlert("No data inserted", 'primary');
        }
    }).catch(function (e) {
        console.error(e);
    })
});
//display Table
function getDatabaseData() {
    fetch("get.php")
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            data.forEach(function (item, index) {
                //dataTable code that display datatable
                $(document).ready(function () {
                    $('#book-table').DataTable();
                    $('.dataTables_length').addClass('bs-select');
                });
                const list = document.querySelector('#book-list');
                const row = document.createElement('tr');
                row.innerHTML = `
                <td>${item.title}</td>
                <td class="${item.id}">${item.author}</td>
                <td>${item.isbn}</td>
                <td id="${item.id}">
                    <form class="form-delete">
                        <input type="hidden" name="id" value="${item.id}"/>
                        <p class="btn btn-danger btn-sm delete">X</p>
                    </form>
                </td>
                `;
                list.appendChild(row);
            })
        }).catch(function (e) {
            console.error(e);
        })
}
//DOMContentLoaded
document.addEventListener("DOMContentLoaded", function (e) {
    getDatabaseData();
});
//delete data
document.querySelector('#book-list').addEventListener('click', function (e) {
    if (e.target.parentElement.className == "form-delete") {
        console.log(e.target.parentElement);
        var formData = new FormData(e.target.parentElement)
        var a = e.target.parentElement.parentElement.id;
        if (confirmaction()) {
            fetch("delete", {
                method: 'post',
                body: formData
            }).then(function (response) {
                console.log(response.json());
            }).then(function (data) {
                console.log(data);
                window.location.href = "index.php"

            })
        }

    }
    // .parentElement.previousElementSibling.previousElementSibling.className;
    //.textContent

})
