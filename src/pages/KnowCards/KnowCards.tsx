import React from "react";
import { useHistory } from "react-router-dom";

interface CardData {
  id: string;
  imageUrl: string;
  title: string;
}

interface KnowCardsValues {
  cardData: CardData[];
}

const KnowCards: React.FC<KnowCardsValues> = ({ cardData }) => {
  const history = useHistory();

  const handleCardClick = (categoryId: string) => {
    console.log("card ---", categoryId);
    history.push(`/subCategories/${categoryId}`);
  };

  return (
    <>
      <div className="listView"></div>
      <div className="grid-container ion-padding">
        {cardData.map((card) => (
          <div
            className="grid-item"
            key={card.id}
            onClick={() => handleCardClick(card.title)}
          >
            <div className="knowCard">
              <img src={card.imageUrl} alt={card.title} />
              <p>{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default KnowCards;
