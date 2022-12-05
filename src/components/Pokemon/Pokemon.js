import { useEffect, useState } from "react";
import styles from "./Pokemon.module.css";
const colorStyle = {
  normal: "#808080",
};

export function Pokemon(props) {
  const [pokemon, setPokemon] = useState();
  async function getPokemon() {
    const pokemon = await fetch(props.url);
    const response = await pokemon.json();
    setPokemon(response);
  }
  useEffect(() => {
    getPokemon();
  }, [props.url]);
  return (
    <div className={styles.card}>
      <h2 className={styles["pokemon__name"]}>{pokemon?.name}</h2>
      <div className={styles["pokemon__types"]}>
        {!pokemon?.types
          ? "a"
          : pokemon?.types.map((tab) => {
              return (
                <p
                  className={`${styles["pokemon__type"]}  ${styles[tab.type.name]}`}
                >
                  {tab.type.name}
                </p>
              );
            })}
      </div>
      <img
        className={styles["pokemon__img"]}
        src={pokemon?.sprites.front_default}
        alt={pokemon?.name}
      />
    </div>
  );
}
