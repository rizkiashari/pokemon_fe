// Icon React
import { BiSliderAlt } from "react-icons/bi";
import { BsArrowLeft, BsFillGridFill } from "react-icons/bs";
import { FaHeart, FaList, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
// Image
import { decoration, decoration3 } from "../assets";
const Navbar = ({ type, isFavorite, show, toMyList }) => {
  return (
    <div>
      {type === "list" && (
        <>
          <img src={decoration} alt='decoration' className='decoration-bulat' />
          <div className='decoration-slide'>
            <BiSliderAlt />
          </div>
          <nav className='nav'>
            <button className='btn back-btn'>
              <BsArrowLeft />
            </button>
            <Link to='/pokemon/my-pokemon'>
              <div className='btn'>
                <FaList color='#000' />
              </div>
            </Link>
          </nav>
        </>
      )}
      {type === "detail" && (
        <div>
          <img
            src={decoration3}
            alt='decoration'
            className={type === "details" ? "decoration-1" : "decoration-bulat"}
          />
          <div className={(type === "details") === "decoration-1"}></div>
          <nav className='nav'>
            <button className='btn back-btn'>
              <BsArrowLeft color='#fff' onClick={show} />
            </button>
            <div className='btn'>
              {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
