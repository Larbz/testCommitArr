import { useEffect, useState } from "react";
import { Pokemon } from "../Pokemon/Pokemon";
import styles from "./ListPokemons.module.css";
import spin from "./../../assets/spin.gif"
export function ListPokemons() {
  const [todos, setTodos] = useState();
  const [start, setStart] = useState(0);
  const [arrPokemon, setArrPokemon] = useState();
  // const [isLoading, setIsLoading] = useState (false)
  const pokemons = async () => {
    // console.log(isLoading);
    // setIsLoading(true);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${start}&limit=15`
    );
    const responseJson = await response.json();
    const myResults = await responseJson["results"];

    setTodos(myResults);

    // getAll();
    
  };
  // const delay = ms => new Promise(
  //   resolve => setTimeout(resolve, ms)
  // );
  // const getAll = async () => {

    
  //   const arr=await Promise.all(
      
  //     todos.map(async (tab) => {
  //       const response = await fetch(`${tab.url}`);
  //       const responseJson = await response.json();
  //       // arr.push(responseJson)
  //       // setArrPokemon(arrPokemon+responseJson);
  //       // console.log(tab.url)
  //       // return await myResults;
  //       // return responseJson;
  //       return {
  //         name:responseJson.name,
  //         sprite:responseJson.sprites['front_default']
  //       }
  //     }));
      
  //   // console.log(arr)
  //   setArrPokemon(arr);
  //   await delay(800);
  //   setIsLoading(false);
    
  // };
  // function changeLoad(){
  //   setIsLoading(!isLoading);
  // }

  useEffect(() => {
    // changeLoad();
    pokemons();
    
  }, [start]);
  function nextPage() {
    setStart(start + 15);
  }
  function prevPage() {
    if (start >= 9) {
      setStart(start - 15);
    }
  }
  return (
   

    <div className={styles.content}>
      
      {/* {!isLoading? */}
      <div className={styles["list-pokemons"]}>
          
          {!todos
            ? "a"
            : todos.map((tab) => {
              return <Pokemon url={tab.url}></Pokemon>;
            })}
            {/* {!arrPokemon?'asd':arrPokemon.map((tab)=>{
              return (
              <div>

              <p>{tab.name}</p>
              <img src={tab.sprite} alt={tab.name}/>
              </div>
              )
            })} */}
          
      {/* </div>:<img className={styles.spin} src={spin}/>
      } */}
        <div className={styles.pagination}>
          <div className={styles.count}>{start}</div>
          <button className={styles.button} onClick={() => prevPage()}>
            BACK
          </button>
          <button className={styles.button} onClick={() => nextPage()}>
            NEXT
          </button>
        
        </div>
    </div>
    </div>
    
  );
}
