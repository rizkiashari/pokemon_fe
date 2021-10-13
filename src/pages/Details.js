import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import "../style/Details.css";

import { decoration3 } from "../assets";
import { BsArrowLeft } from "react-icons/bs";
import { FaHeart, FaMars, FaMercury, FaRegHeart } from "react-icons/fa";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@reach/tabs";
const Details = ({ show, setShow, dataPokomen }) => {
  const { addPokemon, addMyPokemon } = useApp();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (addPokemon.findIndex((pokemon) => dataPokomen.id === pokemon.id) >= 0) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [dataPokomen]);

  return (
    <div>
      {dataPokomen && (
        <div
          className={`container pokemon-detail ${dataPokomen.color} ${
            show && "show"
          }`}>
          <img src={decoration3} alt='decoration' className='decoration-1' />
          <nav className='nav'>
            <div className='back-btn btn'>
              <BsArrowLeft onClick={() => setShow(false)} />
            </div>
            <div
              className='add-favorite btn'
              onClick={() => {
                addMyPokemon(dataPokomen);
                setIsFavorite(true);
              }}>
              {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </div>
          </nav>
          <div>
            <div className='heading'>
              <div>
                <h2 style={{ textTransform: "capitalize", marginBottom: 10 }}>
                  {dataPokomen.name}
                </h2>
                <div className='pokemon-types'>
                  {dataPokomen.types.map((type) => (
                    <div className='pokemon-type' key={type.type.name}>
                      {type.type.name}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p>#{dataPokomen.id.toString().padStart(3, "0")}</p>
              </div>
            </div>
            <div className='description'>
              <img
                className='desc-image'
                src={
                  dataPokomen.sprites.other["official-artwork"].front_default
                }
              />
              <Tabs>
                <TabList>
                  <Tab>About</Tab>
                  <Tab>Base Stats</Tab>
                  <Tab>Evolution</Tab>
                  <Tab>Moves</Tab>
                </TabList>
                <TabPanels>
                  {/* START: About */}
                  <TabPanel>
                    <div className='desc-row'>
                      <div className='desc-col-1'>Species</div>
                      <div className='desc-col-2'>Seed</div>
                    </div>
                    <div className='desc-row'>
                      <div className='desc-col-1'>Height</div>
                      <div className='desc-col-2'>{dataPokomen.height}cm</div>
                    </div>
                    <div className='desc-row'>
                      <div className='desc-col-1'>Weight</div>
                      <div className='desc-col-2'>{dataPokomen.weight}kg</div>
                    </div>
                    <div className='desc-row'>
                      <div className='desc-col-1'>Abilities</div>
                      <div className='desc-col-2'>
                        {dataPokomen.abilities.map((ability) => (
                          <span key={ability.ability.name}>
                            {ability.ability.name}
                            {", "}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3>Breeding</h3>
                    <div className='desc-row'>
                      <div className='desc-row'>
                        <div className='desc-col-1'>Gender</div>
                        <div className='desc-col-2'>
                          <div className='flex gap-1'>
                            <div>
                              <FaMars className='clr-blue' /> 50.6%
                            </div>
                            <div>
                              <FaMercury className='clr-red' /> 16.7%
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className='desc-row'>
                          <div className='desc-col-1'>Egg Groups</div>
                          <div className='desc-col-2'>Monster</div>
                        </div>
                        <div className='desc-row'>
                          <div className='desc-col-1'>Egg Cycle</div>
                          <div className='desc-col-2'>Grass</div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                  {/* END: About */}
                  {/* START: Base Stats */}
                  <TabPanel>
                    <div className='desc-row'>
                      <div className='desc-col-1'>HP</div>
                      <div className='desc-col-2 progress'>
                        <p>{dataPokomen.stats[0].base_stat}</p>
                        <div className='progress-bar'>
                          <span
                            style={{
                              display: "block",
                              width: `${dataPokomen.stats[0].base_stat}%`,
                              backgroundColor: "var(--green)",
                            }}></span>
                        </div>
                      </div>
                    </div>
                    <div className='desc-row'>
                      <div className='desc-col-1'>Attack</div>
                      <div className='desc-col-2 progress'>
                        <p>{dataPokomen.stats[1].base_stat}</p>
                        <div className='progress-bar'>
                          <span
                            style={{
                              display: "block",
                              width: `${dataPokomen.stats[1].base_stat}%`,
                              backgroundColor: "var(--red)",
                            }}></span>
                        </div>
                      </div>
                    </div>
                    <div className='desc-row'>
                      <div className='desc-col-1'>Defense</div>
                      <div className='desc-col-2 progress'>
                        <p>{dataPokomen.stats[2].base_stat}</p>
                        <div className='progress-bar'>
                          <span
                            style={{
                              display: "block",
                              width: `${dataPokomen.stats[2].base_stat}%`,
                              backgroundColor: "var(--green)",
                            }}></span>
                        </div>
                      </div>
                    </div>
                    <div className='desc-row'>
                      <div className='desc-col-1'>Sp. Atk</div>
                      <div className='desc-col-2 progress'>
                        <p>{dataPokomen.stats[3].base_stat}</p>
                        <div className='progress-bar'>
                          <span
                            style={{
                              display: "block",
                              width: `${dataPokomen.stats[3].base_stat}%`,
                              backgroundColor: "var(--red)",
                            }}></span>
                        </div>
                      </div>
                    </div>
                    <div className='desc-row'>
                      <div className='desc-col-1'>Sp. Def</div>
                      <div className='desc-col-2 progress'>
                        <p>{dataPokomen.stats[4].base_stat}</p>
                        <div className='progress-bar'>
                          <span
                            style={{
                              display: "block",
                              width: `${dataPokomen.stats[4].base_stat}%`,
                              backgroundColor: "var(--green)",
                            }}></span>
                        </div>
                      </div>
                    </div>
                    <div className='desc-row'>
                      <div className='desc-col-1'>Speed</div>
                      <div className='desc-col-2 progress'>
                        <p>{dataPokomen.stats[5].base_stat}</p>
                        <div className='progress-bar'>
                          <span
                            style={{
                              display: "block",
                              width: `${dataPokomen.stats[5].base_stat}%`,
                              backgroundColor: "var(--green)",
                            }}></span>
                        </div>
                      </div>
                    </div>
                    <div className='desc-row'>
                      <div className='desc-col-1'>Total</div>
                      <div className='desc-col-2 progress'>
                        <p>
                          {dataPokomen.stats[0].base_stat +
                            dataPokomen.stats[1].base_stat +
                            dataPokomen.stats[2].base_stat +
                            dataPokomen.stats[3].base_stat +
                            dataPokomen.stats[4].base_stat +
                            dataPokomen.stats[5].base_stat}
                        </p>
                        <div className='progress-bar'>
                          <span
                            style={{
                              display: "block",
                              width: `${
                                ((dataPokomen.stats[0].base_stat +
                                  dataPokomen.stats[1].base_stat +
                                  dataPokomen.stats[2].base_stat +
                                  dataPokomen.stats[3].base_stat +
                                  dataPokomen.stats[4].base_stat +
                                  dataPokomen.stats[5].base_stat) /
                                  500) *
                                100
                              }%`,
                              backgroundColor: "var(--green)",
                            }}></span>
                        </div>
                      </div>
                    </div>
                    <h3>Type defenses</h3>
                    <p className='clr-gray'>
                      The effectiveness of each type on Charmander.
                    </p>
                  </TabPanel>
                  {/* END: Base Stats */}
                  {/* START: Evolution */}
                  <TabPanel>
                    <p>{dataPokomen.name}yul</p>
                  </TabPanel>
                  {/* END: Evolution */}
                  {/* START: Moves */}
                  <TabPanel>
                    <p>Kiri Kanan</p>
                  </TabPanel>
                  {/* END: Moves */}
                </TabPanels>
              </Tabs>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
