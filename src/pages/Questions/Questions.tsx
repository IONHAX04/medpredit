import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

import { useParams } from "react-router-dom";
import SingleInputBox from "./SingleInputBox";
import MultiInputBox from "./MultiInputBox";
import Checkbox from "./Checkbox";
import YesNo from "./YesNo";

const Questions: React.FC = () => {
  const { cardTitle } = useParams<{ cardTitle: string }>();
  console.log("card", cardTitle);

  const questionsData = [
    {
      type: "singleInput",
      label: "Pulse",
      placeholder: "Rate (beats per min)",
    },
    {
      type: "checkbox",
      label: "Irregular Rhythm",
    },
    {
      type: "singleInput",
      label: "Temperature",
      placeholder: "Celsius",
    },
    {
      type: "multiInput",
      label: "Blood Pressure",
      placeholders: [
        "Systolic (mm Hg)",
        "Diastolic (mm Hg)",
        "Respiratory rate (breaths per min)",
      ],
    },
    {
      type: "yesNo",
      label: "Yes or No",
      placeholders: ["Yes", "No"],
    },
    {
      type: "yesNo",
      label: "Multiple Options",
      placeholders: ["Option 1", "Option 2", "Option 3"],
    },
  ];

  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar className="pt-1 pb-1" mode="ios">
          <IonButtons slot="start">
            <IonBackButton mode="md" defaultHref="/patient"></IonBackButton>
          </IonButtons>
          <IonTitle>{cardTitle}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="questionContainers">
          {questionsData.map((question, index) => {
            switch (question.type) {
              case "singleInput":
                return (
                  <SingleInputBox
                    key={index}
                    label={question.label}
                    placeholder={question.placeholder || ""}
                  />
                );

              case "multiInput":
                return (
                  <MultiInputBox
                    key={index}
                    label={question.label}
                    placeholders={question.placeholders || []}
                  />
                );

              case "checkbox":
                return <Checkbox key={index} label={question.label} />;

              case "yesNo":
                return (
                  <YesNo
                    key={index}
                    label={question.label}
                    placeholders={question.placeholders || []}
                  />
                );

              default:
                return null;
            }
          })}
          <IonButton expand="block">Save</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Questions;
