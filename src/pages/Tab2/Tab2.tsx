import {
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";
import { addCircleOutline, chevronDownOutline } from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import { Divider } from "primereact/divider";
import Patientcards from "../PatientCards/Patientcards";
import { useHistory } from "react-router";
import axios from "axios";
import decrypt from "../../helper";

// const patientsData = [
//   {
//     patientId: "NCD10001",
//     name: "Patient Name 1",
//     lastVisit: "22/11/2024",
//     doctorName: "Doctor Name 1",
//     contactNumber: "9292929292",
//     district: "District Name 1",
//     imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
//   },
//   {
//     patientId: "NCD10002",
//     name: "Patient Name 2",
//     lastVisit: "22/11/2024",
//     doctorName: "Doctor Name 2",
//     contactNumber: "9292929292",
//     district: "District Name 2",
//     imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
//   },
// ];

const Tab2: React.FC = () => {
  const history = useHistory();

  const sortModal = useRef<HTMLIonModalElement>(null);
  const filterModal = useRef<HTMLIonModalElement>(null);

  const contentRef = useRef<HTMLIonContentElement>(null);

  const [patientsData, setPatientData] = useState([]);

  const handlePaginationChange = () => {
    if (contentRef.current) {
      contentRef.current.scrollToTop(300);
    }
  };

  const handleAddUser = () => {
    history.push("/addUser", {
      direction: "forward",
      animation: "slide",
    });
  };

  useEffect(() => {
    const tokenString = localStorage.getItem("userDetails");
    if (tokenString) {
      try {
        const tokenObject = JSON.parse(tokenString);
        const token = tokenObject.token;

        axios
          .get(`${import.meta.env.VITE_API_URL}/getPatientData`, {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            console.log("Response:", response.data);
            const data = decrypt(
              response.data[1],
              response.data[0],
              import.meta.env.VITE_ENCRYPTION_KEY
            );
            console.log("data", data);
            if (data.status) {
              setPatientData(data.data);
              console.log("Patient data", patientsData);
            } else {
              console.log("Data consoled false - chekc this");
            }
          })
          .catch((error) => {
            console.error("Error fetching patient data:", error);
          });
      } catch (error) {
        console.error("Error parsing token:", error);
      }
    } else {
      console.error("No token found in localStorage.");
    }
  }, []);

  return (
    <IonPage>
      <IonToolbar className="ion-padding-top">
        <IonSearchbar placeholder="Search Patient"></IonSearchbar>{" "}
        <IonButtons slot="end">
          <IonIcon
            onClick={handleAddUser}
            className="addIcon"
            icon={addCircleOutline}
          ></IonIcon>
        </IonButtons>
      </IonToolbar>
      <IonContent fullscreen ref={contentRef}>
        <div className="filters">
          <p className="filter" id="open-sort-by">
            Sort by <IonIcon icon={chevronDownOutline}></IonIcon>
          </p>
          <p className="filter" id="open-filter">
            Filter <IonIcon icon={chevronDownOutline}></IonIcon>
          </p>
        </div>

        <div className="patientContents">
          <Patientcards
            patientsData={patientsData}
            onPaginationChange={handlePaginationChange}
          />
        </div>

        <IonModal
          ref={sortModal}
          trigger="open-sort-by"
          mode="ios"
          className="open-modal-filters"
          initialBreakpoint={1}
          breakpoints={[0, 1]}
        >
          <div className="block">
            <div className="sortOptions">
              <p className="optHeading">Sort by</p>
              <Divider />
              <div className="options ion-padding-bottom">
                <p>Date - Ascending</p>
                <IonCheckbox></IonCheckbox>
              </div>
              <div className="options ion-padding-bottom">
                <p>Date - Descending</p>
                <IonCheckbox></IonCheckbox>
              </div>
              <div className="options ion-padding-bottom">
                <p>Name - Ascending</p>
                <IonCheckbox></IonCheckbox>
              </div>
              <div className="options ion-padding-bottom">
                <p>Name - Descending</p>
                <IonCheckbox></IonCheckbox>
              </div>
            </div>
          </div>
        </IonModal>
        <IonModal
          ref={filterModal}
          trigger="open-filter"
          mode="ios"
          initialBreakpoint={1}
          className="open-modal-filters"
          breakpoints={[0, 1]}
        >
          <div className="block">Filter Options</div>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
