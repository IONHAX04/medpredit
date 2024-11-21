import { IonContent, IonPage } from "@ionic/react";
import React from "react";

import "./Enroll.css";

const Enroll: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="signinPage">
          <p className="signinHeader">Sign In</p>
          <p className="welcomeCont">Hi! Welcome Back, You've Been Missed !!</p>

          <div className="formContentSignIn">
            <p>Email</p>
            <input type="email" required />
            <p>Password</p>
            <input type="password" required />
            <p className="forgotPassword">Forgot Password ?</p>
            <button>Sign In</button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Enroll;
