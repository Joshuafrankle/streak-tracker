import { useSelector } from "react-redux";
import { Divider } from "@mui/material";

export default function StreakRec() {
  const streaks = useSelector((state) => state.streak);

  const longestStreak = Math.max.apply(
    Math,
    streaks.map((stk) => stk.streakCount)
  );

  let longestStreakTitle = streaks.map((stk) =>
    stk.streakCount === longestStreak ? stk.title : null
  );

  longestStreakTitle = longestStreakTitle.join(", ");

  return (
    <>
      <section className="m-5">
        <div className="text-center">
          <h2>Streak Record</h2>
          <h3>
            {longestStreak === 0 ? (
              <p>No Streak</p>
            ) : (
              <div>
                <span className="text-muted">Longest Streak: </span>
                {longestStreak} <span className="text-muted">| Name: </span>
                {longestStreakTitle}
              </div>
            )}
          </h3>
        </div>

        <div className="mt-5 d-flex">
          {streaks.map((streak) => (
            <div className="d-flex record-list" key={streak.id}>
              <h3 className="text-muted">
                {streak.title}: {streak.streakCount}
              </h3>
              <p className="mt-1">&bull;</p>
            </div>
          ))}
        </div>
        <Divider />
      </section>
    </>
  );
}
