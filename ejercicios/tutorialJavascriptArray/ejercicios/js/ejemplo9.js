/*	
	A prime number is a natural number which has exactly two distinct natural number divisors: 1 and itself.

	To find all the prime numbers less than or equal to a given integer n by Eratosthenes’ Sieve:

	    Create a list of consecutive integers from two to n: (2, 3, 4, ..., n).
	    Set p=2, the first prime number.
	    Strike from the list all multiples of p less than or equal to n. (2p, 3p, 4p, etc.)
	    Set p to first not striked number in the list after p.
	    Repeat steps 3-4 until p*p > n.
	    All the remaining numbers in the list are prime.

	There is also an animation available.

	Implement the Eratosthenes’ Sieve in JavaScript. Compute the sum of all primes up to 100 and alert it.

	autor: Ulises Luque Páez
 */


window.addEventListener("load", function(){
	var eMensaje = document.getElementById('mensaje');
	var mensaje  = "Los 100 primeros números primos son: ";
	var contador = 1;
	var contador2 = 1;

	do {
		if(isPrime(contador)){
			mensaje += "<br/>" + contador2 + ". => " + contador;
			contador2++;
		}
			
		contador++;
		

	} while (contador2 < 101);

	eMensaje.innerHTML = mensaje;
		
	function isPrime(number){
		for(var i= 2; i<number; i++){
			if(number%i == 0)
				return false;
		}
		return true;
	}
});