import axios from "axios";
import { Divider } from "primereact/divider";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import decrypt from "../../helper";

interface YesNoProps {
  label: {
    refOptionType: string;
    refQuestion: string;
    refQId: string;
    refQCategoryId: string;
    refOptions: string;
  };
  answersdata?: {
    refQId: string;
    refAnswer: string;
    refAnswerId: any;
    refUserId: string;
  }[];
  optionsData?: {
    backwardQId: string;
    forwardQId: string;
    refOptionId: number;
    refOptionLabel: string;
  }[];
  onOptionSelect: (refOptionId: number, forwardQId: string) => void;
}

const YesNo: React.FC<YesNoProps> = ({
  label,
  answersdata,
  optionsData,
  onOptionSelect,
}) => {
  console.log("answersdata", answersdata);
  const { categroyName, cardTitle } = useParams<{
    categroyName: string;
    cardTitle: string;
  }>();

  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  useEffect(() => {
    if (answersdata) {
      answersdata.forEach((answer) => {
        const numericAnswer = parseInt(answer.refAnswer, 10);
        setSelectedValue(numericAnswer);
      });
    }
  }, [answersdata]);

  const handleButtonClick = (refOptionId: any, refNextQn: any) => {
    setSelectedValue(refOptionId);
    console.log("Selected value:", refOptionId);
    onOptionSelect(refOptionId, refNextQn);

    // if (patientId && refOptionId) {
    //   try {
    //     axios
    //       .post(
    //         `${import.meta.env.VITE_API_URL}/getNextQuestions`,
    //         {
    //           questionId: label.refQId,
    //           option: refOptionId,
    //           categoryId: cardTitle,
    //           forwardQId: refNextQn,
    //           patientId: patientId,
    //         },
    //         {
    //           headers: {
    //             Authorization: token,
    //             "Content-Type": "application/json",
    //           },
    //         }
    //       )
    //       .then((response) => {
    //         const data = decrypt(
    //           response.data[1],
    //           response.data[0],
    //           import.meta.env.VITE_ENCRYPTION_KEY
    //         );

    //         console.log("Data ---- line 77", data);
    //       });
    //   } catch (error) {
    //     console.log("Error da maganeeh!! ");
    //   }
    // }
  };

  return (
    <div>
      <div className="questions multiInput">
        <p className="question">{label.refQuestion}</p>
        <div className="buttonGroup">
          {optionsData?.map((option) => (
            <button
              key={option.refOptionId}
              onClick={() =>
                handleButtonClick(option.refOptionId, option.forwardQId)
              }
              className={`optionButton ${
                selectedValue === option.refOptionId ? "selected" : ""
              }`}
            >
              {option.refOptionLabel}
            </button>
          ))}
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default YesNo;
