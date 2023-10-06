// scriptResultados.js (en la página "resultados.html")
document.addEventListener("DOMContentLoaded", function() {
    const tablaResultados = document.querySelector("#tablaResultados");
      // Obtener los envíos almacenados en el almacenamiento local
    const envios = JSON.parse(localStorage.getItem("envios")) || [];
     // Recorrer los envíos y agregar filas a la tabla
    envios.forEach((envio) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${envio.id}</td>
            <td>${envio.nombre}</td>
            <td>${envio.apellidos}</td>
            <td>${envio.telefono}</td>
            <td>${envio.correo}</td>
            <td>${envio.edad}</td>
            <td>${envio.fechaNacimiento}</td>
            <td> <button class="borradoTotal borrarFila">Eliminar</button> </td>
        `;
        tablaResultados.appendChild(fila);
    });

    formulario = document.getElementById("formBorrado");

    formulario.addEventListener("reset", function(event) {
        event.preventDefault();
        localStorage.removeItem("envios");
        location.reload();
    });

    const borrarFila = document.querySelector(".borrarFila");

    borrarFila.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("Eso");
    });

});
