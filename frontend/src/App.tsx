import { initializeApp } from "firebase/app";
import {  Route,  Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { getAuth } from "firebase/auth";
import Test from "./components/test";
import Signin from "./components/Signin";
import Problem from "./pages/Problem";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM3BhBQsMyPyqNb3UtY7pZG4iQ4OUA5WM",
  authDomain: "leetcode-clone-7a813.firebaseapp.com",
  projectId: "leetcode-clone-7a813",
  storageBucket: "leetcode-clone-7a813.appspot.com",
  messagingSenderId: "412153451347",
  appId: "1:412153451347:web:92facece6ae555949807a6",
  measurementId: "G-H6ZYQEW2SL"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

function App() {
  return (
    <>
        <Routes>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/dashboard" element={<Dashboard />}> </Route>
          <Route path="/sample" element={<Test />}></Route>
          <Route path="/problems" element={<Problem/>}></Route>
        </Routes>
    </>
  )
}


export default App;
