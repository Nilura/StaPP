
         // Your web app's Firebase configuration
         var firebaseConfig = {
           apiKey: "AIzaSyAX6lDGPZzgU-GiAt4KgG9c6WQ6Q5Lk-pI",
           authDomain: "uni-study-assistant.firebaseapp.com",
           databaseURL: "https://uni-study-assistant.firebaseio.com",
           projectId: "uni-study-assistant",
           storageBucket: "uni-study-assistant.appspot.com",
           messagingSenderId: "819920599455",
           appId: "1:819920599455:web:d12152d9791f7d902be5aa",
           measurementId: "G-T7534Y6H67"
         };

         // Initialize Firebase
         firebase.initializeApp({
        apiKey: 'AIzaSyAX6lDGPZzgU-GiAt4KgG9c6WQ6Q5Lk-pl',
        authDomain: 'uni-study-assistant.firebaseapp.com',
        projectId: 'uni-study-assistant'
        },

        firebaseConfig);
        var db = firebase.firestore();
        var i;
        db.collection("Courses").doc("CID-NHRBxYPQoDgMPWQXaYzsJjU9lRx2").get().then(function(doc) {
        if (doc.exists) {
            const data = doc.data()
        document.querySelector('button')
        .addEventListener('click', () => {
         data[course] = true
        docRef.update(data)
    })
                console.log(doc.data());
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
        }).catch(function(error) {
    console.log("Error getting document:", error);
    });
    db.collection("Attendance").doc("NHRBxYPQoDgMPWQXaYzsJjU9lRx2").get().then(function(doc) {
        if (doc.exists) {
            console.log(doc.data());

            //document.getElementById("thisisit").innerHTML = dpc.
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
        }).catch(function(error) {
    console.log("Error getting document:", error);
    });
    db.collection("TimeTables").doc("TTB-NHRBxYPQoDgMPWQXaYzsJjU9lRx2").get().then(function(doc) {
        if (doc.exists) {
            console.log(doc.data().name);
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
        }).catch(function(error) {
    console.log("Error getting document:", error);
    });

    function create(){
        return "<div class='progress-group' id='course-unit'>Real Analysis<span class='float-right'><b>60</b>/90</span><div class='progress progress-sm'><div class='progress-bar bg-primary' style='width: 66%' id='course-unitp'></div></div></div>"
    }