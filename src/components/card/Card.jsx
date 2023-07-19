import { useEffect, useState } from "react";
import styles from "./Card.module.css";
const Card = () => {
  const [items, setItems] = useState([]);
  const [anIndex, setAnIndex] = useState(0);

  function showNextItem() {
    setAnIndex((prev) => prev + 1);
    console.log("next");
  }
  function showPrevItem() {
    setAnIndex((prev) => prev - 1);
    console.log("prev");
  }

  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((response) => response.json())
      .then((json) => Array(setItems(json)));
  }, []);

  console.log(items);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
		<div className={styles.itemContainer}>
              <h1>{items.title}</h1>
              <img
                className={styles.image}
                src={items.images[0]}
                alt={items.title}
              />
              <div className={styles.content}>
                <h3>Price: ${items.price}</h3>
                <h3>Description: {items.description}</h3>
              </div>
            </div>;
          <div className={styles.btnContainer}>
            {anIndex > 1 ? <button onClick={showPrevItem}>prev</button> : null}
            <p>{items[anIndex]}</p>
            {anIndex < items.length - 1 ? (
              <button onClick={showNextItem}>prev</button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
