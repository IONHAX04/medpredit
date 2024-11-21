import { IonContent, IonPage } from "@ionic/react";
import React from "react";

import "./Enroll.css";
import { Divider } from "primereact/divider";
import { Avatar } from "primereact/avatar";

const Enroll: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="signinPage">
          <p className="signinHeader ion-padding-bottom">Sign In</p>
          <p className="welcomeCont ion-padding-bottom">
            Hi! Welcome Back, You've Been Missed !!
          </p>

          <div className="formContentSignIn ion-padding-top">
            <p>Email</p>
            <input type="mobile" required />
            <p>Password</p>
            <input type="password" required />
            <p className="forgotPassword">Forgot Password ?</p>
            <button className="ion-margin-top ion-margin-bottom">
              Sign In
            </button>
            <Divider layout="horizontal">
              <b>OR</b>
            </Divider>
            <div className="googleSignIn">
              <Avatar icon="pi pi-apple" size="large" shape="circle" />
              <Avatar icon="pi pi-google" size="large" shape="circle" />
              <Avatar icon="pi pi-envelope" size="large" shape="circle" />
            </div>
            <div className="signUp">
              <p className="ion-padding-top">
                Don't have an account? <span>Sign up here !</span>
              </p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Enroll;
