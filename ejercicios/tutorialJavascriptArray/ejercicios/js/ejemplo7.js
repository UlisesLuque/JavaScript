/*
	Create a function ageSort(people) to sort array of people objects by their age.
	var john = { name: "John Smith", age: 23 }
	var mary = { name: "Mary Key", age: 18 }
	var bob = { name: "Bob-small", age: 6 }
	var people = [ john, mary, bob ]
	ageSort(people) // now people is [ bob, mary, john ]
	Output people names after sorting.

	autor: Ulises Luque Páez
 */


window.addEventListener("load", function(){
	var eMensaje = document.getElementById('mensaje');
	var mensaje  = "Lista ordenada por edad es: ";

	var john = { name: "John Smith", age: 23 }
	var mary = { name: "Mary Key", age: 18 }
	var bob = { name: "Bob-small", age: 6 }
	var people = [john, mary, bob];
	ageSort(people);

	for(var i=0; i<people.length; i++)
		mensaje += people[i].name + ", ";
	eMensaje.innerHTML = mensaje;

	function ageCompare(a, b) {
	  return a.age - b.age
	}

	function ageSort(people){
		people.sort(ageCompare);
	}
});