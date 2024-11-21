import {
  IonContent,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import React, { useState } from "react";
import { Redirect, Route, useLocation } from "react-router";
import Tab1 from "../Tab1/Tab1";
import Tab2 from "../Tab2/Tab2";
import Tab3 from "../Tab3/Tab3";
import Tab4 from "../Tab4/Tab4";
import {
  bookOutline,
  bookSharp,
  homeOutline,
  homeSharp,
  personAddOutline,
  personAddSharp,
  settingsOutline,
  settingsSharp,
} from "ionicons/icons";
import Login from "../../components/01-Login/Login";
import Splashscreen from "../../components/00-Splashscreen/Splashscreen";
import Intro from "../../components/02-Intro/Intro";
import Enroll from "../../components/03-Enroll/Enroll";

const MainRoutes: React.FC = () => {
  const location = useLocation();
  const [selectedSegment, setSelectedSegment] = useState<string>("home");

  const handleSegmentChange = (value: string) => {
    setSelectedSegment(value);
  };

  const getCurrentIcon = (
    segment: string,
    outlineIcon: string,
    sharpIcon: string
  ) => (selectedSegment === segment ? sharpIcon : outlineIcon);

  return (
    <div>
      <IonRouterOutlet>
        <Route exact path="/">
          <Splashscreen />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/splash">
          <Splashscreen />
        </Route>
        <Route path="/intro">
          <Intro />
        </Route>
        <Route path="/enroll">
          <Enroll />
        </Route>
        <Route exact path="/">
          <Redirect to="/splash" />
        </Route>
      </IonRouterOutlet>

      {["/", "/splash", "/intro", "/login", "/enroll"].includes(
        location.pathname
      ) === false && (
        <IonContent>
          <IonSegment
            value={selectedSegment}
            onIonChange={(e) => handleSegmentChange(e.detail.value as string)}
          >
            <IonSegmentButton value="home">
              <IonIcon icon={getCurrentIcon("home", homeOutline, homeSharp)} />
              <IonLabel>Home</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="patient">
              <IonIcon
                icon={getCurrentIcon(
                  "patient",
                  personAddOutline,
                  personAddSharp
                )}
              />
              <IonLabel>Patient</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="advice">
              <IonIcon
                icon={getCurrentIcon("advice", bookOutline, bookSharp)}
              />
              <IonLabel>Advice</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="settings">
              <IonIcon
                icon={getCurrentIcon(
                  "settings",
                  settingsOutline,
                  settingsSharp
                )}
              />
              <IonLabel>Settings</IonLabel>
            </IonSegmentButton>
          </IonSegment>

          <div style={{ padding: "1rem" }}>
            {selectedSegment === "home" && <Tab1 />}
            {selectedSegment === "patient" && <Tab2 />}
            {selectedSegment === "advice" && <Tab3 />}
            {selectedSegment === "settings" && <Tab4 />}
          </div>
        </IonContent>
      )}
    </div>
  );
};

export default MainRoutes;
