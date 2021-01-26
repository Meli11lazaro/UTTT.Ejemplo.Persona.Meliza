function validar() {
    debugger;
    var cunica = document.getElementById("txtClaveUnica").value;
    debugger;
    var sexo = document.getElementById("ddlSexo");
    debugger;
    var nombre = document.getElementById("txtNombre").value;
    debugger;
    var ap = document.getElementById("txtAPaterno").value;
    debugger;
    var am = document.getElementById("txtAMaterno").value;
    debugger;
    var nhermanos = document.getElementById("txtHermanos").value;
    debugger;
    var fnaci = document.getElementById("val");
    debugger;

    var sex = sexo.options[sexo.selectedIndex].value;
    debugger;
    var fna = fnaci.defaultValue;
    debugger;
    var fecha = parseInt(("" + fna.substr(6, 10)));
    debugger;
    var año = 2021 - fecha;
    debugger;

    var ban = true;
    var messaje = " ";
    debugger;

    if (cunica == null || nombre == null || ap == null || am == null || fecha == null) {

        ban = false;
        messaje = "Completa este dato";

    } else if (!(/\d{3}$/.test(cunica))) {

        messaje = "La clave deve contener mas de 3 dijitos"
        ban = false;

    } else if (!(/[A-z]{3}/.test(nombre)) || !(/[A-z]{3}/.test(ap)) || !(/[A-z]{3}/.test(am))) {

        messaje = "Caracteres mínimos 3 letras, maximo 15 "
        ban = false;

    } else if (año <= 18) {

        messaje = "Edad mayor de 18 años ";
        ban = false;

    } else if (isNaN(nhermanos) == true) {

        messaje = "Solo se aceptan numeros enteros!!!"
        ban = false;

    } else if (sex < 0 || sex > 2) {

        messaje = "Dato requerido";
        ban = false;

    }

    alert(messaje);
    return ban;

}