const form = document.getElementById('ip-form');
const tableBody = document.querySelector('#ip-table tbody');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const ip = document.getElementById('ip-input').value;
    const mask = document.getElementById('mask-input').value;
    const version = document.getElementById('version-input').value;

    addRow(ip, mask, version);
    form.reset();
});

function addRow(ip, mask, version) {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td contenteditable="true">${ip}</td>
        <td contenteditable="true">${mask}</td>
        <td contenteditable="true">${version}</td>
        <td>
            <button class="delete-btn" onclick="deleteRow(this)">Excluir</button>
        </td>
    `;

    tableBody.appendChild(row);
}

function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
