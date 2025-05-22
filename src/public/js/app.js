document.getElementById('consultaForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const cedula = document.getElementById('cedula').value;
    const resultadoDiv = document.getElementById('resultado');
    
    try {
        const response = await fetch(`/api/v1/user/id/${cedula}`);
        const user = await response.json();
        
        if (user.length === 0) {
            resultadoDiv.innerHTML = 'Usuario no encontrado';
            resultadoDiv.style.backgroundColor = '#ffebee';
            resultadoDiv.style.color = '#b71c1c';
            return;
        }
        
        resultadoDiv.innerHTML = `
            ${user[0].firstName} ${user[0].lastName}<br>
            Su documento es: ${user[0].id}
        `;
        resultadoDiv.style.backgroundColor = '#e8f5e9';
        resultadoDiv.style.color = '#2e7d32';
        
    } catch (error) {
        resultadoDiv.innerHTML = 'Error en la consulta';
        resultadoDiv.style.backgroundColor = '#ffebee';
        resultadoDiv.style.color = '#b71c1c';
    }
});