import { Divider } from "primereact/divider";
import React from "react";
import { useHistory } from "react-router";

interface CardData {
  refQCategoryId: number;
  refCategoryLabel: string;
  completionPercentage?: number;
  filledBy?: string;
  filledDate?: string;
}

interface SubCardsProps {
  data: CardData[];
  categoryId: string;
  categroyName: string;
}

const SubCards: React.FC<SubCardsProps> = ({
  data,
  categoryId,
  categroyName,
}) => {
  const history = useHistory();

  const handleCardClick = (cardTitle: any) => {
    history.push(`/questions/${categroyName}/${cardTitle}`);
  };

  return (
    <div className="subCardContents ion-padding-top">
      {data.map((card) => (
        <>
          <div
            key={card.refQCategoryId}
            className="subCards"
            onClick={() => handleCardClick(card.refQCategoryId)}
            style={{ cursor: "pointer" }}
          >
            <img
              src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
              alt="Card Thumbnail"
            />
            <div className="cardConts">
              <div className="cardHeader">
                <p className="factorHeading">{card.refCategoryLabel}</p>
                <div className="circularProgress">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 36 36"
                    className="circularChart"
                  >
                    <path
                      className="circleBackground"
                      d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray={`${card.completionPercentage}, 100`}
                      d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                </div>
              </div>
              <div className="cardSecHeader">
                <p>
                  Form Filled by: <span>{card.filledBy}</span>
                </p>
              </div>
              <div className="cardSecHeader">
                <p>Form Filled Date: {card.filledDate}</p>
              </div>
            </div>
          </div>
          <Divider />
        </>
      ))}
    </div>
  );
};

export default SubCards;
