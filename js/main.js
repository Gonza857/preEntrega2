// VARIABLES CON VALOR
let registrados = [{
        nombre: "facundo",
        apellido: "casal"
    },
    {
        nombre: "yael",
        apellido: "roufe"
    }, {
        nombre: "gonzalo",
        apellido: "ramos"
    }
];

// VARIABLES SIN VALOR DEFINIDO
let arrayAlumnos;
let nombreAlumnoValue;
let apellidoAlumnoValue;

// VARIABLES CON ARRAYS VACIOS
let alumnosObjeto = [];
let cursosTotales = [];
let fetchCursos = [];

// --------------------------------

///// ASIGNACION DE NODOS A VARIABLES /////

// -------- NAVBAR --------

// CONTENEDOR DE BOTONES FUNCIONALES
let controlBox = document.getElementById("controlBox");
controlBox.style.display = "none";

// BOTONES
// BOTON MOSTRAR FORMULARIO PARA BUSCAR ALUMNOS
let btnNavBuscarAlumno = document.getElementById("btnNavBuscarAlumno");
btnNavBuscarAlumno.onclick = (e) => {
    e.preventDefault();
    cursosBox.textContent = "";
    tituloColumnaR.textContent = "Cursos añadidos";
    cargarCursosFetch();
    cursosTotales.forEach((curso) => sumarHTML(curso))
    // FORM AÑADIR CURSO / FORM PREGUNTAR / FORM AGREGAR ALUMNOS
    crearCursoContainer.style.display = "none";
    preguntarContainer.style.display = "none";
    agregarAlumnosContainer.style.display = "none";
    // FORM MODIFICAR CURSO
    editarCursoContainer.style.display = "none";
    // FORM ELIMINAR CURSO 
    eliminarCursoContainer.style.display = "none";
    // FORM BUSCAR CURSO
    buscarCursoContainer.style.display = "none";
    // FORM BUSCAR ALUMNO
    buscarAlumnoContainer.style.display = "block";
}

// BOTON MOSTRAR FORMULARIO PARA AÑADIR CURSO
let btnNavAgregarCursos = document.getElementById("btnNavAgregarCursos");
btnNavAgregarCursos.onclick = (e) => {
    tituloColumnaR.textContent = "Cursos añadidos";
    cursosBox.textContent = "";
    cargarCursosFetch();
    cursosTotales.forEach((curso) => sumarHTML(curso))
    e.preventDefault();
    // FORM AÑADIR CURSO / FORM PREGUNTAR / FORM AGREGAR ALUMNOS
    crearCursoContainer.style.display = "block";
    preguntarContainer.style.display = "none";
    agregarAlumnosContainer.style.display = "none";
    // FORM MODIFICAR CURSO
    editarCursoContainer.style.display = "none";
    // FORM ELIMINAR CURSO 
    eliminarCursoContainer.style.display = "none";
    // FORM BUSCAR CURSO
    buscarCursoContainer.style.display = "none";
    // FORM BUSCAR ALUMNO
    buscarAlumnoContainer.style.display = "none";
}

// BOTON MOSTRAR FORMULARIO PARA ELIMINAR CURSO (FUNCIONA CON LOS DEL LOCAL STORAGE)
let btnNavEliminarCursos = document.getElementById("eliminarCurso");
// MOSTRAR FORMULARIO PARA ELIMINAR CURSOS
btnNavEliminarCursos.onclick = (e) => {
    e.preventDefault();
    tituloColumnaR.textContent = "Cursos añadidos";
    cursosBox.textContent = "";
    cargarCursosFetch();
    cursosTotales.forEach((curso) => sumarHTML(curso))
    // FORM BUSCAR ALUMNO
    buscarAlumnoContainer.style.display = "none";
    // FORM AÑADIR CURSO / FORM PREGUNTAR / FORM AGREGAR ALUMNOS
    crearCursoContainer.style.display = "none";
    preguntarContainer.style.display = "none";
    agregarAlumnosContainer.style.display = "none";
    // FORM BUSCAR CURSO
    buscarCursoContainer.style.display = "none";
    // FORM MODIFICAR CURSO
    editarCursoContainer.style.display = "none";
    // FORM ELIMINAR CURSO MOSTRAR
    eliminarCursoContainer.style.display = "block";
}

