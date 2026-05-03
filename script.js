const searchBtn = document.getElementById('searchBtn');
const ipInput = document.getElementById('ipInput');
const resultsTable = document.getElementById('resultsTable');


const TOKEN = 'ca822278a418d0'; 

searchBtn.addEventListener('click', async () => {
    const ip = ipInput.value.trim();
    if (!ip) return alert("Digite um IP válido");

    try {
        const response = await fetch(`https://ipinfo.io/${ip}?token=${TOKEN}`);
        const data = await response.json();

        if (data.error) throw new Error("IP não encontrado");

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.ip}</td>
            <td>${data.org || 'N/A'}</td>
            <td>${data.city || 'N/A'}</td>
            <td><span class="btn-delete" onclick="this.parentElement.parentElement.remove()">Limpar</span></td>
        `;
        resultsTable.appendChild(row);
        ipInput.value = ''; 
    } catch (error) {
        alert("Erro ao buscar informações: " + error.message);
    }
});