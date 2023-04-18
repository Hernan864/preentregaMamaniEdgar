let menuRta="";
do{
  let opciones = +prompt("Menu de inicio\n1-Calculo de promedios\n2-Calculadora\n3-Salir");
switch (opciones) {
  case 1: {

    alert("Bienvenido al calculo de promedios");
    let rta = "";
    do {
      let cantPersonas = prompt(
        "Ingrese cantidad de personas a calcular el promedio"
      );
      while (cantPersonas === "") {
        cantPersonas = prompt("ingrese una cantidad mayor o igual a 1");
      }
      for (let j = 0; j < cantPersonas; j++) {

        let nombre = prompt("Ingrese nombre de la persona: " + (j + 1));
        while (nombre === "") {
          nombre = prompt("ingrese un nombre valido");
        }
        let cantMaterias = +prompt("Ingrese cantidad de materias"); //cancel===Null aceptar===empty <string
        while (cantMaterias === "") {
          cantMaterias = prompt("Ingrese un numero entero");
        }

        let acumulador = 0,
          promedio = 0;
        let nota;
        for (let i = 0; i < cantMaterias; i++) {
          nota = +prompt("Ingrese la nota Nro: " + (i + 1));
          while (!(nota > 0 && nota <= 10)) {
            nota = +prompt("Ingrese la nota entre el 1 y 10");
          }
          acumulador += nota;
        }
        promedio = acumulador / cantMaterias;
        alert(`El promedio de las notas para ${nombre} es: ${promedio}`);
      }
      rta = prompt("Desea realizar otro promedio? SI/NO");
    } while (rta === "si" || rta === "SI");
    alert("gracias por utilizar la app!!!!!!");
    break;
  };
  case 2:{
    alert("Proximamente calculadora");
    break;
  };
  case 3:{
    menuRta = prompt("Esta seguro que quiere salir del Menu? SI \ NO");
    break;
  };
  
  default :{
    menuRta = prompt('Continuar en el Menu? SI \ NO');
    break;
    };

}


}while (menuRta.toUpperCase() === "SI");