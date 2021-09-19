import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import StreakCard from "../components/StreakCard";

export default function LandingPage() {
  const [streakCard, setStreakCard] = useState([]);

  function handleAdd() {
    setStreakCard((prev) => [...prev, <StreakCard />]);
  }

  return (
    <>
      <section className="heading">
        <h1 className="streak-text">STREAK TRACKER</h1>
      </section>

      <section className="longest-streak my-5">
        <div className="text-center">
          <h2>Streak Record</h2>
          <h3>Longest Streak is 0 for something</h3>
        </div>
        <div className="streak-record d-flex">
          <h3 className="text-muted">Smallville: 0</h3>
        </div>
      </section>

      <section className="streak-cards my-5">
        {streakCard.length > 0 ? streakCard : <p>Nothing</p>}
      </section>

      <section className="mx-2">
        <div className="d-flex justify-content-end">
          <Fab color="secondary" aria-label="add" onClick={handleAdd}>
            <AddIcon />
          </Fab>
        </div>
      </section>
    </>
  );
}
