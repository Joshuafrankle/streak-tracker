import { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addStreak, resetStreak } from "../redux/slices/streakSlice";
import { getUser } from "../redux/slices/userSlice";
import StreakCard from "./StreakCard";
import StreakRec from "./StreakRec";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const streaks = useSelector((state) => state.streak);
  const { firstName } = useSelector((state) => state.user);

  function handleAdd() {
    let streakName = document.getElementById("streak_name").value;
    streakName = streakName.trim();
    if (streakName !== "" && streakName !== null) {
      dispatch(addStreak({ title: streakName, streakCount: 0 }));
    }
    handleClose();
  }

  useEffect(() => {
    dispatch(resetStreak());
    dispatch(getUser());

    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <p className="full-vh d-flex align-justify-center fs-2">Loading...</p>
      ) : (
        <main>
          <h1 className="text-center my-4 text-muted">Welcome {firstName}!</h1>
          <section className="d-flex justify-content-center mt-3">
            <h1 className="streak-text">STREAK TRACKER</h1>
          </section>

          <StreakRec />

          <section className="grid-layout m-5">
            {streaks.map((streak) => (
              <div key={streak.id}>
                <StreakCard
                  id={streak.id}
                  name={streak.title}
                  count={streak.streakCount}
                />
              </div>
            ))}
          </section>

          <section className="fab-button">
            <Fab color="secondary" aria-label="add" onClick={handleShow}>
              <AddIcon />
            </Fab>
          </section>

          <div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>Enter the Series name</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <input className="form-control" type="text" id="streak_name" />
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
        </main>
      )}
    </>
  );
}
