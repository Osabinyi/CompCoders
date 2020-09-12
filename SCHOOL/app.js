// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRt5L7UgMDzoTrWwlDT5nWhFelYr68R0U",
    authDomain: "compcoders-5ab8b.firebaseapp.com",
    databaseURL: "https://compcoders-5ab8b.firebaseio.com",
    projectId: "compcoders-5ab8b",
    storageBucket: "compcoders-5ab8b.appspot.com",
    messagingSenderId: "73484700994",
    appId: "1:73484700994:web:e98480deda6b79fb4d4cdb",
    measurementId: "G-4YC0MZT329"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

//refence messages collections

const messageRef = firebase.database().ref('info'); //messages id the name of the database

//listen for form submit
document.getElementById('compcoders').addEventListener('submit', submitForm);

//submit form
function submitForm(e){
    e.preventDefault();

   //get values
   const name = getInputVal('name'); 
   const company = getInputVal('company'); 
   const email = getInputVal('email'); 
   const phone = getInputVal('phone'); 
   const message = getInputVal('message'); 
  
   //save message
   saveMessage(name,company,email,phone,message);

   //show alert
   document.querySelector('.alert').style.display = 'block';

   //hide alert after 3 seconds
   setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
   },3000);

   //clear form
   document.getElementById('compcoders').reset();
}

//function get document values
function getInputVal(id){
    return document.getElementById(id).value;
}
//save message to firebase
function saveMessage(name, company, email, phone, message){
    const newMessageRef = messageRef.push();
    newMessageRef.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
}


//nodemailer
// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'youremail@gmail.com',
//     pass: 'yourpassword'
//   }
// });

// const mailOptions = {
//   from: 'danielosabinyi@gmail.com',
//   to: 'akimary@gmail.com',
//   subject: 'Hello Mum',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// }); 

//End of nodemailer

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        //Toggle Links
        nav.classList.toggle('nav-active');

          //Animate Links
    navLinks.forEach((link, index) => {
        
        //  console.log(index / 5 + 0.2); for knowing how it works
      if(link.style.animation){
          link.style.animation = ''
      } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
      }
      });
      //burger animation
      burger.classList.toggle('toggle');
    });
  
}
navSlide();