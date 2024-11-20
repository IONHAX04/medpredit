import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Splashscreen.css";
import { IonContent, IonPage } from "@ionic/react";

const Splashscreen: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push("/intro");
    }, 3000);

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="splashScreenContents">
          <img
            src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
            alt=""
          />
          <p>MEDPREDiT</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Splashscreen;
