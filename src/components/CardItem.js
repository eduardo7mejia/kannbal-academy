import React from "react";
import { Link } from "react-router-dom";

function CardItem({ path, label, src, text, id }) {
  return (
    <>
      <div className="col-sm-12 col-lg-4 col-md-6 pt-2">
        <div className="profile-card-2">
          <img src={src} key={id} className="img img-responsive img-fluid" />
          <div className="profile-name">{text}</div>
          <div class="profile-username ">{label}</div>
        </div>
      </div>
    </>
  );
}

export default CardItem;
