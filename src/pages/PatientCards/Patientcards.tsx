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
  refAddress: string;
  imageUrl: string;
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
  const itemsPerPage = 8;

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
    onPaginationChange();
  };

  const handleCardClick = (patient: string) => {
    history.push(`/knowAbout/${patient}`);
  };

  console.log("Patient card data ---- \n", patientsData);

  const displayedPatients = patientsData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="patientCardsParent">
      {displayedPatients.map((patient, index) => (
        <div key={index}>
          <div
            className="patientCard"
            onClick={() => handleCardClick(patient.refUserCustId)}
          >
            {" "}
            <img
              src={patient.imageUrl}
              alt={`Patient ${patient.refUserFname}`}
            />
            <div className="cardContents">
              <div className="patiendDetails">
                <p className="patientName">{patient.refUserCustId}</p>
                <p className="DoctorName">Dr. {patient.DoctorName}</p>
              </div>
              <p className="patientName">
                {patient.refUserFname} {patient.refUserLname}
              </p>
              <p className="lastVisit">
                <span>Last Visit : </span>
                {patient.lastVisit}
              </p>
              <p className="DoctorName">
                <span>Doctor Name : </span> {patient.DoctorName}
              </p>
              <div className="footer">
                <p className="refUserMobileno">
                  <span>Mobile : </span> {patient.refUserMobileno}
                </p>
                <p className="refAddress">{patient.refAddress}</p>
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
