import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

interface SingleInputBoxProps {
  label: string;
  placeholder: string;
}

const SingleInputBox: React.FC<SingleInputBoxProps> = ({
  label,
  placeholder,
}) => {
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <div className="questions inputText">
        <p className="question">{label}</p>
        <InputText
          value={value}
          placeholder={placeholder}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
      </div>
    </div>
  );
};

export default SingleInputBox;
