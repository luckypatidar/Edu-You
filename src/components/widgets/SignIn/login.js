import React, { useEffect, useState } from 'react';
import styles from './SignIn.module.scss';
import THEME from '../../../state/theme';
import GoogleLogin from 'react-google-login';


export default (props) => {
    const { setEmail, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, email, password, clearInput, clearError, authListener, setName, name, emailError, passwordError, nameError } = props;
    const handleName = (event) => {
        if (name != "") {
            clearError();
        }
        setName(event.target.value);

    }
    const handleEmail = (event) => {
        if (email != "") {
            clearError();
        }
        setEmail(event.target.value);

    }
    const handlePassword = (event) => {
        if (password != "") {
            clearError();
        }
        setPassword(event.target.value);

    }

    const responseGoogle = (response) => {
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
    }


    return (

        <>
            {!hasAccount ? (
                <>
                    <div className={styles.container}>
                        <div className={styles.maindiv}>
                            <div className={styles.formdiv}>
                                <h1>Sign In</h1>
                                <div className={styles.socialContainer}>
                                    {/* <a href="#" className={styles.social}><i class="lab la-facebook-f"></i></a> */}
                                    <a href="#" className={styles.social}>
                                        <GoogleLogin
                                            clientId="593032421420-nq987ri8uutppbbc1k2p6a63r8ulit5s.apps.googleusercontent.com"
                                            buttonText=""
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        />
                                    </a>
                                    {/* <a href="#" className={styles.social}><i class="lab la-linkedin-in"></i></a> */}
                                </div>
                                <span>or use your account</span>
                                <div className={styles.nameInput}>
                                    {/* <div className={styles.row}>
                                            <label>Enter your Username</label>
                                        </div> */}
                                    <div className={styles.row}>
                                        <input type="email" value={email} required autoFocus onChange={handleEmail} placeholder="Enter Your E-mail" />
                                    </div>
                                </div>
                                <div className={styles.error} style={{ color: "red" }}>
                                    <p>{emailError}</p>
                                </div>
                                <div className={styles.passwordInput}>
                                    {/* <div className={styles.row}>
                                            <label>Enter your Password</label>
                                        </div> */}
                                    <div className={styles.row}>
                                        <input type="password" value={password} required autoFocus onChange={handlePassword} placeholder="Enter your Password" />
                                    </div>
                                </div>
                                <div className={styles.error} style={{ color: "red" }}>
                                    <p>{passwordError}</p>
                                </div>
                                <div className={styles.bottomContainer}>
                                    {hasAccount ? (
                                        <>
                                            <div className={styles.row}>
                                                <button className={styles.sign_btn} onClick={handleSignUp}>Sign Up</button>
                                            </div>
                                            <div className={styles.dont}>
                                                <h4 >Already Have An Account! <span className={styles.spanclass} onClick={() => {
                                                    setHasAccount(!hasAccount);
                                                    clearError();
                                                    clearInput();
                                                }}>Sign In</span></h4>
                                                <h5>Forgot Password?</h5>

                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div>
                                                <button className={styles.sign_btn} onClick={handleLogin}>Sign In</button>
                                            </div>
                                            <div className={styles.dont}>
                                                <h4>Don't Have An Account ? <span className={styles.spanclass} onClick={() => {
                                                    setHasAccount(!hasAccount);
                                                    clearInput();
                                                    clearError();
                                                }}>Sign Up</span></h4>
                                                <a href="#">Forgot Password?</a>

                                            </div>
                                        </>
                                    )}



                                </div>
                            </div>
                        </div>
                    </div>

                </>
            )
                :
                (
                    <>
                        <div className={styles.container}>
                            <div className={styles.maindiv}>
                                <div className={styles.formdiv}>
                                    <h1>Create Account</h1>
                                    <div className={styles.socialContainer}>
                                        {/* <a href="#" class="social"><i class="lab la-facebook-f"></i></a> */}
                                        <a href="#" class="social" >
                                            <GoogleLogin
                                                clientId="593032421420-nq987ri8uutppbbc1k2p6a63r8ulit5s.apps.googleusercontent.com"
                                                buttonText=""
                                                onSuccess={responseGoogle}
                                                onFailure={responseGoogle}
                                                cookiePolicy={'single_host_origin'}
                                            />
                                        </a>
                                        {/* <a href="#" class="social"><i class="lab la-linkedin-in"></i></a> */}
                                    </div>
                                    <span>or use your email for registration</span>
                                    <div className={styles.nameInput}>
                                        <div className={styles.row}>
                                            <input type="text" value={name} required autoFocus onChange={handleName} placeholder="Full Name" required />
                                        </div>
                                    </div>
                                    <div className={styles.error} style={{ color: "red" }}>
                                        <p>{nameError}</p>
                                    </div>
                                    <div className={styles.emailInput}>
                                        <div className={styles.row}>
                                            <input type="email" value={email} required autoFocus onChange={handleEmail} placeholder="E-mail" required />
                                        </div>
                                    </div>
                                    <div className={styles.error} style={{ color: "red" }}>
                                        <p>{emailError}</p>
                                    </div>
                                    <div className={styles.passwordInput}>

                                        <div className={styles.row}>
                                            <input type="password" value={password} required autoFocus onChange={handlePassword} placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className={styles.error} style={{ color: "red" }}>
                                        <p>{passwordError}</p>
                                    </div>
                                    <div className={styles.bottomContainer}>
                                        {!hasAccount ? (
                                            <>
                                                <div className={styles.row}>
                                                    <button className={styles.sign_btn} onClick={handleLogin}>Sign In</button>
                                                </div>
                                                <div className={styles.dont}>
                                                    <h4 >Don't Have An Account? <span className={styles.spanclass} onClick={() => {
                                                        setHasAccount(!hasAccount);
                                                        clearError();
                                                        clearInput();
                                                    }}>Sign Up</span></h4>


                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div>
                                                    <button className={styles.sign_btn} onClick={handleSignUp}>Sign Up</button>
                                                </div>
                                                <div className={styles.dont}>
                                                    <h4>Already Have an Account! <span className={styles.spanclass} onClick={() => {
                                                        setHasAccount(!hasAccount);
                                                        clearInput();
                                                        clearError();
                                                    }}>Sign In</span></h4>


                                                </div>
                                            </>
                                        )}



                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                )
            }
        </>


    )
}