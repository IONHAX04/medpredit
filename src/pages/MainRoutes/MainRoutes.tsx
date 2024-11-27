import {
  IonContent,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabs,
  IonTabButton,
  IonTabBar,
} from "@ionic/react";
import React, { useState } from "react";
import { Redirect, Route, useHistory, useLocation } from "react-router";
import Tab1 from "../Tab1/Tab1";
import Tab2 from "../Tab2/Tab2";
import Tab3 from "../Tab3/Tab3";
import Tab4 from "../Tab4/Tab4";
import {
  bookOutline,
  bookSharp,
  cogOutline,
  cogSharp,
  homeOutline,
  homeSharp,
  personAddOutline,
  personAddSharp,
  personOutline,
  personSharp,
  settingsOutline,
  settingsSharp,
} from "ionicons/icons";
import Login from "../../components/01-Login/Login";
import Splashscreen from "../../components/00-Splashscreen/Splashscreen";
import Intro from "../../components/02-Intro/Intro";
import Enroll from "../../components/03-Enroll/Enroll";
import AddUser from "../AddUser/AddUser";
import KnowAboutPatient from "../../components/22-KnowAboutPatient/KnowAboutPatient";
import Questions from "../Questions/Questions";
import Tab5 from "../Tab5/Tab5";
import AddQuestions from "../../components/33-AddQuestions/AddQuestions";
import AddEmployee from "../../components/34-AddEmployee/AddEmployee";
import SubCategories from "../SubCategories/SubCategories";

const MainRoutes: React.FC = () => {
  const location = useLocation();

  const showTabBar = [
    "/home",
    "/patient",
    "/advice",
    "/settings",
    "/configure",
  ].includes(location.pathname);

  return (
    <IonTabs>
      <IonRouterOutlet id="main">
        <Route exact path="/">
          <Splashscreen />
        </Route>
        <Route path="/home">
          <Tab1 />
        </Route>
        <Route path="/patient">
          <Tab2 />
        </Route>
        <Route path="/advice">
          <Tab3 />
        </Route>
        <Route path="/settings">
          <Tab4 />
        </Route>
        <Route path="/configure">
          <Tab5 />
        </Route>
        <Route path="/addUser">
          <AddUser />
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
        <Route path="/subCategories/:categoryId/:categroyName">
          <SubCategories />
        </Route>
        <Route path="/knowAbout/:patient/:patientId">
          <KnowAboutPatient />
        </Route>
        <Route path="/questions/:refCategoryLabel/:cardTitle">
          <Questions />
        </Route>
        <Route path="/addQuestions">
          <AddQuestions />
        </Route>
        <Route path="/addEmployee">
          <AddEmployee />
        </Route>
        <Route exact path="/">
          <Redirect to="/splash" />
        </Route>
      </IonRouterOutlet>

      {showTabBar && (
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon
              icon={location.pathname === "/home" ? homeSharp : homeOutline}
            />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="patient" href="/patient">
            <IonIcon
              icon={
                location.pathname === "/patient"
                  ? personAddSharp
                  : personAddOutline
              }
            />
            <IonLabel>Patient</IonLabel>
          </IonTabButton>
          <IonTabButton tab="configure" href="/configure">
            <IonIcon
              icon={location.pathname === "/configure" ? cogSharp : cogOutline}
            />
            <IonLabel>Configure</IonLabel>
          </IonTabButton>
          <IonTabButton tab="advice" href="/advice">
            <IonIcon
              icon={location.pathname === "/advice" ? bookSharp : bookOutline}
            />
            <IonLabel>Advice</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settings" href="/settings">
            <IonIcon
              icon={
                location.pathname === "/settings" ? personSharp : personOutline
              }
            />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      )}
    </IonTabs>
  );
};

export default MainRoutes;
