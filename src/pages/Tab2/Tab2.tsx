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
import { useRef } from "react";
import { Divider } from "primereact/divider";
import Patientcards from "../PatientCards/Patientcards";
import { useHistory } from "react-router";

const patientsData = [
  {
    patientId: "NCD10001",
    name: "Patient Name 1",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 1",
    contactNumber: "9292929292",
    district: "District Name 1",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    patientId: "NCD10002",
    name: "Patient Name 2",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 2",
    contactNumber: "9292929292",
    district: "District Name 2",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    patientId: "NCD10003",
    name: "Patient Name 3",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 3",
    contactNumber: "9292929292",
    district: "District Name 3",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    patientId: "NCD10004",
    name: "Patient Name 4",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 4",
    contactNumber: "9292929292",
    district: "District Name 4",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    patientId: "NCD10005",
    name: "Patient Name 5",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 5",
    contactNumber: "9292929292",
    district: "District Name 5",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    patientId: "NCD10006",
    name: "Patient Name 6",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 6",
    contactNumber: "9292929292",
    district: "District Name 6",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    patientId: "NCD10007",
    name: "Patient Name 7",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 7",
    contactNumber: "9292929292",
    district: "District Name 7",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    patientId: "NCD10008",
    name: "Patient Name 8",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 8",
    contactNumber: "9292929292",
    district: "District Name 8",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    patientId: "NCD10009",
    name: "Patient Name 9",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 9",
    contactNumber: "9292929292",
    district: "District Name 9",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
  {
    patientId: "NCD100010",
    name: "Patient Name 10",
    lastVisit: "22/11/2024",
    doctorName: "Doctor Name 10",
    contactNumber: "9292929292",
    district: "District Name 10",
    imageUrl: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
  },
];

const Tab2: React.FC = () => {
  const history = useHistory();

  const sortModal = useRef<HTMLIonModalElement>(null);
  const filterModal = useRef<HTMLIonModalElement>(null);

  const contentRef = useRef<HTMLIonContentElement>(null);
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
