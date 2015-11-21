// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
      function httpGet(theUrl)
      {
          var xmlHttp = new XMLHttpRequest();
          xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
          xmlHttp.send(null);
          //return xmlHttp.responseText;
      }

      function activar(elem,dom) {
        check=document.getElementsByName("dispositivo")[dom].checked;
        //alert("elemento:"+elem+" checado:"+check);
        if(check==true){
          switch(elem){
            case 'foco1':
              httpGet('http://192.168.0.05?pin=ON1');
              break;

            case 'cerradura':
              httpGet('http://192.168.0.05?pin=ON2');
              break;    
          }
        }else if(check==false){
          switch(elem){
            case 'foco1':
              httpGet('http://192.168.0.05?pin=OFF1');
              break;

            case 'cerradura':
              httpGet('http://192.168.0.05?pin=OFF2');
              break;
          }
        }else{}
      }

      function Redireccionar(){
        window.location"ipConfig.html";
      }

