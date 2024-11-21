import { IonPage } from "@ionic/react";
import { Divider } from "primereact/divider";
import React from "react";

interface Patient {
  name: string;
  lastVisit: string;
  doctorName: string;
  contactNumber: string;
  district: string;
  imageUrl: string;
}

const patientsData: Patient[] = [
  {
    name: "Patient Name 1",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 1",
    contactNumber: "9292929292",
    district: "District Name 1",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    name: "Patient Name 2",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 2",
    contactNumber: "9292929292",
    district: "District Name 2",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    name: "Patient Name 3",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 3",
    contactNumber: "9292929292",
    district: "District Name 3",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    name: "Patient Name 1",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 1",
    contactNumber: "9292929292",
    district: "District Name 1",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    name: "Patient Name 2",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 2",
    contactNumber: "9292929292",
    district: "District Name 2",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    name: "Patient Name 3",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 3",
    contactNumber: "9292929292",
    district: "District Name 3",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    name: "Patient Name 1",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 1",
    contactNumber: "9292929292",
    district: "District Name 1",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    name: "Patient Name 2",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 2",
    contactNumber: "9292929292",
    district: "District Name 2",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    name: "Patient Name 3",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 3",
    contactNumber: "9292929292",
    district: "District Name 3",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
];

const Patientcards: React.FC = () => {
  return (
    <div className="patientCardsParent">
      {patientsData.map((patient, index) => (
        <div key={index}>
          <div className="patientCard">
            <img src={patient.imageUrl} alt={`Patient ${patient.name}`} />
            <div className="cardContents">
              <p className="patientName">{patient.name}</p>
              <p className="lastVisit">
                <span>Last Visit : </span> {patient.lastVisit}
              </p>
              <p className="doctorName">
                <span>Doctor Name : </span> {patient.doctorName}
              </p>
              <div className="footer">
                <p className="contactNumber">
                  <span>Mobile : </span> {patient.contactNumber}
                </p>
                <p className="district">{patient.district}</p>
              </div>
            </div>
          </div>
          {index < patientsData.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  );
};

export default Patientcards;
