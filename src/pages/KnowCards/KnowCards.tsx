import React from "react";

interface CardData {
  id: string;
  imageUrl: string;
  title: string;
}

interface KnowCardsValues {
  cardData: CardData[];
}

const KnowCards: React.FC<KnowCardsValues> = ({ cardData }) => {
  return (
    <div className="grid-container ion-padding">
      {cardData.map((card) => (
        <div className="grid-item" key={card.id}>
          <div className="knowCard">
            <img src={card.imageUrl} alt={card.title} />
            <p>{card.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KnowCards;
