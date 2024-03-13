import React from "react";
import data from "./hotstar-slider.json";

function Home() {
  return (
    <>
      {data.items.map((item) => (
        <div>{item.title}</div>
      ))}
    </>
  );
}

export default Home;