// BOTON BUSCAR CURSO
let btnNavBuscarCurso = document.getElementById("btnNavBuscarCurso");
btnNavBuscarCurso.onclick = (e) => {
    e.preventDefault();
    cursosBox.textContent = "";
    tituloColumnaR.textContent = "Cursos añadidos";
    cargarCursosFetch();
    cursosTotales.forEach((curso) => sumarHTML(curso))
    // FORM BUSCAR ALUMNO
    buscarAlumnoContainer.style.display = "none";
    // FORM AÑADIR CURSO / FORM PREGUNTAR / FORM AGREGAR ALUMNOS
    crearCursoContainer.style.display = "none";
    preguntarContainer.style.display = "none";
    agregarAlumnosContainer.style.display = "none";
    // FORM MODIFICAR CURSO
    editarCursoContainer.style.display = "none";
    // FORM ELIMINAR CURSO 
    eliminarCursoContainer.style.display = "none";
    // FORM BUSCAR CURSO
    buscarCursoContainer.style.display = "block";
}

// CONTENEDOR DE BOTONES PARA LOGIN
let loginBox = document.getElementById("loginBox");
loginBox.style.display = "none";

// BOTONES 
// BOTON PARA INICIAR SESION
let btnNavIniciarSesion = document.getElementById("btnNavIniciarSesion");
btnNavIniciarSesion.onclick = (e) => {
    e.preventDefault();
    iniciarSesionBox.style.display = "block";
}

// BOTON CERRAR SESION
let btnNavCerrarSesion = document.getElementById("btnNavCerrarSesion");
btnNavCerrarSesion.onclick = (e) => {
    e.preventDefault();
    borrarSesion();
}

// -------- SECCION PARA VER CURSOS --------

// TITULO DE LA SECCION
let tituloColumnaR = document.querySelector(".tituloAñadidos");

// DIV CONTAINER DE CURSOS AÑADIDOS Y DIV DE CURSOS
let cursosBox = document.getElementById("cursosBox");

// -------- FORUMLARIO PARA AGREGAR CURSOS --------

// INPUTS
let año = document.getElementById("año");
let division = document.getElementById("division");
let turno = document.getElementById("turno");

// BOTON
let btnAgregar = document.getElementById("btnAgregar");
/* AGREGAR CURSOS
1) TOMA EL VALOR DE LOS INPUTS
2) SI NO ESTAN VACIOS, MUESTRA PARA ELEGIR SI AGREGAR ALUMNOS
3) SI ESTA VACIO, TIRA ALERT
*/
btnAgregar.onclick = (e) => {
    e.preventDefault();
    let añoValor = año.value;
    let divisionValor = division.value;
    let turnoValor = turno.value;
    if (añoValor != "" && divisionValor != "" && turnoValor != "") {
        crearCursoContainer.style.display = "none";
        preguntarContainer.style.display = "block";
    } else {
        Swal.fire("Faltan datos para agregar el curso")
    }
}

// CONTENEDOR DEL FORMULARIO
let crearCursoContainer = document.getElementById("crearCursoContainer");
crearCursoContainer.style.display = "none";

// FORMULARIO
let formulario = document.getElementById("crearCurso");

// -------- FORMULARIO PARA ELIMINAR CURSOS --------

// CONTENEDOR DE FORMULARIO PARA ELIMINAR CURSOS
let eliminarCursoContainer = document.getElementById("eliminarCursoContainer")
eliminarCursoContainer.style.display = "none";

// FORMULARIO PARA ELIMINAR
let deleteForm = document.getElementById("deleteForm");

// INPUTS
let añoBorrar = document.getElementById("añoBorrar");
let divisionBorrar = document.getElementById("divisionBorrar");

// BOTON
let btnBorrarCurso = document.getElementById("btnBorrarCurso");
/* BORRAR CURSOS
1) REMUEVE EL CURSO INSERTADO DEL LOCAL STORAGE
2) VALIDA SI LOS INPUTS ESTAN COMPLETOS, SI NO, TIRA ALERTA
3) SI NO ENCUENTRA, DEVUELVE ALERT. SI ENCUENTRA, LO RECORTA E IMPRIME NUEVAMENTE EL ARRAY DE CURSOS Y TRAE EL FETCH
IMPORTANTE ACLARACION AL PROFESOR/TUTOR: NO ELIMINA LOS CURSOS QUE TRAE EL FETCH, SOLO ELIMINA LOS QUE CREAMOS NOSOTROS USANDO LA APP.
*/
btnBorrarCurso.onclick = (e) => {
    localStorage.removeItem("cursos");
    e.preventDefault();
    if (añoBorrar.value != "" || divisionBorrar.value != "") {
        let posicionObjeto = cursosTotales.findIndex((el) => el.año == añoBorrar.value && el.division == divisionBorrar.value);
        if (posicionObjeto == -1) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No existe el curso que queres borrar',
            })
        } else {
            cursosTotales.splice(posicionObjeto, 1);
            cursosBox.innerHTML = "";
            cargarCursosFetch();
            localStorage.removeItem("cursos");
            cursosTotales.forEach((curso) => {
                sumarHTML(curso);
            })
            localStorage.setItem("cursos", JSON.stringify(cursosTotales));
            añoBorrar.value = "";
            divisionBorrar.value = "";
            Swal.fire({
                icon: "success",
                text: "¡Se borro correctamente el curso!"
            })
        }
    } else {
        Swal.fire("Faltan datos");
    }
}

