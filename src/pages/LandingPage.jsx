import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import StreakCard from "../components/StreakCard";
import { Button, Modal } from "react-bootstrap";

export default function LandingPage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [streakCard, setStreakCard] = useState([]);

  function handleAdd() {
    const streakName = document.getElementById("streak-name").value;
    setStreakCard((prev) => [...prev, <StreakCard name={streakName} />]);
    handleClose();
  }

  return (
    <>
      <section className="d-flex justify-content-center mt-3">
        <h1 className="streak-text">STREAK TRACKER</h1>
      </section>

      <section className="longest-streak m-5">
        <div className="text-center">
          <h2>Streak Record</h2>
          <h3>Longest Streak is 0 for something</h3>
        </div>
        <div className="d-flex">
          <h3 className="text-muted">Smallville: 0</h3>
        </div>
      </section>

      <section className="streak-cards m-5">
        {streakCard.length > 0 ? (
          streakCard
        ) : (
          <p>You do not have any streaks yet!</p>
        )}
      </section>

      <section className="mx-2">
        <div className="d-flex justify-content-end">
          <Fab color="secondary" aria-label="add" onClick={handleShow}>
            <AddIcon />
          </Fab>
        </div>
      </section>

      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Type your streak name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text" id="streak-name" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAdd}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
