import React from "react";
import { Link } from "react-router-dom";

const CardData = ({ item }) => {
  const { _id, service_id, title, img, price } = item;
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <figure className="p-5 ">
          <img
          className="rounded-md"
            src={img}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardData;
