import React, { useEffect, useState } from "react";
import ShowSummaryBox from "./ShowSummaryBox";

function Favourite() {
  const [favouriteList, setFavouriteList] = useState([]);

  useEffect(() => {
    let showList = JSON.parse(localStorage.getItem("showList"));
    if (!showList) {
      showList = [];
    }
    setFavouriteList(showList);
  }, []);

  const markUnFavourite = (show) => {
    const showList = [...favouriteList];
    let index = showList.findIndex((element) => element.id === show.id);
    if (index >= 0) {
      showList.splice(index, 1);
    }
    localStorage.setItem("showList", JSON.stringify(showList));
    setFavouriteList(showList);
    console.log("showList ", showList);
  };

  return (
    <div className="row ml-5 mr-5">
      {favouriteList.length > 0 ? (
        <>
          {favouriteList.map((show, index) => {
            return (
              <div className="col-md-3 card p-0 border-0" key={show.id}>
                <div className="border m-2">
                  <ShowSummaryBox {...show} />
                  <div className="d-flex justify-content-center mb-2">
                    <button
                      className="btn btn-primary "
                      onClick={() => markUnFavourite(show)}
                    >
                      UnFavourite
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <div className="center">
          <div>No Favourite available</div>
        </div>
      )}
    </div>
  );
}

export default Favourite;
