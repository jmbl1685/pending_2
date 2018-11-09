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
      img: "https://coretelligent.com/images/uploads/4_strategic_vision.jpg"
    },
    {
      title: "BUILD THE WEBSITE OF YOUR DREAMS 2",
      message: "2 We are a digital agency that believes in building things that are meaningful!",
      img: "http://www.auto-repairspro.com/images/car-mechanic-repair-Your-car.jpg"
    },
    {
      title: "BUILD THE WEBSITE OF YOUR DREAMS 3",
      message: "2 We are a digital agency that believes in building things that are meaningful!",
      img: "http://www.ius360.com/wp-content/uploads/2015/01/juridico.jpg"
    },
    {
      title: "BUILD THE WEBSITE OF YOUR DREAMS 4",
      message: "2 We are a digital agency that believes in building things that are meaningful!",
      img: "https://i0.wp.com/pixelrater.com/wp-content/uploads/2017/06/ep70.jpg?fit=1400%2C645&ssl=1"
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
      logo: "https://image.flaticon.com/icons/svg/222/222600.svg",
      title: "BEAUTIFUL DESIGNS",
      message: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in."
    },
    {
      logo: "https://image.flaticon.com/icons/svg/841/841364.svg",
      title: "WEB DEVELOPMENT",
      message: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in."
    },
    {
      logo: "https://image.flaticon.com/icons/svg/1170/1170607.svg",
      title: "CLOUD SERVICES",
      message: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in."
    },
    {
      logo: "https://image.flaticon.com/icons/svg/148/148941.svg",
      title: "24/7 SUPPORT",
      message: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in."
    },
    {
      logo: "https://image.flaticon.com/icons/svg/1141/1141779.svg",
      title: "STADISTICS",
      message: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in."
    },
    {
      logo: "https://image.flaticon.com/icons/svg/959/959318.svg",
      title: "SAVINGS",
      message: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in."
    }
  ]

})

myApp.controller("AboutController", ($scope) => {

  $scope.title = "ABOUT US"

  $scope.img = 'https://image.flaticon.com/icons/svg/951/951862.svg'

  $scope.mission = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. letious versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

  $scope.vision = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. letious versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

})

myApp.controller("TechnologiesController", ($scope) => {

  $scope.title = "TECHNOLOGIES USED FOR DEVELOPMENTS"

  $scope.technologies = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      name: "Javascript",
      description: ""
    },
    {
      logo: "https://ih0.redbubble.net/image.416412087.0587/flat,550x550,075,f.jpg",
      name: "C#",
      description: ""
    },
    {
      logo: "https://png2.kisspng.com/20180402/qee/kisspng-python-logo-clojure-javascript-9-5ac25c26a6cfb7.9060924715226870146833.png",
      name: "Python",
      description: ""
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/500px-Angular_full_color_logo.svg.png",
      name: "Angular",
      description: ""
    },
    {
      logo: "https://cdn-images-1.medium.com/max/1200/1*To2H39eauxaeYxYMtV1afQ.png",
      name: "React.js",
      description: ""
    },
    {
      logo: "http://pluspng.com/img-png/nodejs-png-nodejs-icon-png-50-px-1600.png",
      name: "Node.js",
      description: ""
    },
    {
      logo: "https://uploads.toptal.io/blog/category/logo/25/express_js.png",
      name: "Express.js",
      description: ""
    },
    {
      logo: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0020/1075/brand.gif?itok=3zVLkhLj",
      name: "ASP.NET Framework",
      description: ""
    },
    {
      logo: "https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
      name: "Sass ",
      description: ""
    },
    {
      logo: "https://racheldagesse.com/web/wp-content/uploads/2018/08/gulp-logo_opt.png",
      name: "Gulp",
      description: ""
    },
    {
      logo: "https://dw5kj1uw0x7gn.cloudfront.net/assets/files/1308/mongodb.png",
      name: "MongoDB",
      description: ""
    },
    {
      logo: "https://cdn-images-1.medium.com/max/1600/1*R4c8lHBHuH5qyqOtZb3h-w.png",
      name: "Firebase",
      description: ""
    },
    {
      logo: "https://cdn.freebiesupply.com/logos/thumbs/2x/microsoft-sql-server-logo.png",
      name: "SQL Server",
      description: ""
    },
    {
      logo: "https://sempreupdate.com.br/wp-content/uploads/2017/10/MySQL-Logo-Large-Orignal.png",
      name: "MySQL",
      description: ""
    },
    {
      logo: "https://enclude.ie/wp-content/uploads/2018/09/MS-Azure.png",
      name: "Microsoft Azure",
      description: ""
    },
    {
      logo: "https://www.gstatic.com/images/branding/product/2x/cloud_512dp.png",
      name: "Google Cloud",
      description: ""
    }
  ]

})

myApp.controller("TeamController", ($scope) => {

  $scope.title = "OUR AMAZING TEAM"

  $scope.team = [
    {
      photo: "https://avatars0.githubusercontent.com/u/22874642",
      fullname: "Juan Manuel Batty Linero",
      rol: "FullStack Developer"
    },
    {
      photo: "https://media.licdn.com/dms/image/C4E03AQGV5JixCOAAnQ/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=Q66x1hYzhUEvhzGNhNUZ6RCgXCLhnclaBfN7gpyyCtw",
      fullname: "Roberto Andrés Batty Linero",
      rol: "BackEnd Developer"
    },
    {
      photo: "https://static.licdn.com/scds/common/u/images/themes/katy/ghosts/person/ghost_person_200x200_v1.png",
      fullname: "YOU?",
      rol: "What is your rol?"
    }
  ]

})