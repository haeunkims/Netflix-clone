import React, { useState, useEffect } from "react";
import axios from "./axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // a snippet of code which runs based on specific conditions
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      return request;
    }
    fetchData();
    // if [], run once when the row loads, and don't run again, load page.
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      {/* component --> posters */}
    </div>
  );
}

export default Row;