// -------- FORMULARIO PARA AGREGAR ALUMNOS --------
// CONTENEDOR
let agregarAlumnosBox = document.getElementById("agregarAlumnosBox");
// BOTON
let agregarAlumnosBtn = document.getElementById("agregarAlumnosBtn");
//FORM CONTENEDOR DE INPUTS
let agregarAlumnosContainer = document.getElementById("agregarAlumnosContainer");
agregarAlumnosContainer.style.display = "none";
// INPUTS
// CONTENEDOR DE INPUTS
let nombreAlumno = document.getElementById("nombreAlumno");
let apellidoAlumno = document.getElementById("apellidoAlumno");
let cantidadAlumnos = document.getElementById("cantidadAlumnos");
// BOTON PARA SUMAR ALUMNOS AL ARRAY 
let btnAgregarAlumno = document.getElementById("btnAgregarAlumno");
btnAgregarAlumno.style.display = "none";
/* BOTON PARA AÑADIR ALUMNO
1) TOMA LOS VALORES DE LOS INPUTS
2) SI TIENEN DATOS, Y CREA UN ALUMNO CON UNA CLASE Y LO SUMA AL ARRAY DE ALUMNOS ADEMAS DE MOSTRAR EN EL HTML CUANTOS ALUMNOS MOSTRAMOS
3) SI NO TIENEN DATOS, TIRO ERROR
*/
btnAgregarAlumno.onclick = (e) => {
    e.preventDefault();
    alumnosAgregados.style.display = "block";
    nombreAlumnoValue = nombreAlumno.value;
    apellidoAlumnoValue = apellidoAlumno.value;
    if (nombreAlumnoValue != "" && apellidoAlumnoValue != "") {
        let alumno = new Alumno(nombreAlumnoValue, apellidoAlumnoValue);
        alumnosObjeto.push(alumno);
        mostrarAlumnos(alumnosObjeto);
        apellidoAlumno.value = "";
        nombreAlumno.value = "";
    } else {
        Swal.fire("Faltan datos del alumno")
    }
}
// BOTON QUE AGREGA EL ARRAY DE ALUMNOS A LA PROPIEDAD DE ALUMNOS, DEL CURSO POR CREAR
let btnAgregarAyC = document.getElementById("btnAgregarAyC");
btnAgregarAyC.onclick = () => {
    alumnosAgregados.style.display = "block";
    nombreAlumnoValue = nombreAlumno.value;
    apellidoAlumnoValue = apellidoAlumno.value;
    if (nombreAlumnoValue != "" && apellidoAlumnoValue != "") {
        let alumno = new Alumno(nombreAlumnoValue, apellidoAlumnoValue);
        alumnosObjeto.push(alumno);
        mostrarAlumnos(alumnosObjeto);
        apellidoAlumno.value = "";
        nombreAlumno.value = "";
    } else {
        Swal.fire("Faltan datos del alumno")
    }
    agregarAyC(alumnosObjeto);
    cursosBox.innerHTML = "";
    cargarCursosFetch();
    cursosTotales.forEach((curso) => {
        sumarHTML(curso);
    })
    agregarAlumnosContainer.style.display = "none";
    alumnosAgregadosBox.style.display = "none";
    alumnosObjeto = [];
    alumnosAgregados.innerHTML = "";
    Swal.fire({
        icon: "success",
        text: "¡Se agregó correctamente el curso!"
    })
    apellidoAlumno.value = "";
    nombreAlumno.value = "";
}

// -------- FORMULARIO PARA PREGUNTAR SI QUIERE AÑADIR ALUMNOS --------

// CONTENEDOR
let preguntarContainer = document.getElementById("preguntarContainer");
preguntarContainer.style.display = "none";

// PARRAFO CON TEXTO
let preguntaAñador = document.getElementById("preguntarAñadir");

// BOTONES

let si = document.getElementById("si");
// MUESTRA EL FORMULARIO PARA AGREGAR ALUMNOS
si.onclick = (e) => {
    e.preventDefault();
    agregarAlumnosContainer.style.display = "block";
    btnAgregarAlumno.style.display = "block";
    preguntarContainer.style.display = "none";
    alumnosAgregadosBox.style.display = "block"
}

