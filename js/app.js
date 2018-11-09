const myApp = angular.module("myApp", [])

let element = document.getElementById("presentation-message")
let presentationMessage = document.getElementById("pr")
let presentationDiv = document.getElementById("presentation-div")

myApp.controller("NavBarController", ($scope) => {

  $scope.title = "Batty Developers"

  $scope.options = [
    {
      name: "HOME"
    },
    {
      name: "SERVICES"
    },
    {
      name: "PORTFOLIO"
    },
    {
      name: "TEAM"
    },
    {
      name: "CONTACT"
    }
  ]

})

myApp.controller("PresentationController", ($scope, $interval) => {

  const initialMessages = [
    {
      title: "BUILD THE WEBSITE OF YOUR DREAMS 1",
      message: "1 We are a digital agency that believes in building things that are meaningful!",
      img: "img/4_strategic_vision.jpg"
    },
    {
      title: "BUILD THE WEBSITE OF YOUR DREAMS 2",
      message: "2 We are a digital agency that believes in building things that are meaningful!",
      img: "img/car-mechanic-repair-Your-car.jpg"
    },
    {
      title: "BUILD THE WEBSITE OF YOUR DREAMS 3",
      message: "2 We are a digital agency that believes in building things that are meaningful!",
      img: "img/juridico.jpg"
    },
    {
      title: "BUILD THE WEBSITE OF YOUR DREAMS 4",
      message: "2 We are a digital agency that believes in building things that are meaningful!",
      img: "img/ep70.jpg"
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

  $scope.title = "CORE SERVICES"

  $scope.services = [
    {
      logo: "img/222600.svg",
      title: "BEAUTIFUL DESIGNS",
      message: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in."
    },
    {
      logo: "img/841364.svg",
      title: "WEB DEVELOPMENT",
      message: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in."
    },
    {
      logo: "img/1170607.svg",
      title: "CLOUD SERVICES",
      message: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in."
    },
    {
      logo: "img/148941.svg",
      title: "24/7 SUPPORT",
      message: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in."
    },
    {
      logo: "img/1141779.svg",
      title: "STADISTICS",
      message: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in."
    },
    {
      logo: "img/959318.svg",
      title: "SAVINGS",
      message: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in."
    }
  ]

})

myApp.controller("AboutController", ($scope) => {

  $scope.title = "ABOUT US"

  $scope.img = 'img/951862.svg'

  $scope.mission = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. letious versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

  $scope.vision = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. letious versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

})

myApp.controller("TechnologiesController", ($scope) => {

  $scope.title = "TECHNOLOGIES USED FOR DEVELOPMENTS"

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

  $scope.title = "OUR AMAZING TEAM"

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
      fullname: "YOU?",
      rol: "What is your rol?"
    }
  ]

})