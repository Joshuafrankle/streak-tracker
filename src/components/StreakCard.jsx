import { useState } from "react";
import Button from "@mui/material/Button";

export default function StreakCard({ key, name }) {
  const [num, setNum] = useState(0);

  function handleIncrement() {
    setNum((prevNum) => prevNum + 1);
  }
  function handleDecrement() {
    setNum((prevNum) => prevNum - 1);
  }
  function handleReset() {
    setNum(0);
  }
  return (
    <>
      <section key={key}>
        <div className="streak-card text-center">
          <h1>{name}</h1>
          <h1 className="mb-4">{num}</h1>
          <div className="btn-section">
            <Button variant="contained" onClick={handleReset}>
              &#x21bb;
            </Button>
            <Button variant="contained" onClick={handleIncrement}>
              +
            </Button>
            <Button variant="contained" onClick={handleDecrement}>
              -
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
