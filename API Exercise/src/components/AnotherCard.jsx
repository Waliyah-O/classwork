import { useEffect, useState } from "react";
import styles from "./card/Card.module.css";


const AnotherCard = () => {
  const [items, setItems] = useState([]);
  const [anIndex, setIndex] = useState(1);
  const [word, setWord] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${anIndex}`);
      const json = await response.json();
      //   console.log(json);
      setItems(json);
    } catch (error) {
      console.error("error", error);
      setItems([]);
    }
  };
  const prevItem = () => {
    setIndex((prev) => prev - 1);
    fetchData();
  };
  const nextItem = () => {
    setIndex((prev) => prev + 1);
    fetchData();
  };

  const searchItem = (e) => {
    setIndex(e.target.value);
    fetchData();
  };

  const getRandomIndex = () => {
    setIndex(Math.floor(Math.random() * Object.keys(items).length));
    fetchData();
  };

  const guessItem = (e) => {
    setWord(e.target.value);
    console.log(word);
    if (word === items.title) {
      alert("you win!");
    } else {
      alert("you lose!");
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {Object.keys(items).length > 0 ? (
            <div className={styles.itemContainer}>
              <h1>{items.title}</h1>
              <img
                className={styles.image}
                src={items.images[0]}
                alt={items.title}
              />
              <h4>{items.id}</h4>
              <div className={styles.content}>
                <h3>Price: ${items.price}</h3>
                <h3>Description: {items.description}</h3>
              </div>
            </div>
          ) : (
            <div>
              <h1>nothing to see here</h1>
            </div>
          )}
          <div className={styles.btnContainer}>
            <button className={styles.button} onClick={prevItem}>
              prev
            </button>
            <button className={styles.button} onClick={nextItem}>
              next
            </button>
          </div>
          <div className={styles.middle}>
            {" "}
            <button onClick={getRandomIndex}>random</button>
            <input onInput={(e) => setIndex(e.target.value)} type="text" />
            <button onClick={searchItem}>search index</button>
            <input type="text" onInput={(e) => setWord(e.target.value)} />
            <button onClick={guessItem}>guess</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnotherCard;
