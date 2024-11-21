import {
  IonButton,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonModal,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";

import "./Enroll.css";
import { Divider } from "primereact/divider";
import { Avatar } from "primereact/avatar";

const Enroll: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(undefined);

  const [canDismiss, setCanDismiss] = useState(false);
  const [presentingElement, setPresentingElement] = useState<
    HTMLElement | undefined
  >(undefined);

  const [isSignInVisible, setIsSignInVisible] = useState(false);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }
  return (
    <IonPage ref={page}>
      <IonContent>
        <div
          className="signIn"
          style={{
            display: isSignInVisible ? "block" : "none",
            overflow: "auto",
          }}
        >
          <div className="signinPage">
            <p className="signinHeader ion-padding-bottom">Sign In</p>
            <p className="welcomeCont ion-padding-bottom">
              Hi! Welcome Back, You've Been Missed !!
            </p>

            <div className="formContentSignIn ion-padding-top">
              <p>Email</p>
              <input type="email" required />
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
                <Avatar icon="pi pi-phone" size="large" shape="circle" />
              </div>
              <div className="signUp">
                <p className="ion-padding-top">
                  Don't have an account?
                  <span onClick={() => setIsSignInVisible(false)}>
                    Sign up here!
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="register"
          style={{
            display: isSignInVisible ? "none" : "block",
            overflow: "auto",
          }}
        >
          <div className="signinPage">
            <p className="signinHeader ion-padding-bottom">Create Account</p>
            <p className="welcomeCont ion-padding-bottom">
              Fill your information below or register with your social account.
            </p>

            <div className="formContentSignIn ion-padding-top">
              <p>Name</p>
              <input type="text" required />
              <p>Email</p>
              <input type="email" required />
              <p>Password</p>
              <input type="password" required />
              <div className="termsCondition"></div>
              <button
                className="ion-margin-top ion-margin-bottom"
                id="open-modal"
              >
                Sign Up
              </button>
              <Divider layout="horizontal">
                <b>OR</b>
              </Divider>
              <div className="googleSignIn">
                <Avatar icon="pi pi-phone" size="large" shape="circle" />
              </div>
              <div className="signUp">
                <p className="ion-padding-top">
                  Already have an account ?
                  <span onClick={() => setIsSignInVisible(true)}>
                    Sign in here!
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <IonModal
          ref={modal}
          mode="ios"
          trigger="open-modal"
          canDismiss={canDismiss}
          presentingElement={presentingElement}
        >
          <IonHeader>
            <IonToolbar>
              <p className="termsCond">Terms & Conditions</p>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <p className="ion-padding-horizontal termsConditionsCont">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              eaque at ab perferendis optio dicta labore nisi illo consequatur
              architecto. Cum exercitationem dicta sapiente recusandae molestiae
              quaerat placeat odio et?
            </p>
            <IonItem>
              <IonCheckbox
                id="terms"
                checked={canDismiss}
                onIonChange={(ev) => {
                  setCanDismiss(ev.detail.checked);
                }}
              >
                <div className="ion-text-wrap">
                  Do you accept the terms and conditions?
                </div>
              </IonCheckbox>
            </IonItem>
            <IonButton
              disabled={!canDismiss}
              onClick={dismiss}
              className="continueButton"
            >
              Continue
            </IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Enroll;
