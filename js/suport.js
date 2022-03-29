miStorage=window.localStorage
lista=[]
const Enviar=()=>{
    alert("Enviado")
    var nombre = document.getElementById("form6Example1").value;
    var apellido = document.getElementById("form6Example2").value;
    var correo=document.getElementById("form6Example3").value;
    var mensaje=document.getElementById("form6Example4").value;
    let ala={
        nombre:nombre,
        apellido:apellido,
        correo:correo,      
        mensaje:mensaje,
    }
    lista.push(ala)
    miStorage.removeItem("Tabla de falla")
    miStorage.setItem("Tabla de falla",JSON.stringify(lista))
    let tablaref=document.getElementById("tabla")
    let newtablarow =tablaref.insertRow(-1)
    let newtablarefcell= newtablarow.insertCell(0)
    newtablarefcell.textContent=nombre
    newtablarefcell= newtablarow.insertCell(1)
    newtablarefcell.textContent=apellido
    newtablarefcell= newtablarow.insertCell(2)
    newtablarefcell.textContent=correo
    newtablarefcell= newtablarow.insertCell(3)
    newtablarefcell.textContent=mensaje
    
    deletoption.addEventListener("click",(event)=>{
        console.log(event)
        event.target.parentNode.parentNode.remove()
    })
    alert("Enviado")
}


