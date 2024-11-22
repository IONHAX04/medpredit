import { IonPage } from "@ionic/react";
import { Divider } from "primereact/divider";
import React, { useState } from "react";

import ReactPaginate from "react-paginate";
import { useHistory } from "react-router";

interface Patient {
  patientId: string;
  name: string;
  lastVisit: string;
  doctorName: string;
  contactNumber: string;
  district: string;
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
            onClick={() => handleCardClick(patient.patientId)}
          >
            {" "}
            <img src={patient.imageUrl} alt={`Patient ${patient.name}`} />
            <div className="cardContents">
              <div className="patiendDetails">
                <p className="patientName">{patient.patientId}</p>
                <p className="doctorName">Dr. {patient.doctorName}</p>
              </div>
              <p className="patientName">{patient.name}</p>
              <p className="lastVisit">
                <span>Last Visit : </span>
                {patient.lastVisit}
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
