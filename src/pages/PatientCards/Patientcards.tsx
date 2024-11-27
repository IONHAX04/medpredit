import { IonPage } from "@ionic/react";
import { Divider } from "primereact/divider";
import React, { useState } from "react";

import ReactPaginate from "react-paginate";
import { useHistory } from "react-router";

interface Patient {
  refUserCustId: string;
  refUserFname: string;
  refUserLname: string;
  lastVisit: string;
  DoctorName: string;
  refUserMobileno: string;
  refDistrict: string;
  imageUrl: string;
  refUserId: number;
}

interface PatientcardsProps {
  patientsData: Patient[];
  onPaginationChange: () => void;
}

const Patientcards: React.FC<PatientcardsProps> = ({
  patientsData,
  onPaginationChange,
}) => {
  const history = useHistory();

  // PAGINATION CODE
  // const itemsPerPage = 8;
  // const [currentPage, setCurrentPage] = useState(0);
  // const handlePageChange = (selectedPage: { selected: number }) => {
  //   setCurrentPage(selectedPage.selected);
  //   onPaginationChange();
  // };
  // const displayedPatients = patientsData.slice(
  //   currentPage * itemsPerPage,
  //   (currentPage + 1) * itemsPerPage
  // );

  const handleCardClick = (patient: string, patientId: number) => {
    localStorage.setItem("currentPatientId", patientId.toString());
    history.push(`/knowAbout/${patient}/${patientId}`);
  };

  return (
    <div className="patientCardsParent">
      {patientsData.map((patient, index) => {
        const patientFname = patient.refUserFname || "-";
        const patientLname = patient.refUserLname || "-";
        const lastVisit = patient.lastVisit || "-";
        const doctorName = patient.DoctorName || "-";
        const mobileno = patient.refUserMobileno || "-";
        const address = patient.refDistrict || "-";
        const imageUrl =
          patient.imageUrl ||
          "https://ionicframework.com/docs/img/demos/thumbnail.svg";

        return (
          <div key={index}>
            <div
              className="patientCard"
              onClick={() =>
                handleCardClick(patient.refUserCustId, patient.refUserId)
              }
            >
              <img src={imageUrl} alt={`Patient ${patientFname}`} />
              <div className="cardContents">
                <div className="patiendDetails">
                  <p className="patientName">{patient.refUserCustId || "-"}</p>
                  <p className="DoctorName">Added By : {doctorName}</p>
                </div>
                <p className="patientName">
                  {patientFname} {patientLname}
                </p>
                <p className="lastVisit">
                  <span>Last Visit : </span>
                  {lastVisit}
                </p>
                <p className="DoctorName">
                  <span>Doctor Name : </span> {doctorName}
                </p>
                <div className="footer">
                  <p className="refUserMobileno">
                    <span>Mobile : </span> {mobileno}
                  </p>
                  <p className="refDistrict">{address}</p>
                </div>
              </div>
            </div>
            {index < patientsData.length - 1 && <Divider />}
          </div>
        );
      })}
      {/* <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={Math.ceil(patientsData.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      /> */}
    </div>
  );
};

export default Patientcards;
