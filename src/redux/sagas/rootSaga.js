import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";
import { getUser } from "../slices/userSlice";

export function* watcherSaga() {
  console.log("root saga");
  yield takeLatest(getUser.type, handleGetUser);
}
