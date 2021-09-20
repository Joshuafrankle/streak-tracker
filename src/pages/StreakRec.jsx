import { useSelector } from "react-redux";
import { Divider } from "@mui/material";

export default function StreakRec() {
  const streaks = useSelector((state) => state.streak);

  const largestStreak = Math.max.apply(
    Math,
    streaks.map((stk) => stk.streakCount)
  );

  const largestStreakTitle = streaks.map((stk) =>
    stk.streakCount === largestStreak ? stk.title : null
  );

  return (
    <>
      <section className="longest-streak m-5">
        <div className="text-center">
          <h2>Streak Record</h2>
          <h3>
            Longest Streak is {largestStreak} for {largestStreakTitle}
          </h3>
        </div>
        <div className="d-flex record-list mt-5">
          {streaks.map((streak) => (
            <>
              <h3 className="text-muted">
                {streak.title}: {streak.streakCount}
              </h3>
              <p className="mt-1">&bull;</p>
            </>
          ))}
        </div>
        <Divider />
      </section>
    </>
  );
}