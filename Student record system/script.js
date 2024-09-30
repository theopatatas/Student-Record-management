document.getElementById('recordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;
    const section = document.getElementById('section').value;
    addRecord(name, year, section);
    this.reset();
});

function addRecord(name, year, section) {
    const tableBody = document.querySelector('#recordTable tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${year}</td>
        <td>${section}</td>
        <td>
            <button class="edit" onclick="editRecord(this)">Edit</button>
            <button class="delete" onclick="deleteRecord(this)">Delete</button>
        </td>
    `;
    tableBody.appendChild(row);
}

function editRecord(button) {
    const row = button.parentNode.parentNode;
    document.getElementById('name').value = row.children[0].innerText;
    document.getElementById('year').value = row.children[1].innerText;
    document.getElementById('section').value = row.children[2].innerText;
    deleteRecord(button);
}

function deleteRecord(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
