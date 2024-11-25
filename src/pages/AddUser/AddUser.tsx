import React, { useRef, useState } from "react";

import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { chevronBackCircle, chevronForwardCircle } from "ionicons/icons";
import { useHistory } from "react-router";

import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import { InputNumber } from "primereact/inputnumber";

interface Gender {
  name: string;
  code: string;
}

interface MaritalStatus {
  name: string;
  code: string;
}

const AddUser: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [gender, setGender] = useState<Gender | null>(null);
  const [marital, setMaritalStatus] = useState<MaritalStatus | null>(null);
  const [date, setDate] = useState<Nullable<Date>>(null);

  const genderOpt: Gender[] = [
    { name: "Male", code: "M" },
    { name: "Female", code: "F" },
    { name: "Transgender", code: "T" },
  ];

  const maritalStatus: MaritalStatus[] = [
    { name: "Married", code: "M" },
    { name: "Unmarried", code: "UM" },
  ];

  const carouselRef = useRef<any>(null);
  const history = useHistory();

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.decrement();
    }
  };

  console.log("currentIndex", currentIndex);
  const goToNextSlide = () => {
    if (currentIndex === slides.length - 1) {
      history.push("/patient", {
        direction: "forward",
        animation: "slide",
      });
    } else if (carouselRef.current) {
      carouselRef.current.increment();
    }
  };

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  const slides = [0, 1];

  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar className="pt-1 pb-1" mode="ios">
          <IonButtons slot="start">
            <IonBackButton mode="md" defaultHref="/patient"></IonBackButton>
          </IonButtons>
          <IonTitle>
            {currentIndex === 0 ? "Personal" : "Communication"}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="addPatientForm">
        <Carousel
          autoPlay={false}
          infiniteLoop={false}
          showThumbs={false}
          showIndicators={false}
          showArrows={false}
          showStatus={false}
          stopOnHover={false}
          preventMovementUntilSwipeScrollTolerance
          swipeScrollTolerance={50}
          ref={carouselRef}
          onChange={handleSlideChange}
        >
          <div className="carouselDivForm">
            {/* FULL NAME */}
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <InputText placeholder="First Name" />
            </div>

            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <InputText placeholder="Last Name" />
            </div>

            {/* EMAIL */}
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-envelope"></i>
              </span>
              <InputText placeholder="Email" />
            </div>

            {/* PASSWORD */}
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-lock"></i>
              </span>
              <Password placeholder="Password" />
            </div>

            <div className="card flex flex-column md:flex-row gap-2 mb-2 w-full">
              <div className="p-inputgroup flex-1">
                <Dropdown
                  value={gender}
                  onChange={(e: DropdownChangeEvent) => setGender(e.value)}
                  options={genderOpt}
                  optionLabel="name"
                  placeholder="Select Gender"
                  className="w-full"
                  checkmark={true}
                  highlightOnSelect={false}
                />
              </div>

              <div className="p-inputgroup flex-1">
                <Calendar
                  value={date}
                  placeholder="Date of Birth"
                  className="w-full"
                  onChange={(e) => setDate(e.value)}
                  dateFormat="dd/mm/yy"
                />
              </div>

              <div className="p-inputgroup flex-1">
                <Dropdown
                  value={marital}
                  onChange={(e: DropdownChangeEvent) =>
                    setMaritalStatus(e.value)
                  }
                  options={maritalStatus}
                  optionLabel="name"
                  placeholder="Marital Status"
                  className="w-full"
                  checkmark={true}
                  highlightOnSelect={false}
                />
              </div>
            </div>

            {/* EDUCATIONAL QUALIFICATION */}
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-graduation-cap"></i>
              </span>
              <InputText placeholder="Enter Educational Qualification" />
            </div>
          </div>

          <div className="carouselDivForm">
            {/* ADDRESS */}
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-home"></i>
              </span>
              <InputText placeholder="Address" />
            </div>

            {/* DISTRICT */}
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-map"></i>
              </span>
              <InputText placeholder="District" />
            </div>

            {/* PINCODE */}
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-map-marker"></i>
              </span>
              <InputNumber placeholder="Pincode" />
            </div>

            {/* OCCUPATION */}
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-briefcase"></i>
              </span>
              <InputText placeholder="Occupation" />
            </div>

            {/* PHONE */}
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-phone"></i>
              </span>
              <InputText placeholder="Mobile" />
            </div>
          </div>
        </Carousel>
        <div className="carouselButtonsForm">
          <button
            className="carouselButtonForm"
            onClick={goToPreviousSlide}
            disabled={currentIndex === 0}
          >
            <IonIcon icon={chevronBackCircle}></IonIcon>
          </button>
          <div className="carouselIndicatorsForm">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`indicatorForm ${
                  currentIndex === index ? "active" : ""
                }`}
              ></span>
            ))}
          </div>
          <button className="carouselButtonForm" onClick={goToNextSlide}>
            <IonIcon icon={chevronForwardCircle}></IonIcon>
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AddUser;
