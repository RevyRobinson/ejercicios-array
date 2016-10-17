//ejercicio 1

function retornaMenor (num1 , num2 , num3){
	//pidiendo al usuario los numeros
	var num1 = prompt("Ingrese el primer número");
	var num2 = prompt("Ingrese el segundo número");
	var num3 = prompt("Ingrese el tercer número");
	//pasando los string a numero
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	num3 = parseInt(num3);
	//haciendo la comparacion
	if(num1 < num2 && num1 < num3){
		alert("El numero menor es " + num1);
	} else if (num2 < num1 && num2 < num3){
		alert("El numero menor es " + num2);
	} else {
		alert("El numero menor es " + num3);
	}

}

//ejercicio 2

function parImpar(){
	//recibe un numero del usuario
	var num = prompt("Ingrese un número");
	//transformar la respuesta a entero
	var entero = parseInt(num);
	//revisar si es par o impar
	
	if ( entero % 2 == 0){
		document.getElementById("answer2").innerHTML = "El número es par";
	} else {
		document.getElementById("answer2").innerHTML = "El número es impar";
	}
}

//ejercicio 3


function menorToMayor (numero1 , numero2 , numero3){
	//pidiendo al usuario los numeros
	var numero1 = prompt("Ingrese el primer número");
	var numero2 = prompt("Ingrese el segundo número");
	var numero3 = prompt("Ingrese el tercer número");
	//pasando los string a numero
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	numero3 = parseInt(numero3);
	//buscar el menor numero
	var numeroMenor = 0;
	if (numero1 < numero2 && numero1 < numero3){
		numeroMenor = numero1;
	} else if (numero2 < numero1 && numero2 < numero3){
		numeroMenor = numero2;
	} else {
		numeroMenor = numero3;
	}
	//buscar el mayor número
	var numeroMayor = 0;
	if(numero1 > numero2 && numero1 > numero3){
		numeroMayor = numero1;
	} else if (numero2 > numero1 && numero2 > numero3){
		numeroMayor = numero2;
	} else {
		numeroMayor = numero3;
	}
	//reconocer el numero de en medio
	var numeroMedio = 0;
	if (numeroMayor != numero1 && numeroMenor != numero1){
		numeroMedio = numero1;
	} else if (numeroMayor != numero2 && numeroMenor != numero2){
		numeroMedio = numero2;
	} else {
		numeroMedio = numero3;
	}
	//armar arreglo con los numeros ordenados. De seguro hay una forma más sencilla -.-
	var respuesta = [numeroMenor , numeroMedio , numeroMayor];
	document.getElementById('answer3').innerHTML = respuesta;
}


//ejercicio 4

function mayusOMinus(){
	var frase = prompt("¿Te gustan las frambuesas? ¿Son deliciosas?");

	var	resultado = "La frase: " + frase ;

	if(frase == frase.toUpperCase()) {
    resultado += ", está formada por mayúsculas";
  }
  else if(frase == frase.toLowerCase()) {
    resultado += ", está formada por minúsculas";
  }
  else {
    resultado += ", está formada por mayúsculas y minúsculas";
  }
  	document.getElementById('answer4').innerHTML = resultado;
}
