import Button from "@mui/material/Button";
import {
  increaseStreak,
  decreaseStreak,
  resetStreak,
} from "../redux/streakSlice";
import { useDispatch } from "react-redux";

export default function StreakCard({ id, name, count }) {
  const dispatch = useDispatch();

  function handleIncrement(send_id) {
    dispatch(increaseStreak(send_id));
  }
  function handleDecrement(send_id) {
    dispatch(decreaseStreak(send_id));
  }
  function handleReset(send_id) {
    dispatch(resetStreak(send_id));
  }

  return (
    <>
      <section>
        <div className="streak-card text-center">
          <h1>{name}</h1>
          <h1 className="mb-4">{count}</h1>
          <div className="btn-section">
            <Button variant="contained" onClick={() => handleReset(id)}>
              &#x21bb;
            </Button>
            <Button variant="contained" onClick={() => handleIncrement(id)}>
              +
            </Button>
            <Button variant="contained" onClick={() => handleDecrement(id)}>
              -
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
