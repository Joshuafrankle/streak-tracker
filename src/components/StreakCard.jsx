import Button from "@mui/material/Button";
import {
  increaseStreak,
  decreaseStreak,
  resetStreak,
} from "../redux/streakSlice";
import { useDispatch } from "react-redux";

export default function StreakCard({ keyy, name, count }) {
  const dispatch = useDispatch();

  function handleIncrement(id) {
    dispatch(increaseStreak(id));
  }
  function handleDecrement(id) {
    dispatch(decreaseStreak(id));
  }
  function handleReset(id) {
    dispatch(resetStreak(id));
  }

  return (
    <>
      <section key={keyy}>
        <div className="streak-card text-center">
          <h1>{name}</h1>
          <h1 className="mb-4">{count}</h1>
          <div className="btn-section">
            <Button variant="contained" onClick={() => handleReset(keyy)}>
              &#x21bb;
            </Button>
            <Button variant="contained" onClick={() => handleIncrement(keyy)}>
              +
            </Button>
            <Button variant="contained" onClick={() => handleDecrement(keyy)}>
              -
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
