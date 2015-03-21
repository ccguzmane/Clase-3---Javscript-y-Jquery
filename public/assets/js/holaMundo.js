
//JSON
/*var persona = {
    nombre:"Christian",
    apellido:"Guzman",
    lugarDeNacimiento:"Bogotá",
    intereses:['programacion',' watepolo']
};

alert(persona.nombre + " " + persona.apellido + "\n" + persona.lugarDeNacimiento);*/

//EJEMPLO

/*var managerScreen = managerScreen || {};

managerScreen = {
    cambiarColor : function(color){
        document.body.style.background = color;
    },
    
    saludar : function(){
        alert("Hola muchachos");
    },
    
    cambiarColorParrafo : function(parrafo,color){
        document.body.style.color = color; 
    }, 
    
    ocultarParrafo : function(){
        document.getElementById("parrafo").innerHTML = "";
    },
    
    ocultarTodosLosParrafos : function(){
        var ps = document.getElementByTag("p");
        for (i=0;i<ps.length;i++){
            ps[i].style.display = 'none';
        }
    }   
}

var ms = managerScreen;*/

//JQuery

var managerScreen = managerScreen || {};

managerScreen = {
    cambiarColor : function(color){
        $("body").css('background-color',color);
    },
    
    saludar : function(){
        alert("Hola muchachos");
    },
    
    cambiarColorParrafo : function(parrafo,color){
        document.body.style.color = color; 
    }, 
    
    ocultarParrafo : function(){
        $("parrafo").hide();
    },
    
    ocultarTodosLosParrafos : function(tag){
        $("p,div").hide();
        }, 
        
     desvanecer : function(){
         $("p").fadeToggle(2000);
     },
     
     alertify : function(){
          alertify.alert("Message");
      },
      
      alertifyLog : function(){
          alertify.log("Notification", "Error");
      }

     
    }
      
      
var ms = managerScreen;
