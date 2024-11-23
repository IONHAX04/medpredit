import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonSegmentView,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

import { useParams } from "react-router-dom";
import KnowCards from "../../pages/KnowCards/KnowCards";

const KnowAboutPatient: React.FC = () => {
  const { patient } = useParams<{ patient: string }>();
  console.log("patientId", patient);

  const askFor = [
    {
      id: "1",
      imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      title: "Risk Factor",
    },
    {
      id: "2",
      imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      title: "Symptoms",
    },
    {
      id: "3",
      imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      title: "Previous Illness",
    },
    {
      id: "4",
      imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      title: "Treatment Details",
    },
  ];

  const lookFor = [
    {
      id: "1",
      imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      title: "General Examination",
    },
    {
      id: "2",
      imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      title: "Vital Signs",
    },
    {
      id: "3",
      imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      title: "Systemic Examination",
    },
  ];

  const investigations = [
    {
      id: "1",
      imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      title: "Blood Sugar Level",
    },
    {
      id: "2",
      imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      title: "Dyslipidemia",
    },
    {
      id: "3",
      imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      title: "Renal Compication",
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
      <IonContent>
        <IonToolbar>
          <IonSegment value="ask" scrollable={true}>
            <IonSegmentButton value="ask" contentId="ask">
              <IonLabel>Ask For</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="look" contentId="look">
              <IonLabel>Look For</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="health" contentId="health">
              <IonLabel>Previous Health</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="investigation" contentId="investigation">
              <IonLabel>Investigation</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="report" contentId="report">
              <IonLabel>Report</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
        <IonSegmentView>
          <IonSegmentContent id="ask">
            <KnowCards cardData={askFor} />
          </IonSegmentContent>
          <IonSegmentContent id="look">
            <KnowCards cardData={lookFor} />
          </IonSegmentContent>
          <IonSegmentContent id="health">Health</IonSegmentContent>
          <IonSegmentContent id="investigation">
            <KnowCards cardData={investigations} />
          </IonSegmentContent>
          <IonSegmentContent id="report">Report</IonSegmentContent>
        </IonSegmentView>
      </IonContent>
    </IonPage>
  );
};

export default KnowAboutPatient;