let no = document.getElementById("no");
// AL NO CARGAR ALUMNOS, SUBE EL CURSO CREADO PERO SIN ALUMNOS
no.onclick = (e) => {
    e.preventDefault();
    let cursoCreado = preCargaCurso(); 
    preguntarContainer.style.display = "none";
    crearCursoContainer.style.display = "block";
    cursosTotales.push(cursoCreado);
    cursosBox.textContent = "";
    cargarCursosFetch();
    cursosTotales.forEach((curso) => {
        sumarHTML(curso);
    })
    localStorage.setItem("cursos", JSON.stringify(cursosTotales));
}

// -------- FORMULARIO PARA INICIAR SESION --------
// CONTENEDOR
//CONTENEDOR DE FORM
let iniciarSesionBox = document.getElementById("iniciarSesionBox");
iniciarSesionBox.style.display = "none";
// FORM
// INPUTS DEL FORM
let nombreUsuario = document.getElementById("nombreUsuario");
let apellidoUsuario = document.getElementById("apellidoUsuario");
// BOTON DEL FORM
let btnIniciarSesionForm = document.getElementById("btnIniciarSesionForm");
btnIniciarSesionForm.onclick = (e) => {
    e.preventDefault()
    let nombreUsuarioValue = nombreUsuario.value.toLowerCase();
    let apellidoUsuarioValue = apellidoUsuario.value.toLowerCase();
    verificarRegistrado(nombreUsuarioValue, apellidoUsuarioValue);
    nombreUsuario.value = "";
    apellidoUsuario.value = "";
}

// -------- FORMULARIO PARA BUSCAR ALUMNOS --------
// CONTENEDOR 
let buscarAlumnoContainer = document.getElementById("buscarAlumnoContainer");
buscarAlumnoContainer.style.display = "none";
// INPUTS DEL FORM
let buscarAlumnoNombre = document.getElementById("buscarAlumnoNombre");
let buscarAlumnoApellido = document.getElementById("buscarAlumnoApellido");
// BOTONES
let btnBuscarA = document.getElementById("btnBuscarA");
btnBuscarA.onclick = (e) => {
    tituloColumnaR.textContent = "Nombre o apellido encontrado en estos cursos";
    e.preventDefault();
    let buscarAlumnoNombreValue = buscarAlumnoNombre.value.toLowerCase();
    let buscarAlumnoApellidoValue = buscarAlumnoApellido.value.toLowerCase();
    let resultado = [];
    if (buscarAlumnoApellidoValue != "" && buscarAlumnoNombreValue == "") {
        cursosTotales.forEach((curso) => {
            let {
                alumnos
            } = curso;
            let buscaAlumuno = alumnos.filter((alumno) => alumno.apellido == buscarAlumnoApellidoValue);
            if (buscaAlumuno.length > 0) {
                resultado.push(curso);
            }
            cursosBox.innerHTML = "";
            resultado.forEach((cursoEncontrado) => {
                sumarHTML(cursoEncontrado);
            })
        })
        fetchCursos.forEach((curso) => {
            let {
                alumnos
            } = curso;
            let buscaAlumuno = alumnos.filter((alumno) => alumno.apellido == buscarAlumnoApellidoValue);
            if (buscaAlumuno.length > 0) {
                resultado.push(curso);
            }
            cursosBox.innerHTML = "";
            resultado.forEach((cursoEncontrado) => {
                sumarHTML(cursoEncontrado);
            })
        })
    } else if (buscarAlumnoApellidoValue == "" && buscarAlumnoNombreValue != "") {
        cursosTotales.forEach((curso) => {
            let {
                alumnos
            } = curso;
            let buscaAlumuno = alumnos.filter((alumno) => alumno.nombre == buscarAlumnoNombreValue);
            if (buscaAlumuno.length > 0) {
                resultado.push(curso);
            }
            cursosBox.innerHTML = "";
            resultado.forEach((cursoEncontrado) => {
                sumarHTML(cursoEncontrado);
            })
        })
        fetchCursos.forEach((curso) => {
            let {
                alumnos
            } = curso;
            let buscaAlumuno = alumnos.filter((alumno) => alumno.nombre == buscarAlumnoNombreValue);
            if (buscaAlumuno.length > 0) {
                resultado.push(curso);
            }
            cursosBox.innerHTML = "";
            resultado.forEach((cursoEncontrado) => {
                sumarHTML(cursoEncontrado);
            })
        })
    } else {
        cursosTotales.forEach((curso) => {
            let {
                alumnos
            } = curso;
            let buscaAlumuno = alumnos.filter((alumno) => alumno.nombre == buscarAlumnoNombreValue || alumno.apellido == buscarAlumnoApellidoValue);
            if (buscaAlumuno.length > 0) {
                resultado.push(curso);
            }
            cursosBox.innerHTML = "";
            resultado.forEach((cursoEncontrado) => {
                sumarHTML(cursoEncontrado);
            })
        })
        fetchCursos.forEach((curso) => {
            let {
                alumnos
            } = curso;
            let buscaAlumuno = alumnos.filter((alumno) => alumno.nombre == buscarAlumnoNombreValue || alumno.apellido == buscarAlumnoApellidoValue);
            if (buscaAlumuno.length > 0) {
                resultado.push(curso);
            }
            cursosBox.innerHTML = "";
            resultado.forEach((cursoEncontrado) => {
                sumarHTML(cursoEncontrado);
            })
        })
    }
    if (resultado.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se encontró al alumno que buscas',
        })
        tituloColumnaR.textContent = "No se encontró un alumno con ese nombre y/o apellido";
    }
    buscarAlumnoNombre.value = "";
    buscarAlumnoApellido.value = "";
}

