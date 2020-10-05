import React from "react";
import ShowSummaryBox from "./ShowSummaryBox";

function Content({ showList, error, markFavourite }) {
  console.log("showList ", showList);
  if (error) {
    return (
      <div className="100vh d-flex justify-content-center align-self-center">
        {error}
      </div>
    );
  }
  return (
    <div className="row ml-5 mr-5">
      {showList.map((show, index) => {
        return (
          <div className="col-md-3 card p-0 border-0" key={show.id}>
            <div className="border m-2">
              <ShowSummaryBox {...show} />
              <div className="d-flex justify-content-center mb-2">
                <button
                  className="btn btn-primary "
                  onClick={() => markFavourite(show)}
                >
                  Add To Favourite
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Content;
