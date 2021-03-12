import React, { useEffect, useState } from 'react'
import Login from './login.js'
import firebaseApp from '../../../state/firebase';
import './SignIn.module.scss';
import { db } from '../../../state/firebase.js';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dashboard from '../../pages/Dashboard/Dashboard';
import WelcomeDialog from '../WelcomeDialog/WelcomeDialog';



export default () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [nameError, setNameError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);
    const [user, setUser] = useState("");
    const clearInput = () => {
        setEmail("");
        setName("");
        setPassword("");
    }
    const clearError = () => {
        setNameError("")
        setPasswordError("");
        setEmailError("");
    }
    const handleLogout = () => {
        clearError();
        clearInput();
        firebaseApp.auth().signOut();
    }
    const handleLogin = () => {
        firebaseApp
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;

                }
            });
    }

    const handleSignUp = () => {
        clearError();
        name != "" ?
            firebaseApp
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    addUser();
                })
                .catch(err => {
                    switch (err.code) {
                        case "auth/email-already-in-use":

                        case "auth/invalid-email":
                            setEmailError(err.message);
                            break;
                        case "auth/weak-password":
                            setPasswordError(err.message);
                            break;

                    }
                }) :
            (
                validateAll()
            )
    }
    const validateAll = () => {
        if (name == "") {
            setNameError("Name cannot be empty");
        }
        if (email == "") {
            setEmailError("Email cannot be empty")
        }
        if (password == "") {
            setPasswordError("Password cannot be blank");
        }
    }
    const addUser = () => {
        console.log("name is " + name);
        console.log("email is " + email);
        console.log("password is " + password);
        db.collection("login").add({
            name: name,
            email: email,
            password: password
        })
            .then(() => {
                clearInput();
                authListener();
            })
            .catch((error) => {
                alert(error.message);
            })

    }
    const authListener = () => {
        console.log("user-added");
        firebaseApp
            .auth()
            .onAuthStateChanged((user) => {
                if (user) {
                    clearInput();
                    clearError();
                    setUser(user);

                }
                else {
                    clearInput();
                    setUser("");
                }
            })
    }
    useEffect(() => {
        authListener()
    }, [])
    return (
        <>
            {!user ?
                (
                    <Login
                        name={name}
                        password={password}
                        email={email}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        setName={setName}
                        handleLogin={handleLogin}
                        handleSignUp={handleSignUp}
                        hasAccount={hasAccount}
                        setHasAccount={setHasAccount}
                        clearError={clearError}
                        clearInput={clearInput}
                        emailError={emailError}
                        passwordError={passwordError}
                        authListener={authListener}
                        nameError={nameError}

                    />
                )
                :
                (
                    <>
                        {/* <WelcomeDialog /> */}
                        <Dashboard handleLogout={handleLogout} />
                    </>
                )

            }
        </>
    )
}