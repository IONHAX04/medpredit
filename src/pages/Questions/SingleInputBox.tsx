import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

interface SingleInputBoxProps {
  refQuestion: string;
  type: string;
  placeholder?: string;
}

const SingleInputBox: React.FC<SingleInputBoxProps> = ({
  refQuestion,
  placeholder,
  type,
}) => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="questionsOutline">
      {/* <p className="questionNumber">1</p> */}
      <div className="questions inputText ">
        <p className="question">{refQuestion}</p>
        <InputText
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
        <Divider />
      </div>
    </div>
  );
};

export default SingleInputBox;
