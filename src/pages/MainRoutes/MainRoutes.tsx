import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import React from "react";
import { Redirect, Route, useLocation, useHistory } from "react-router";
import Tab1 from "../Tab1/Tab1";
import Tab2 from "../Tab2/Tab2";
import Tab3 from "../Tab3/Tab3";
import Tab4 from "../Tab4/Tab4";
import {
  bookOutline,
  ellipse,
  homeOutline,
  personAddOutline,
  settingsOutline,
  square,
  triangle,
} from "ionicons/icons";
import Login from "../../components/01-Login/Login";
import Splashscreen from "../../components/00-Splashscreen/Splashscreen";
import Intro from "../../components/02-Intro/Intro";
import Enroll from "../../components/03-Enroll/Enroll";

const MainRoutes: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const showTabBar = ["/tab1", "/tab2", "/tab3", "/tab4"].includes(
    location.pathname
  );
  return (
    <div>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/">
            <Splashscreen />
          </Route>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route path="/tab4">
            <Tab4 />
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
        {showTabBar && (
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon aria-hidden="true" icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon aria-hidden="true" icon={personAddOutline} />
              <IonLabel>Patient</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon aria-hidden="true" icon={bookOutline} />
              <IonLabel>Advice</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab4" href="/tab4">
              <IonIcon aria-hidden="true" icon={settingsOutline} />
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        )}
      </IonTabs>
    </div>
  );
};

export default MainRoutes;
