import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Tab5.css";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
  SegmentValue,
} from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import QuestionsAll from "../../components/31-QuestionsAll/QuestionsAll";
import EmployeesAll from "../../components/32-EmployeesAll/EmployeesAll";

const Tab5: React.FC = () => {
  const [selectedSegment, setSelectedSegment] =
    useState<SegmentValue>("questions");
  const history = useHistory();

  const handleAddClick = () => {
    if (selectedSegment === "questions") {
      history.push("/addQuestions");
    } else if (selectedSegment === "employee") {
      history.push("/addEmployee");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" mode="md"></IonBackButton>
          </IonButtons>
          <IonTitle>Configure</IonTitle>
          <IonButtons slot="end">
            <IonIcon
              className="addIcon mr-2"
              icon={addCircleOutline}
              onClick={handleAddClick}
            ></IonIcon>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonSegment
            value={selectedSegment}
            onIonChange={(e) => setSelectedSegment(e.detail.value!)}
          >
            <IonSegmentButton value="questions">
              <IonLabel>Questions</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="employee">
              <IonLabel>Employee</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {selectedSegment === "questions" && <QuestionsAll />}
        {selectedSegment === "employee" && <EmployeesAll />}
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
