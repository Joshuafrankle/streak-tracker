export default function StreakRec({ data, longStreak }) {
  return (
    <>
      <section className="longest-streak m-5">
        <div className="text-center">
          <h2>Streak Record</h2>
          <h3>
            Longest Streak is {longStreak} for {longStreak}
          </h3>
        </div>
        <div className="d-flex">
          <h3 className="text-muted">Smallville: 0</h3>
        </div>
      </section>
    </>
  );
}