// -------- CONTENEDOR DE ALUMNOS AGREGADOS --------
let alumnosAgregadosBox = document.getElementById("alumnosAgregadosBox");
alumnosAgregadosBox.style.display = "none";

// -------- FORMULARIO PARA BUSCAR CURSO --------

// CONTENEDOR FORMULARIO 
let buscarCursoContainer = document.getElementById("buscarCursoContainer");
buscarCursoContainer.style.display = "none";
// FORMULARIO
// INPUTS
let buscarCursoAño = document.getElementById("buscarCursoAño");
let buscarCursoDivision = document.getElementById("buscarCursoDivision");
// VARIABLE PARA VALUES DE INPUTS
let buscarCursoAñoValue;
let buscarCursoDivisionValue;
// BOTON PARA BUSCAR
let btnBuscarC = document.getElementById("btnBuscarC");
/* BUSCA CURSOS
1) TOMA LOS VALORES DE INPUTS
2) BUSCA SI EXISTE Y LO MUESTRA EN EL HTML
 */
btnBuscarC.onclick = (e) => {
    e.preventDefault();
    buscarCursoAñoValue = buscarCursoAño.value;
    buscarCursoDivision = buscarCursoDivision.value;
    let cursoBuscado = cursosTotales.filter((curso) => curso.año == buscarCursoAñoValue && curso.division == buscarCursoDivision);
    cursosBox.innerHTML = "";
    cursoBuscado.forEach((curso) => sumarHTML(curso));
    tituloColumnaR.textContent = "Cursos encontrados";
}
// BOTON PARA VOLVER Y MOSTRAR LOS CURSOS DEL ARRAY cursosTotales nuevamente
let btnVolver = document.getElementById("btnVolver");
btnVolver.onclick = () => {
    cursosBox.innerHTML = "";
    cursosTotales.forEach((curso) => sumarHTML(curso))
    buscarCursoContainer.style.display = "none";
}

// --------------------------------

///// CONSTRUCTORES /////

class Curso {
    constructor(año, division, turno) {
        this.año = año;
        this.division = division;
        this.turno = turno;
        this.alumnos = [];
        this.cantidad_alumnos = this.alumnos.length;
        this.infoFull = `Año: ${this.año}° - Division: ${this.division}° - Turno: ${this.turno}`;
    }
}

class Alumno {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        //     this.curso = cursoAlumno;
    }
}

class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

// --------------------------------

///// FUNCIONES /////

// CARGA LOS CURSOS SI LOS HAY
const cargarCursosLocal = (cursosTotales) => {
    cursosTotales = JSON.parse(localStorage.getItem("cursos"));
    cursosTotales.forEach((el) => {
        sumarHTML(el);
    })
}

// DE FORMA ASINCRONICA, TRAEMOS LOS CURSOS
const cargarCursosFetch = async () => {
    // intenta esto
    try {
        let response = await fetch("./cursos.json");
        let result = await response.json();
        result.forEach((el) => {
            let {
                alumnos
            } = el;
            alumnos.forEach((alumno) => {
                alumno.nombre = alumno.nombre.toLowerCase();
                alumno.apellido = alumno.apellido.toLowerCase();
            })
            fetchCursos.push(el);
            sumarHTML(el);
        })
    }
    // si hay error hace esto (catch)
    catch (error) {
        console.log(error);
    }
}

