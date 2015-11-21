// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

  
  var direccion = 'Prueba';

  function Configuracion(){
    direccion = document.getElementById("ip1").value;    
  }


  function Redireccionar(dir){
    var dir = dir;
    alert(direccion);
    var pagina = "dispositivos.html";
    location.href=pagina
  }

  function httpGet(theUrl)
      {
          var xmlHttp = new XMLHttpRequest();
          xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
          xmlHttp.send(null);
          //return xmlHttp.responseText;
      }

      function activar(elem,dom) {
        
        direccion = document.getElementById("ip1").value;    
      if((direccion.length)>10){
        
        check=document.getElementsByName("dispositivo")[dom].checked;
        //alert("elemento:"+elem+" checado:"+check);
        if(check==true){
          switch(elem){
            case 'foco1':
              httpGet('http://'+direccion+'?pin=ON1');
              break;

            case 'cerradura':
              httpGet('http://'+direccion+'?pin=ON2');
              break;    
          }
        }else if(check==false){
          switch(elem){
            case 'foco1':
              httpGet('http://'+direccion+'?pin=OFF1');
              break;

            case 'cerradura':
              httpGet('http://'+direccion+'?pin=OFF2');
              break;
          }
        }else{}
        //alert(direccion);
        }
        else
          alert('Introduce correctamente la direccion ip');
      }
      
      function goBack() {
          window.history.back();
      }

      function Acerca(){
        alert('Francisco Jimenez & Christian Ramos son unas vergas :v ');
      }

      


