import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkToken, getUserByToken } from "./store/actions/userAction";
import "./App.css";

import Loading from "./components/Loading";
import Notification from "./components/Notification";
import routes from "./routes";
import history from "./history";

function App() {
  const dispatch = useDispatch();

  const checked = useSelector(state => state.user.logged.checked);
  const logged = useSelector(state => state.user.logged.token);
  const loading = useSelector(state => state.user.logged.loading);
  const user = useSelector(state => state.user.current.data);

  useEffect(() => {
    if(!checked){
      dispatch(checkToken());
    }
  }, [dispatch, checked]);

  useEffect(() => {
    if (logged && !user.id){
      dispatch(getUserByToken());
    }
  }, [dispatch, logged, user]);

  return loading || !checked ? <Loading /> : routes(logged);
}

const AppWrapper = () => {
  return (
    <BrowserRouter history={history}>
      <Notification />
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