/* FUNCION PARA CREAR CURSOS (NO SUMA AL ARRAY NI HTML)
1) TOMA VALORES DE INPUTS
2) CREA EL CURSO CON ESOS VALORES
3) SE USA PARA GUARDAR LA FUNCION EN UNA VARIABLE PORQUE RETORNA EL CURSO CREADO
*/
const preCargaCurso = () => {
    let añoValor = año.value;
    let divisionValor = division.value;
    let turnoValor = turno.value;
    let cursoNew;
    if (añoValor != "" && divisionValor != "" && turnoValor != "") {
        crearCursoContainer.style.display = "none";
        cursoNew = new Curso(añoValor, divisionValor, turnoValor);
        año.value = "";
        division.value = "";
        turno.value = "";
    }
    return cursoNew;
}

// FUNCION PARA ACTUALIZAR EL LOCAL STORAGE ANTE CAMBIOS
const actualizarLocal = () => {
    localStorage.removeItem("cursos");
    localStorage.setItem("cursos", JSON.stringify(cursosTotales));
}

// CONTENEDOR 
let editarCursoContainer = document.getElementById("editarCursoContainer");
editarCursoContainer.style.display = "none";
// CONTENEDOR FORM
let textoEditado = document.getElementById("textoEditado")
let editarCursoForm = document.getElementById("editarCursoForm");
editarCursoForm.style.display = "none"
// FORM
let btnNavEditarCurso = document.getElementById("editarCurso");
// INPUTS
let editarCursoAño = document.getElementById("editarCursoAño");
let editarCursoDivision = document.getElementById("editarCursoDivision");
let editarCursoTurno = document.getElementById("editarCursoTurno");
// BOTONES
let btnEditarCursoGuardar = document.getElementById("btnEditarCursoGuardar");
let btnEditarCursoCancelar = document.getElementById("btnEditarCursoCancelar");

