


   // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyBqNjI_-wd320pNf7TdMgc21a72eKmcBN0",
    authDomain: "stapp-7c06c.firebaseapp.com",
    databaseURL: "https://stapp-7c06c.firebaseio.com",
    projectId: "stapp-7c06c",
    storageBucket: "stapp-7c06c.appspot.com",
    messagingSenderId: "383577609898",
    appId: "1:383577609898:web:e877098274f65b6ef5e2d3",
    measurementId: "G-FXDBRJPY8R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
 
 
 
 
 
  function signUp(){

      var email=document.getElementById('email');
      var password=document.getElementById('password');
      const promise=auth.createUserWithEmailAndPassword(email.value,password.value);
      promise.catch(e => alert(e.message));
      alert("signed Up");
     


  }
  function signIn(){
    
     var email = document.getElementById('email');
     var password = document.getElementById('password');
     
     const promise = auth.signInWithEmailAndPassword(email.value, password.value);
     promise.catch(e => alert(e.message));
     window.open('../dashboard.html');
     
 }
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}



    