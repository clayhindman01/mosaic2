import axios from "axios"
import { Platform } from "react-native"
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVWAPNk-ZT2iBspROdcFMTMbyJOVoC3As",
  authDomain: "mosaic-76e3c.firebaseapp.com",
  projectId: "mosaic-76e3c",
  storageBucket: "mosaic-76e3c.appspot.com",
  messagingSenderId: "471984825969",
  appId: "1:471984825969:web:170877dfb0fd7d2cbf5dd0",
  measurementId: "G-PL0GTDTZPS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const base_url = Platform.OS === "ios"? "http://10.0.0.68:3000/api/v1/mosaic": "http://10.0.2.2:3000/api/v1/mosaic"

/**
 * Call Node API and search database for usernames containing the search result.
 * username: String, username to search for in database
 * setSearchResults: function, sets the state value of search result to the selected data
 */
export const searchUser = (username, setSearchResults) => {
  if (username === "") {
    setSearchResults(undefined)
    return
  }
  axios.get(base_url + `/searchUser/${username}`)
    .then((response) => {
      console.log("res",response.data)
      setSearchResults(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
}

const addDBUser = (username) => {
  const user = getFirebaseUser()
    console.log("addDBUser", user)
    axios.post(base_url + "/addUser", {
      user_id: user.uid,
      user_email: user.email,
      user_name: username
    }).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.error(error)
    })
}

// Register a user in firebase using 
export const registerFirebaseUser = async (state, navigation) => {
    await createUserWithEmailAndPassword(
      auth,
      state.email,
      state.password
    ).then((data) => {
      const user = data.user
      console.log("registerFirebaseUser", user)
    })
  .catch((error) => {
    console.log(error);
  })
  await addDBUser(state.username);
  navigation.navigate('home')
  return getFirebaseUser();
};

// Login a user with email and password
export const loginUser = async (email, password, navigation) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    navigation.navigate('home')
    return user;
  } catch (error) {
    console.log(error);
  }
};

// Get the current user from firebase
export const getFirebaseUser = () => {
  console.log(auth.currentUser);
  return auth.currentUser;
};

// Logout the current user from firebase
export const logoutUser = () => {
  console.log("Logging out");
  signOut(auth)
    .then(() => {
      console.log("User signed out");
    })
    .catch((error) => {
      console.log(error);
    });
};

// TODO: Implement Google Login
// Not working yet
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

    console.log(user, token);
    return user;
  } catch (error) {
    console.log(error);
  }
};