/* SUMAR CURSOS AL HTML
1) CREA ETIQUETAS Y ASIGNA ATRIBUTOS
2) COMPARA SI EL CURSO DEL ARRAY TIENE ALUMNOS, SI NO TIENE MUESTRA "NO HAY". SI TIENE MUESTRA LA CANTIDAD Y EL BOTON PARA VERLOS
3) USA LA INFORMACION DEL CURSO PARA INYECTARLA AL HTML
*/
const sumarHTML = (el) => {
    // DIV CURSO - INFO Y LISTA
    let cursoCreado = document.createElement("div");
    cursoCreado.setAttribute("class", "my-1");
    // CONTAINER INFO ALUM
    let divInfoBtn = document.createElement("div");
    divInfoBtn.setAttribute("class", "d-flex");
    // PARRAFO INFO CURSO
    let cursoInfo = document.createElement("p");
    cursoInfo.setAttribute("class", "cajaCurso p-0 m-0 my-1 p-2");
    cursoInfo.textContent = `${el.infoFull} - Alumnos: ${el.alumnos.length}`;
    // BOTON VER ALUMNOS
    // BOTON EDITAR CURSO
    let btnEditar = document.createElement("button");
    btnEditar.setAttribute("class", "btn-ver")
    // ICONO EDITAR CURSO
    let iconoEditar = document.createElement("i");
    iconoEditar.setAttribute("class", "fas fa-edit");
    btnEditar.appendChild(iconoEditar);
    // CONTAINER LISTA ALUM
    let divAlumList = document.createElement("div");
    // LISTA ALUMNOS DEL CURSO
    let listaAlumnos = document.createElement("ul");
    // VARIABLES SIN DEFINIR
    let iconoCerrar;
    let btnVer;
    let btnCerrar;
    let btnEliminarA;

    divInfoBtn.appendChild(cursoInfo)
    divInfoBtn.appendChild(btnEditar);
    cursoCreado.appendChild(divInfoBtn);

    if (el.alumnos.length !== 0) {
        // tomamos la propiedad alumnos del objeto curso
        let {
            alumnos
        } = el;
        // asignamos la info del curso
        // por cada alumno lo sumammos a la lista y agregamos su boton
        alumnos.forEach((alum) => {
            alum.nombre = alum.nombre.toLowerCase();
            alum.apellido = alum.apellido.toLowerCase();
            // creas li, atributos, contenido
            let alumno = document.createElement("li");
            alumno.setAttribute("class", "alums my-1");
            alumno.textContent = `• ${alum.nombre} ${alum.apellido}`;
            // agregas alumno (li) a la lista (ul)
            listaAlumnos.appendChild(alumno)
            // creo button, atributo y contenido
            iconoCerrar = document.createElement("i")
            iconoCerrar.setAttribute("class", "fas fa-times");
            btnEliminarA = document.createElement("button");
            btnEliminarA.classList.add("btn-x")
            btnEliminarA.appendChild(iconoCerrar);
            alumno.appendChild(btnEliminarA)
            // funcion boton eliminar
            btnEliminarA.onclick = (e) => {
                e.preventDefault();
                listaAlumnos.removeChild(alumno);
                let borrarA = alumnos.findIndex(alumno => alumno.nombre == alum.nombre);
                alumnos.splice(borrarA, 1);
                el.alumnos = alumnos;
                cursoInfo.textContent = `${el.infoFull} - Alumnos: ${alumnos.length}`;
                btnCerrar.style.display = "none";
                btnVer.style.display = "block"
                // listaAlumnos.style.display = "none";
                actualizarLocal();
                if (el.alumnos.length == 0) {
                    cursoInfo.textContent = `${el.infoFull} - Alumnos: No hay`;
                    btnVer.style.display = "none"
                }
            }
        })
        divAlumList.appendChild(listaAlumnos);
        cursoCreado.appendChild(divAlumList);
        listaAlumnos.style.display = "none";
        // BOTON VER
        let iconoOjo = document.createElement("i")
        iconoOjo.setAttribute("class", "fas fa-eye p-0 m-0");
        btnVer = document.createElement("button");
        btnVer.setAttribute("class", "btn-ver ms-2");
        btnVer.appendChild(iconoOjo);
        divInfoBtn.appendChild(btnVer);
        btnVer.onclick = (e) => {
            e.preventDefault();
            btnVer.style.display = "none";
            btnCerrar.style.display = "block";
            listaAlumnos.style.display = "block";
        }
        // BOTON CERRAR
        iconoCerrar = document.createElement("i")
        iconoCerrar.setAttribute("class", "fas fa-times p-0 m-0");
        btnCerrar = document.createElement("button");
        btnCerrar.setAttribute("class", "btn-ver ms-2")
        btnCerrar.appendChild(iconoCerrar);
        divInfoBtn.appendChild(btnCerrar);
        btnCerrar.style.display = "none";
        btnCerrar.onclick = (e) => {
            e.preventDefault();
            btnCerrar.style.display = "none";
            btnVer.style.display = "block"
            listaAlumnos.style.display = "none";
            actualizarLocal();
        }
    } else {
        cursoInfo.textContent = `${el.infoFull} - Alumnos: No hay`;
    }
    cursosBox.appendChild(cursoCreado);
    btnEditar.onclick = (e) => {
        e.preventDefault();
        buscarCursoContainer.style.display = "none";
        crearCursoContainer.style.display = "none";
        eliminarCursoContainer.style.display = "none";
        if (editarCursoContainer.style.display == "block") {
            editarCursoContainer.style.display = "none";
        } else {
            editarCursoContainer.style.display = "block";
        }
        textoEditado.textContent = `Estas editando el curso ${el.año}°, division ${el.division}° y turno ${el.turno}`;
        buscarCursoContainer.classList.add("esconder");
        btnEditarCursoGuardar.onclick = (e) => {
            e.preventDefault()
            let editarCursoAñoValue = editarCursoAño.value;
            let editarCursoDivisionValue = editarCursoDivision.value;
            let editarCursoTurnoValue = editarCursoTurno.value;
            el.año = editarCursoAñoValue;
            el.division = editarCursoDivisionValue;
            el.turno = editarCursoTurnoValue;
            el.infoFull = `Año: ${el.año}° - Division: ${el.division}° - Turno: ${el.turno}`;
            cursoInfo.textContent = `${el.infoFull} - Alumnos: ${el.alumnos.length}`;
            actualizarLocal();
            editarCursoAño.value = "";
            editarCursoDivision.value = "";
            editarCursoTurno.value = "";
            Swal.fire("Editaste el curso correctamente")
        }
    }
    btnEditarCursoCancelar.onclick = (e) => {
        e.preventDefault()
        editarCursoForm.style.display = "none";
        textoEditado.style.display = "none";
        editarCursoAño.value = "";
        editarCursoDivision.value = "";
        editarCursoTurno.value = "";
    }
}

// FUNCION QUE AGREGA ALUMNOS Y CURSO AL HTML
const agregarAyC = (alumnosObjeto) => {
    if (alumnosObjeto == []) {
        Swal.fire("No agregaste alumnos")
    } else {
        let cursoNew = preCargaCurso();
        let {
            alumnos
        } = cursoNew;
        alumnosObjeto.forEach((alumno) => {
            alumnos.push(alumno)
        })
        cursosTotales.push(cursoNew);
        localStorage.removeItem("cursos");
        cursosTotales.forEach((curso) => {
            sumarHTML(curso);
        })
        localStorage.setItem("cursos", JSON.stringify(cursosTotales));
        alumnosObjeto = []
    }
}

