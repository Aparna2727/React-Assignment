import React from "react";
import styles from "./card.module.css";

export function Cards({ cardImage, cardName, cardTitle, cardDescription }) {
  return (
    <div className={styles.cards}>
      <img src={cardImage} />
      <h4>{cardName}</h4>
      <p>{cardTitle}</p>
      <p className={styles.disP}>{cardDescription}</p>
    </div>
  );
}
