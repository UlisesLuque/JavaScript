/*
	An object has a className property which keeps it’s class names delimited by spaces:
	var obj = {
	  className: 'open menu'
	}

	Write a function addClass(obj, cls) which adds a class cls, but only if it doesn’t yet exist:
	show clean source in new window
	Hide/show line numbers
	print highlighted code
		addClass(obj, 'new') // obj.className='open menu new'
		addClass(obj, 'open')  // no changes (class already exists)
		addClass(obj, 'me') // obj.className='open menu new me'
		alert(obj.className)  // "open menu new me"
		
	P.S. Your function shouldn’t add extra spaces.
	autor: Ulises Luque Páez
 */


window.addEventListener("load", function(){
	var eMensaje = document.getElementById('mensaje');

	var obj = { 
		className: "open menu"
	}

	addClass(obj, 'new');
	addClass(obj, 'open');
	addClass(obj, 'me');

	eMensaje.innerHTML = "className: " + obj.className;

	function addClass(obj, cls){
		var arrClass = obj.className.split(" ");
		for(var i=0; i<arrClass.length; i++){
			if(arrClass[i] == cls)
				return;
		}

		obj.className += cls;
	}
});