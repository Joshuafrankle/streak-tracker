import Button from "@mui/material/Button";
import { increaseStreak, decreaseStreak } from "../redux/streakSlice";
import { useDispatch } from "react-redux";

export default function StreakCard({ id, name, count }) {
  const dispatch = useDispatch();

  return (
    <>
      <section>
        <div className="streak-card text-center">
          <h1>{name}</h1>
          <h1 className="mb-4">{count}</h1>
          <div className="btn-section">
            <Button
              variant="contained"
              onClick={() => dispatch(increaseStreak(id))}
            >
              +
            </Button>
            <Button
              variant="contained"
              onClick={() => dispatch(decreaseStreak(id))}
            >
              -
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
