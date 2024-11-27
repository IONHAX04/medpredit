import {
  IonBackButton,
  IonButtons,
  IonContent,
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
  const { refCategoryLabel, cardTitle } = useParams<{
    refCategoryLabel: string;
    cardTitle: string;
  }>();

  // INTERFACE FOR QUESTIONS
  const [questionData, setQuestionsData] = useState<
    {
      questionType: string;
      questionText: string;
      questionId: any;
      options: [
        {
          backwardQId: string;
          forwardQId: string;
          refOptionId: number;
          refOptionLabel: string;
        }
      ];
    }[]
  >([]);

  const [enabledIndex, setEnabledIndex] = useState<number>(0);

  const [responses, setResponses] = useState<
    { questionId: any; answer: string | number }[]
  >([]);

  const tokenString: any = localStorage.getItem("userDetails");
  const patientId: any = localStorage.getItem("currentPatientId");
  const tokenObject = JSON.parse(tokenString);
  const token = tokenObject.token;

  const getQuestions = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/getQuestions`,
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
        if (data.status) {
          setQuestionsData(data.questions);
          console.log("data.questions", data.questions);
          setEnabledIndex(0);
        }
      });
  };

  const getNextQuestions = (
    questionId: any,
    answer: string | number,
    forwardQId: string
  ) => {
    console.log("Answer submitted for questionId:", questionId, answer);

    // Add response to the state
    setResponses((prevResponses) => {
      const updatedResponses = [...prevResponses, { questionId, answer }];

      if (enabledIndex === questionData.length - 1) {
        console.log("All responses:", updatedResponses);

        axios.post(
          `${import.meta.env.VITE_API_URL}/postAnswers`,
          {
            patientId: patientId,
            categoryId: cardTitle,
            answers: responses,
          },
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );
      }

      return updatedResponses;
    });

    if (enabledIndex < questionData.length - 1) {
      setEnabledIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    if (token) {
      try {
        getQuestions();
      } catch (error) {
        console.log("Error fetching questions");
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
          <IonTitle>{refCategoryLabel}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="questionContainers">
          {questionData.slice(0, enabledIndex + 1).map((question, index) => (
            <div key={index}>
              {question.questionType === "3" && (
                <SingleInputBox
                  type="text"
                  label={question}
                  onClickOpt={(value, questionId, forwardQId) => {
                    if (index === enabledIndex) {
                      getNextQuestions(questionId, parseInt(value), forwardQId);
                    }
                  }}
                />
              )}
              {question.questionType === "1" && (
                <YesNo
                  label={question}
                  onOptionSelect={(refOptionId, forwardQId) => {
                    if (index === enabledIndex) {
                      getNextQuestions(
                        question.questionId,
                        refOptionId,
                        forwardQId
                      );
                    }
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Questions;
