import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.configg";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default initializeAuthentication;
