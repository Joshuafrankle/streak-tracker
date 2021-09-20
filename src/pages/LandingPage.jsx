import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addStreak } from "../redux/streakSlice";
import StreakCard from "../components/StreakCard";
import StreakRec from "./StreakRec";

export default function LandingPage() {
  const dispatch = useDispatch();

  const streaks = useSelector((state) => state.streak);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleAdd() {
    let streakName = document.getElementById("streak_name").value;
    streakName = streakName.trim();
    if (streakName !== "" && streakName !== null) {
      dispatch(addStreak({ title: streakName, streakCount: 0 }));
    }
    handleClose();
  }

  return (
    <>
      <section className="d-flex justify-content-center mt-3">
        <h1 className="streak-text">STREAK TRACKER</h1>
      </section>

      <StreakRec />

      <section className="streak-cards m-5">
        {streaks.map((streak) => (
          <StreakCard
            keyy={streak.id}
            name={streak.title}
            count={streak.streakCount}
          />
        ))}
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
            <input type="text" id="streak_name" />
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
