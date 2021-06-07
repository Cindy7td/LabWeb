///import { query, where } from "firebase/firestore";

class servicios { 

firebaseConfig = {
    apiKey: "Tu apiKey",
    authDomain: "Tu authDomain",
    databaseURL: "Tu databaseURL",
    projectId: "Tu projectId",
    storageBucket: "Tu storageBucket",
    messagingSenderId: "Tu messagingSenderId",
    appId: "Tu appId",
    measurementId: "Tu measurementId",
};

firebase.initializeApp(firebaseConfig);

db = firebase.database();
getTasks(projectName){
    db.collection("todos").where("owner", "==", projectName)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    
}

getProjects(username){
    db.collection("projects").where("owner", "==", username)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}

}

export default new servicios();