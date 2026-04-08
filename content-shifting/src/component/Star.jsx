import { useState } from "react";
import { FaStar } from "react-icons/fa";

function Rating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      {Array(5)
        .fill()
        .map((_, index) => {
          const starValue = index + 1;

          return (
            <FaStar
              key={index}
              size={30}
              style={{ cursor: "pointer" }}
              color={starValue <= (hover || rating) ? "gold" : "lightgray"}
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
            />
          );
        })}
    </div>
  );
}

export default Rating;
