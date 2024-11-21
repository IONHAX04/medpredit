import { IonPage } from "@ionic/react";
import { Divider } from "primereact/divider";
import React, { useState } from "react";

import ReactPaginate from "react-paginate";

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
    name: "Patient Name 4",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 4",
    contactNumber: "9292929292",
    district: "District Name 4",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    name: "Patient Name 5",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 5",
    contactNumber: "9292929292",
    district: "District Name 5",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    name: "Patient Name 6",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 6",
    contactNumber: "9292929292",
    district: "District Name 6",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    name: "Patient Name 7",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 7",
    contactNumber: "9292929292",
    district: "District Name 7",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    name: "Patient Name 8",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 8",
    contactNumber: "9292929292",
    district: "District Name 8",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    name: "Patient Name 9",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 9",
    contactNumber: "9292929292",
    district: "District Name 9",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    name: "Patient Name 10",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 10",
    contactNumber: "9292929292",
    district: "District Name 10",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
];

interface PatientcardsProps {
  onPaginationChange: () => void;
}

const Patientcards: React.FC<PatientcardsProps> = ({ onPaginationChange }) => {
  const itemsPerPage = 8;

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
    onPaginationChange();
  };

  const displayedPatients = patientsData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="patientCardsParent">
      {displayedPatients.map((patient, index) => (
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
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={Math.ceil(patientsData.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Patientcards;
