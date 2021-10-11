import "../pages/style/Card.css";

const Card = ({ color, types, sprites, name, id }) => {
  return (
    <div>
      <div className={`pokemon-item ${color}`}>
        <h3>{name}</h3>
        <div className='pokemon-types'>
          {types.map((type, index) => (
            <div className='pokemon-type' key={index}>
              {type.type.name}
            </div>
          ))}
        </div>
        <img src={sprites.other["official-artwork"].front_default} />
      </div>
    </div>
  );
};

export default Card;
