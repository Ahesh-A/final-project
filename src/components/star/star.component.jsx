import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { Fragment } from "react";
import './star.styles.scss';
const Star = ({ star }) => {
  return (
    <Fragment>
      {Array.from({ length: 5 }, (v, i) => {
        let n = i + 0.5;
        return (
          <span key = {i} className = "star--container">
            {star >= i + 1 ? (
              <FaStar />
            ) : star >= n ? (
              <FaStarHalfAlt />
            ) : (
              <AiOutlineStar />
            )}
          </span>
        );
      })}
    </Fragment>
  );
};

export default Star;
