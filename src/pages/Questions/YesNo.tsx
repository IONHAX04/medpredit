import React, { useState } from "react";

interface YesNoProps {
  label: string;
  placeholders: string[];
}

const YesNo: React.FC<YesNoProps> = ({ label, placeholders }) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleButtonClick = (value: string) => {
    setSelectedValue(value);
    console.log("Selected value:", value); // Log the value to the console
  };

  return (
    <div>
      <div className="questions multiInput">
        <p className="question">{label}</p>
        <div className="buttonGroup">
          {placeholders.map((placeholder, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(placeholder)}
              className={`optionButton ${
                selectedValue === placeholder ? "selected" : ""
              }`}
            >
              {placeholder}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YesNo;
