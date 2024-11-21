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

const Tab2: React.FC = () => {
  const sortModal = useRef<HTMLIonModalElement>(null);
  const filterModal = useRef<HTMLIonModalElement>(null);

  const contentRef = useRef<HTMLIonContentElement>(null); // Reference for IonContent
  const handlePaginationChange = () => {
    if (contentRef.current) {
      contentRef.current.scrollToTop(300);
    }
  };
  return (
    <IonPage>
      <IonContent fullscreen ref={contentRef}>
        <IonToolbar className="ion-padding-top">
          <IonSearchbar placeholder="Search Patient"></IonSearchbar>{" "}
          <IonButtons slot="end">
            <IonIcon className="addIcon" icon={addCircleOutline}></IonIcon>
          </IonButtons>
        </IonToolbar>

        <div className="filters">
          <p className="filter" id="open-sort-by">
            Sort by <IonIcon icon={chevronDownOutline}></IonIcon>
          </p>
          <p className="filter" id="open-filter">
            Filter <IonIcon icon={chevronDownOutline}></IonIcon>
          </p>
        </div>

        <div className="patientContents">
          <Patientcards onPaginationChange={handlePaginationChange} />
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
