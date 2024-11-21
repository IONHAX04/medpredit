import {
  IonContent,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonToolbar className="ion-padding-top">
        <IonSearchbar placeholder="Search Patient"></IonSearchbar>{" "}
      </IonToolbar>
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