// FUNCION PARA AGREGAGR ALUMNOS AL ARRAY, PERO NO LO SUBE AL OBJETO CURSO EN EL ARRAY DE CURSOS TOTALES
const agregarA = (nombreAlumnoValue, apellidoAlumnoValue, alumnosObjeto) => {
    if (nombreAlumnoValue != "" && apellidoAlumnoValue != "") {
        let alumno = new Alumno(nombreAlumnoValue, apellidoAlumnoValue);
        alumnosObjeto.push(alumno);
    }
    mostrarAlumnos(alumnosObjeto);
    return alumnosObjeto;
}

// FUNCION PARA SUMUMAR LOS ALUMNOS AGREGADOS AL OBJETO CURSO EN LA PROPIEDAD ALUMNOS
const mostrarAlumnos = (alumnosArray) => {
    alumnosAgregados.innerHTML = ""
    alumnosArray.forEach((alumno) => {
        let alumnoInfo = `${alumno.nombre} ${alumno.apellido}`;
        let alumnoParrafo = document.createElement("p")
        alumnoParrafo.innerText = alumnoInfo;
        alumnosAgregados.appendChild(alumnoParrafo);
    })
}

/* FUNCION PARA VERIFICAR LOGIN
1) TOMA VALORES DE INPUTS COMO PARAMETROS
2) BUSCA SI LOS VALORES INGRESADOS COINCIDEN CON LOS USUARIOS ESTABLECIDOS
3) SI LO ENCUENTRA, MUESTRA TODO EL DISPLAY DE LA APP
4) CARGA LOS CURSOS (FETCH)
5) CARGA LOS CURSOS (LOCALSTORAGE)
6) MUESTRA LOS CURSOS EN EL HTML
7) CAMBIA EL VALOR DE QUE HAY UN USUARIO EN SESION, Y LO GUARDA EN EL LOCAL. AL CERRAR SESION ESE VALOR CAMBIA Y SI ES FALSE, PIDE INICIAR SESION, SI NO CERRO SESION, ES TRUE Y MUESTRA DIRECTAMENTE EL DISPLAY. TODO ESTO PARA NO INICIAR SESION CADA VEZ QUE SE CARGA LA PAGINA
8) MUESTRA ALERTA CON SALUDO
9) SI LOS DATOS SON INCORRECTOS, DEVUELVE ALERTA
*/
const verificarRegistrado = (nombreUsuarioValue, apellidoUsuarioValue) => {
    let buscar = registrados.some(usuario => usuario.nombre == nombreUsuarioValue && usuario.apellido == apellidoUsuarioValue);
    if (buscar) {
        controlBox.style.display = "flex";
        btnNavIniciarSesion.style.display = "none"
        btnNavCerrarSesion.style.display = "block";
        iniciarSesionBox.style.display = "none";
        contenidoLeftCol.style.display = "block";
        cargarCursosFetch();
        cursosTotales = JSON.parse(localStorage.getItem("cursos")) || [];
        cursosTotales.forEach((curso) => {
            sumarHTML(curso);
        })
        inicio = true;
        localStorage.setItem("inicio", inicio)
        let nombreMayus = nombreUsuarioValue[0].toUpperCase() + nombreUsuarioValue.substring(1);
        let apellidoMayus = apellidoUsuarioValue[0].toUpperCase() + apellidoUsuarioValue.substring(1);
        Swal.fire(`¡Bienvenido ${nombreMayus} ${apellidoMayus}!`)
    } else {
        Swal.fire("Los datos ingresados son incorrectos")
    }
}

// AL TOCAR EL BOTON DE CERRAR SESION, REMUEVE EL ITEM DE SESION INICIADA, ASI LA PROXIMA VEZ  Y RECARGA PAGINA
const borrarSesion = () => {
    localStorage.removeItem("inicio");
    window.location.reload();
}

let inicio = localStorage.getItem("inicio") || false;

if (inicio) {
    loginBox.style.display = "flex";
    btnNavCerrarSesion.style.display = "block"
    btnNavIniciarSesion.style.display = "none";
    controlBox.style.display = "flex";
    cargarCursosFetch();
    cursosTotales = JSON.parse(localStorage.getItem("cursos")) || [];
    cursosTotales.forEach((curso) => {
        sumarHTML(curso);
    })
} else {
    buscarCursoContainer.style.display = "none";
    loginBox.style.display = "flex";
    btnNavIniciarSesion.style.display = "block";
    btnNavCerrarSesion.style.display = "none";
}