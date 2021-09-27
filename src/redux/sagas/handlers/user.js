import { call, put } from "redux-saga/effects";
import { axiosGet } from "../requests";
import { setUser } from "../../slices/userSlice";

export function* handleGetUser() {
  try {
    const res = yield call(axiosGet);
    const { data } = res;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
