import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useApp } from "../context/AppContext";
import "./style/Details.css";

const Details = ({ show, setShow, dataPokomen }) => {
  const { addPokemon, addMyPokemon } = useApp();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (addPokemon.findIndex((p) => p.id === dataPokomen.id) >= 0) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [dataPokomen]);

  console.log(dataPokomen);

  return (
    <>
      {dataPokomen && (
        <>
          <div
            className={`container pokemon-detail ${dataPokomen.color} ${
              show && "show"
            }`}>
            <Navbar
              type='detail'
              isFavorite={isFavorite}
              show={() => setShow(false)}
            />
          </div>
          <>
            <div className='heading'>
              <div>
                <h1 style={{ zIndex: 100 }}>{dataPokomen.name}</h1>
                <div className='pokemon-types'>
                  {dataPokomen.types.map((type, index) => (
                    <div className='pokemon-type' key={index}>
                      {type.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        </>
      )}
    </>
  );
};

export default Details;
