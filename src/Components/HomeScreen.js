import React, { useEffect, useState } from "react";
import { BASE_URL } from "../Constants.json";
import Content from "./Content";

export default function HomeScreen() {
  const [dataList, setDataList] = useState([]);
  const [error, setError] = useState("");
  const [isSearching, setSearching] = useState(false);

  const getShows = async () => {
    setError("");
    setSearching(true);
    let url = `${BASE_URL}`;
    try {
      const res = await fetch(url);
      const response = await res.json();
      console.log(response);
      let showList = response.map((show) => {
        let extractShowDetails = {
          id: show.id,
          Title: show.name,
          Status: show.status,
          Rating: show.rating.average,
          Image: show.image.medium,
        };
        return extractShowDetails;
      });
      setDataList([...showList]);
      setSearching(false);
    } catch (err) {
      alert(JSON.stringify(err));
      setSearching(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getShows();
  }, []);

  const markFavourite = (show) => {
    let showList = JSON.parse(localStorage.getItem("showList"));
    if (showList) {
      let index = showList.findIndex((favShow) => favShow.id === show.id);
      if (index > -1) {
        return;
      }
      showList.push(show);
    } else {
      showList = [show];
    }
    localStorage.setItem("showList", JSON.stringify(showList));
  };
  return (
    <div>
      {isSearching ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <Content
          showList={dataList}
          error={error}
          markFavourite={markFavourite}
        />
      )}
    </div>
  );
}
