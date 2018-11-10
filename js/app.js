const myApp = angular.module("myApp", [])

let element = document.getElementById("presentation-message")
let presentationMessage = document.getElementById("pr")
let presentationDiv = document.getElementById("presentation-div")

myApp.controller("DefaultController", ($scope) => {

  $scope.message = "''... Si se puede imaginar, se puede programar...''"

})

myApp.controller("NavBarController", ($scope) => {

  $scope.title = "Batty Developers"

  $scope.options = [
    {
      name: "INICIO"
    },
    {
      name: "SERVICIO",
      classname: "services"
    },
    {
      name: "NOSOTROS",
      classname: "about"
    },
    {
      name: "TECNOLOGÍAS",
      classname: "technologies"
    },
    {
      name: "EQUIPO",
      classname: "team"
    }
  ]

})

myApp.controller("PresentationController", ($scope, $interval) => {

  const initialMessages = [
    {
      title: "TECNOLOGÍAS DE PUNTA",
      message: "Uso de plataformas y marcos de trabajo implementado uso de mejores prácticas en el desarrollo de software.",
      img: "img/Block_Chain_Developer_Computer_Programmer_050318.jpg"
    },
    {
      title: "RAPIDÉZ, CONFIABILIDAD, DISPONIBILIDAD...",
      message: "Tu información estará segura, y disponible gracias al uso de computación en la nube.",
      img: "img/4_strategic_vision.jpg"
    },
    {
      title: "DISEÑO DE ALTA CÁLIDAD",
      message: "2 We are a digital agency that believes in building things that are meaningful!",
      img: "img/Laptop-reduced.jpg"
    },
    {
      title: "SOPORTE, ASESORÍA Y EXPERENCIA",
      message: "2 We are a digital agency that believes in building things that are meaningful!",
      img: "img/SL_Overview_1_HeroFullBleed_3_V1.jpg"
    }
  ]

  $scope.currentMessage = {
    title: initialMessages[0].title,
    message: initialMessages[0].message,
    img: initialMessages[0].img
  }


  let index = 1;

  $interval(() => {    
    
    $scope.currentMessage = {
      title: initialMessages[index].title,
      message: initialMessages[index].message,
      img: initialMessages[index].img
    }
    
    element.setAttribute( "class", "center animated bounceInLeft")
    presentationDiv.style.backgroundImage = `url('${initialMessages[index].img}')`;  
    index++;

    if (index >= initialMessages.length) index = 0;
   
  }, 2600)

  $interval(() =>{
    element.setAttribute( "class", "center animated")
  },2300)

})

myApp.controller("ServicesController", ($scope) => {

  $scope.title = "NUESTROS SERVICIOS"

  $scope.services = [
    {
      logo: "img/222600.svg",
      title: "APLICACIONES WEB",
      message: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in."
    },
    {
      logo: "img/841364.svg",
      title: "SITIOS WEB",
      message: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in."
    },
    {
      logo: "img/1170607.svg",
      title: "SERVICIOS EN LA NUBE",
      message: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in."
    },
    {
      logo: "img/148941.svg",
      title: "SOPORTE 24/7",
      message: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in."
    },
    {
      logo: "img/1141779.svg",
      title: "INCREMENTO",
      message: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in."
    },
    {
      logo: "img/959318.svg",
      title: "AHORRO",
      message: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in."
    }
  ]

})

myApp.controller("AboutController", ($scope) => {

  $scope.title = "NOSOTROS"

  $scope.img = 'img/951862.svg'

  $scope.mission = {
    title: "Misión",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. letious versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  }

  $scope.vision = {
    title: "Visión",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. letious versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  }


})

myApp.controller("TechnologiesController", ($scope) => {

  $scope.title = "TECNOLOGÍAS IMPLEMENTADAS EN LOS PROYECTOS"

  $scope.technologies = [
    {
      logo: "img/javascript.png",
      name: "Javascript",
      description: ""
    },
    {
      logo: "img/csharp.jpg",
      name: "C#",
      description: ""
    },
    {
      logo: "img/python.png",
      name: "Python",
      description: ""
    },
    {
      logo: "img/angular.png",
      name: "Angular",
      description: ""
    },
    {
      logo: "img/reactjs.png",
      name: "React.js",
      description: ""
    },
    {
      logo: "img/nodejs.png",
      name: "Node.js",
      description: ""
    },
    {
      logo: "img/expressjs.png",
      name: "Express.js",
      description: ""
    },
    {
      logo: "img/aspnet.gif",
      name: "ASP.NET Framework",
      description: ""
    },
    {
      logo: "img/sass.svg",
      name: "Sass ",
      description: ""
    },
    {
      logo: "img/gulp.png",
      name: "Gulp",
      description: ""
    },
    {
      logo: "img/mongodb.png",
      name: "MongoDB",
      description: ""
    },
    {
      logo: "img/firebase.png",
      name: "Firebase",
      description: ""
    },
    {
      logo: "img/sqlserver.png",
      name: "SQL Server",
      description: ""
    },
    {
      logo: "img/mysql.png",
      name: "MySQL",
      description: ""
    },
    {
      logo: "img/azure.png",
      name: "Microsoft Azure",
      description: ""
    },
    {
      logo: "img/gcloud.png",
      name: "Google Cloud",
      description: ""
    }
  ]

})

myApp.controller("TeamController", ($scope) => {

  $scope.title = "EQUIPO DE TRABAJO"

  $scope.team = [
    {
      photo: "img/22874642.jpg",
      fullname: "Juan Manuel Batty Linero",
      rol: "FullStack Developer"
    },
    {
      photo: "img/rbatty.jpg",
      fullname: "Roberto Andrés Batty Linero",
      rol: "BackEnd Developer"
    },
    {
      photo: "img/user_none.png",
      fullname: "Tú?",
      rol: "Cúal es tu rol?"
    }
  ]

})