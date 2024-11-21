import { IonContent, IonHeader, IonPage, IonSearchbar } from "@ionic/react";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonSearchbar></IonSearchbar>
      </IonHeader>
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};

export default Tab1;
