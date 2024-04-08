const main = document.querySelector("main")



//se debe almacenar la URL del JSON que se quiere recuperar en una variable.
const requestURL = "./json/json.json"
//Para crear una solicitud, se necesita crear una nueva instancia de objeto de solicitud
const request = new XMLHttpRequest()

//Ahora es necesario abrir una nueva solicitud
request.open("GET", requestURL)
/*Esto requiere al menos dos parámetros — Existen otros parámetros opcionales disponibles. Sólo se requieren los dos obligatorios para este ejemplo:
El método HTTP a usar cuando se hace una solicitud en red. En este caso GET es adecuado, dado que sólo se estan recuperando algunos datos simples.
La URL a la que se realiza la solicitud — esta es la URL del archivo que se almacenó antes.
*/

/*de esta forma ese XHR sabe que el servidor estará retornando JSON y que esto debería ser convertido en segundo plano en un objeto JavaScript.*/
request.responseType = "json"
request.send()

/*La última parte de esta sección comprende la espera por la respuesta a retornar desde el servidor y luego, manejarla.*/
request.onload = function () {
    const projects = request.response
    populateDiv(projects)
    
}



/*Ahora, se utilizarán estos datos escribiendo las dos funciones que fueron referenciadas previamente.*/
function populateDiv(jsonObj) {

    const listProyect = jsonObj["proyectos"]


    //Crear Div
    const div = document.createElement("div")
    div.classList.add("container")
    div.classList.add("contenedor--centrado")
    main.appendChild(div)

    

    //Añadir contenido del div
    const h2 = document.createElement("h2")
    h2.textContent = "Proyectos Destacados"
    h2.classList.add("section__title")
    div.appendChild(h2)

    //Crear div2
    const div2 = document.createElement("div")
    div2.classList.add("projects")
    div.appendChild(div2)

    for (let index = 0; index < 1; index++) {
        console.log("hola")
        //Crear Div3
        const div3 = document.createElement("div")
        div3.classList.add("project")
        div2.appendChild(div3)

        //Crear img
        const img = document.createElement("img")
        img.classList.add("project_manage")
        img.src=listProyect[index]["img"]
        div3.appendChild(img)

        //Crear div4
        const div4 = document.createElement("div")
        div4.classList.add("project-links")
        div3.appendChild(div4)

        //Añadir links
        const ahref = document.createElement("ahref")
        ahref.href = '<https://github.com/daikel19/manage-landing-page-master.git>'
        
    }
    
}

