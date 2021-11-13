import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  getIdToken,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "./../Login/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUsers] = useState({});
  const [admin, setAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const signinWithGoogle = () => {
    setIsLoading(true);

    return (
      signInWithPopup(auth, googleProvider)
        // .then((result) => {
        //   setUsers(result.user);
        // })
        .finally(() => setIsLoading(false))
    );
  };

  // Observer User State
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUsers({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => { })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    admin,
    token,
    isLoading,
    signinWithGoogle,
    logOut,
  };
};

export default useFirebase;
