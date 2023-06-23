import React from "react";

function Random() {
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
  return getRandom(1, 100);
}
function RandomNumber() {
  return (
    <div>
      <h1>숫자 랜덤 생성</h1>
      <p
        style={{
          width: "50px",
          textAlign: "center",
          fontSize: "20px",
          border: "2px solid blue",
        }}
      >
        <Random />
      </p>
    </div>
  );
}
export default RandomNumber;
