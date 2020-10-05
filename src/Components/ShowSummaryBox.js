import React from "react";

function ShowSummaryBox({ Name, Status, Rating, Image }) {
  return (
    <div>
      <img className="card-img-top" src={Image} alt="Movie" />
      <div className="card-body">
        <h5 className="card-title">{Name}</h5>
        <div className="card-text row">
          <div className="col-md-6 text-center">
            <div className="font-weight-bold">Status</div>
            <div>{Status}</div>
          </div>
          <div className="col-md-6 text-center">
            <div className="font-weight-bold">Rating</div>
            <div>{Rating}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowSummaryBox;
