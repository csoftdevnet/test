import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/storage";
import "firebase/firestore";
import firebaseConfig from "../../firebase/firebaseconfig";
firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore().collection("users");
firebase.firestore().settings({ timestampsInSnapshots: true });


export const login = (email, password) => async (dispatch) => {
  try {
    const LoginData = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    console.log("Login Credential ", LoginData);
    return dispatch({
      LoginData,
      type: 'USER_LOGIN',
    });
  } catch (error) {
    console.log("Catch error",error);
  }
};
