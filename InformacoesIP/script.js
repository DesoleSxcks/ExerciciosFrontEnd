const addBtn = document.getElementById('add-btn');
const tableBody = document.querySelector('#ip-table tbody');

addBtn.addEventListener('click', () => {
    const ip = document.getElementById('ip').value;
    const mask = document.getElementById('mask').value;
    const version = document.getElementById('version').value;

    if (ip && mask && version) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${ip}</td>
            <td>${mask}</td>
            <td>${version}</td>
            <td>
                <button class="btn-delete" onclick="deleteRow(this)">×</button>
                <button class="btn-edit" onclick="editRow(this)">✎</button>
            </td>
        `;
        tableBody.appendChild(row);
        
        // Limpar campos
        document.getElementById('ip').value = '';
        document.getElementById('mask').value = '';
        document.getElementById('version').value = '';
    } else {
        alert("Preencha todos os campos!");
    }
});

function deleteRow(btn) {
    if(confirm("Deseja excluir este registro?")) {
        btn.closest('tr').remove();
    }
}

function editRow(btn) {
    const row = btn.closest('tr');
    const cells = row.querySelectorAll('td:not(:last-child)');
    const isEditing = row.classList.toggle('editing');

    cells.forEach(cell => {
        cell.contentEditable = isEditing;
    });

    if (isEditing) {
        btn.innerText = 'ok'; // Muda o ícone para confirmar
        cells[0].focus();
    } else {
        btn.innerText = '✎';
    }
}
