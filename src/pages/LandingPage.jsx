import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import StreakCard from "../components/StreakCard";

export default function LandingPage() {
  const [streakCard, setStreakCard] = useState([]);
  const [num, setNum] = useState(0);

  function handleAdd() {
    setStreakCard((prev) => [...prev, <StreakCard />]);
  }

  return (
    <>
      <section className="landing-main">
        <h1 className="streak-text">Streak Tracker</h1>
      </section>

      <section className="streak-cards mt-5">
        {streakCard.length > 0 ? streakCard : <p>Nothing</p>}
      </section>

      <section className="longest-streak">
        <h2 className="text-center">Streak Record</h2>
        <div className="streak-record d-flex">
          <h3>Smallville: {num}</h3>
        </div>
        <h2 className="text-center">Longest Streak {num} for something</h2>
      </section>

      <section className="">
        <div className="ml-auto">
          <Fab color="secondary" aria-label="add" onClick={handleAdd}>
            <AddIcon />
          </Fab>
        </div>
      </section>
    </>
  );
}
