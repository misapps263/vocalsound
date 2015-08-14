
 
var x;
x=$(document);
x.ready(inicializarEventos);




function inicializarEventos()
{	
 
  var x;
  x=$("#checkvocal");
  x.bind('click',function(){check('true')	})
	//x.click(function(){check('true')	})
	var o;
  o=$("#checkcon");
  o.click(function(){check('false')	})
 ponletra();
}
 function ponletra(){
 $('#check').click(function(){ 
 
 ///escogemos array
 
 
 
       
 			var vocales=['a','e','i','o','u']		;										 
 			 var abecedario=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','e','i','o','u'];
      var letrasarray= Math.floor((Math.random() * 2));
			if(letrasarray>0){miletra='abecedario'}else{miletra='vocales'}
			 var letra=miletra[Math.floor((Math.random() * miletra.length) + 1)]; 
       $('#check').text(letra);
       //mostramos el menu de botones	
	$('#buttons').css('display','inline');
	//ocultamos los mensajes	
	$('.mensaje').css('display','none');
			  })
 }
 
 function contador(){}
 
function check(a)
{
     var x;	
  	 var a;
  	 var letra;
  	 var isV;
  	 var check;
  	 var vocales;
		 var vocales = ['','a','e','i','o','u'];
  	 //var letra = 'a'; 
		 
	 check=$('#checkvocal').attr('data-type');
	
	
	$('#check').text(letra);
	isV=$('#check').text();
	 
  x=$("this");
  x.css("color","#ff0000");
  x.css("background-color","#ffff00");
  x.css("font-family","Courier");
	//x.text(isV);
	
//ocultamos el menu de botones	
	$('#buttons').css('display','none');
	
   //myarray.push(isV);

if(jQuery.inArray(isV, vocales)>=0) {
    var z='true';
} else {
   // console.log('fuera del array'+jQuery.inArray(isV, vocales));
	  var z='false';
}
if(z==a){
//llamar funcion
console.log('Correcto');
correcto();
}else{

//llamar funcion
console.log('INCorrecto');
incorrecto();
}

}
 
function incorrecto(){
$('#check').html('<div class="mensaje">Ohh!!!:(z <div><small style="font-size:50%;">continuar</small></div>');
$('#check').css('color','#FF0084');
$('#check').removeClass('pulse');
$('#check').addClass('tossing'); 
$('#check').click(ponletra());
}
function correcto(){
$('#check').html('<div class="mensaje">Bieeen!!! <div><small style="font-size:50%;">continuar</small></div>');
$('#check').css('color','#2C539E');
$('#check').css('text-shadow','white');
$('#check').removeClass('tossing');
$('#check').addClass('pulse');  
$('#check').click(ponletra());
}
