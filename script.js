const firebaseConfig = {
    apiKey: "AIzaSyAvDJfD72PzrSqIW9pc41wnU2R4gH3tEkI",
    authDomain: "mini-hackaton-4a366.firebaseapp.com",
    databaseURL: "https://mini-hackaton-4a366-default-rtdb.firebaseio.com",
    projectId: "mini-hackaton-4a366",
    storageBucket: "mini-hackaton-4a366.firebasestorage.app",
    messagingSenderId: "887392801099",
    appId: "1:887392801099:web:7ab8a512517cb726a798ce"
  };
// initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference database
var MiniHackatonDB = firebase.database().ref("Mini-Hackaton");

document.getElementById("Contactform").addEventListener("submit", submit);
function submitform(e){
    e.preventDefault();
    var name = getElementVal('name');
    var email = getElementVal('email')
    var messsage = getElemetVal('messsage');

    saveMessages(name, email, message)
}

const saceMessages = (name, email, message) => {
   var newMinihackaton = MiniHackatonDB.push();

   newMinihackaton.set({
    name : name,
    email : email,
    message : message,
   })
};


const getElementVal = (id) =>{
    return document . getElementById(id).aValue;
}; 