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
import { useParams } from "react-router";
import SubCards from "./SubCards";

const SubCategories: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  // Example dynamic data to pass to SubCards
  const subCardData = [
    {
      id: "1",
      patientId: "NCD1001",
      patientName: "John Doe",
      riskFactor: "Physical Activity",
      completionPercentage: 85,
      filledBy: "Dr. Smith",
      filledDate: "22-Nov-2024",
    },
    {
      id: "2",
      patientId: "NCD1002",
      patientName: "Jane Smith",
      riskFactor: "Stress",
      completionPercentage: 60,
      filledBy: "Dr. Taylor",
      filledDate: "21-Nov-2024",
    },
    {
      id: "3",
      patientId: "NCD1003",
      patientName: "Michael Johnson",
      riskFactor: "Tobacco",
      completionPercentage: 45,
      filledBy: "Dr. Brown",
      filledDate: "20-Nov-2024",
    },
    {
      id: "4",
      patientId: "NCD1003",
      patientName: "Michael Johnson",
      riskFactor: "Alcohol",
      completionPercentage: 45,
      filledBy: "Dr. Brown",
      filledDate: "20-Nov-2024",
    },
    {
      id: "5",
      patientId: "NCD1003",
      patientName: "Michael Johnson",
      riskFactor: "Diet",
      completionPercentage: 45,
      filledBy: "Dr. Brown",
      filledDate: "20-Nov-2024",
    },
    {
      id: "6",
      patientId: "NCD1003",
      patientName: "Michael Johnson",
      riskFactor: "Sleep",
      completionPercentage: 45,
      filledBy: "Dr. Brown",
      filledDate: "20-Nov-2024",
    },
    {
      id: "7",
      patientId: "NCD1003",
      patientName: "Michael Johnson",
      riskFactor: "BMI",
      completionPercentage: 45,
      filledBy: "Dr. Brown",
      filledDate: "20-Nov-2024",
    },
    {
      id: "8",
      patientId: "NCD1003",
      patientName: "Michael Johnson",
      riskFactor: "Family History",
      completionPercentage: 45,
      filledBy: "Dr. Brown",
      filledDate: "20-Nov-2024",
    },
  ];

  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar className="pt-1 pb-1" mode="ios">
          <IonButtons slot="start">
            <IonBackButton mode="md" defaultHref="/patient"></IonBackButton>
          </IonButtons>
          <IonTitle>{categoryId}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <SubCards data={subCardData} categoryId={categoryId} />
      </IonContent>
    </IonPage>
  );
};

export default SubCategories;
