import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import MultiInputBox from "./MultiInputBox";
import Checkbox from "./Checkbox";
import YesNo from "./YesNo";
import axios from "axios";
import decrypt from "../../helper";
import SingleInputBox from "./SingleInputBox";

const Questions: React.FC = () => {
  // URL PARAMS
  const { categroyName, cardTitle } = useParams<{
    categroyName: string;
    cardTitle: string;
  }>();

  // INTERFACE FOR QUESTIONS
  const [questionData, setQuestionsData] = useState<
    {
      refOptionType: string;
      refQuestion: string;
      refQId: string;
      refQCategoryId: string;
      refOptions: string;
    }[]
  >([]);

  // INTERFACE FOR OPTIONS
  const [optionsData, setOptionsData] = useState<
    {
      backwardQId: string;
      forwardQId: string;
      refOptionId: number;
      refOptionLabel: string;
    }[]
  >([]);

  // INTERFACE FOR ANSWERS
  const [answersData, setAnswersData] = useState<
    {
      refQId: string;
      refAnswer: string;
      refAnswerId: any;
      refUserId: string;
    }[]
  >([]);

  const tokenString: any = localStorage.getItem("userDetails");
  const patientId: any = localStorage.getItem("currentPatientId");
  const tokenObject = JSON.parse(tokenString);
  const token = tokenObject.token;

  const getQuestions = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/getQuestions `,
        {
          questionId: cardTitle,
          patientId: patientId,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const data = decrypt(
          response.data[1],
          response.data[0],
          import.meta.env.VITE_ENCRYPTION_KEY
        );
        console.log("data line 56", data);
        if (data.status) {
          setQuestionsData(data.question);
          console.log("set qn data", questionData);
          setOptionsData(data.options);
          if (data.answers.length) {
            setAnswersData(data.answers);
          }
        }
      });
  };

  // GET NEXT QN FROM COMPONENT SUCCESS MESSAGE

  const getNextQuestions = (
    questionId: string,
    refOptionId: number,
    forwardQId: string
  ) => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/getNextQuestions`,
        {
          questionId: questionId,
          option: refOptionId,
          categoryId: cardTitle,
          forwardQId: forwardQId,
          patientId: patientId,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const data = decrypt(
          response.data[1],
          response.data[0],
          import.meta.env.VITE_ENCRYPTION_KEY
        );
        console.log("Data ---- line 77", data);
        if (data.status) {
          setQuestionsData(data.question);
          setOptionsData(data.options);
          setAnswersData(data.answers || []);
        }
      })
      .catch((error) => {
        console.error("Error fetching next questions:", error);
      });
  };

  useEffect(() => {
    if (token) {
      try {
        getQuestions();
      } catch (error) {
        console.log("Error da vedru");
      }
    }
  }, []);

  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar className="pt-1 pb-1" mode="ios">
          <IonButtons slot="start">
            <IonBackButton mode="md" defaultHref="/patient"></IonBackButton>
          </IonButtons>
          <IonTitle>{categroyName}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="questionContainers">
          {questionData.map((question, index) => {
            switch (question.refOptionType) {
              case "3":
                return (
                  <SingleInputBox
                    key={index}
                    type="text"
                    label={question}
                  />
                );

              case "2":
                return (
                  <MultiInputBox
                    key={index}
                    label={question.refQuestion}
                    // placeholders={question.placeholders || []}
                  />
                );

              case "checkbox":
                return <Checkbox key={index} label={question.refQuestion} />;

              case "1":
                return (
                  <YesNo
                    key={index}
                    label={question}
                    answersdata={answersData}
                    optionsData={optionsData}
                    onOptionSelect={(refOptionId, forwardQId) =>
                      getNextQuestions(question.refQId, refOptionId, forwardQId)
                    }
                  />
                );

              default:
                return null;
            }
          })}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Questions;
