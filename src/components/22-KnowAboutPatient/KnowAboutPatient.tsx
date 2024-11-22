import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

import { useParams } from "react-router-dom";
import KnowCards from "../../pages/KnowCards/KnowCards";

const KnowAboutPatient: React.FC = () => {
  const { patient } = useParams<{ patient: string }>();
  console.log("patientId", patient);

  const cardData = [
    {
      id: "1",
      imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      title: "Vitals",
    },
    {
      id: "2",
      imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      title: "Physical Activity",
    },
    {
      id: "3",
      imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      title: "Stress",
    },
    {
      id: "4",
      imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      title: "Tobacco",
    },
    {
      id: "5",
      imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      title: "Alcohol",
    },
    {
      id: "6",
      imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      title: "Diet",
    },
    {
      id: "7",
      imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      title: "Sleep",
    },
    {
      id: "8",
      imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      title: "BMI",
    },
    {
      id: "9",
      imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      title: "Family History",
    },
  ];
  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar className="pt-1 pb-1" mode="ios">
          <IonButtons slot="start">
            <IonBackButton mode="md" defaultHref="/patient"></IonBackButton>
          </IonButtons>
          <IonTitle>{patient}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <KnowCards cardData={cardData} />
      </IonContent>
    </IonPage>
  );
};

export default KnowAboutPatient;
