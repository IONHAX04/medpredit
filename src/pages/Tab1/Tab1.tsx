import { IonContent, IonHeader, IonPage, IonSearchbar } from "@ionic/react";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonSearchbar></IonSearchbar>
      </IonHeader>
      <IonContent fullscreen>
        <img
          src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
          alt=""
        />
        <img
          src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
          alt=""
        />
        <img
          src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
          alt=""
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
