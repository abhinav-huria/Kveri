import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Login from "./components/auth/Login";
import Quora from "./components/Quora";
import Trending from "./components/Trending";
import { login, selectUser } from "./feature/userSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// const useStyles = makeStyles(() => ({
//   App: {
//     backgroundColor: "#FAF3E0",
//   },
// }));

function App() {
  // const classes=useStyles();

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            userName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
            uid: authUser.uid,
          })
        );
        // console.log("AuthUser", authUser);
      }
    });
  }, [dispatch]);
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={user ? <Quora /> : <Login /> }></Route>
     <Route path="/trending"  element={<Trending/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
