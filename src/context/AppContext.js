import { createContext, useState, useContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [addPokemon, setAddPokemen] = useState([]);

  const addMyPokemon = (pokemon) => {
    setAddPokemen((myPoke) => {
      if (myPoke.findIndex((p) => pokemon.id === p.id) >= 0) {
        return myPoke;
      }
      myPoke.push(pokemon);

      return myPoke;
    });
  };

  return (
    <AppContext.Provider value={{ addPokemon, addMyPokemon }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("Use Context Tidak bisa digunakan");
  }
  return context;
};
