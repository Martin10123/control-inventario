import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth";
import { SecondRouter } from ".";

export const AppRouter = () => {
  const showComponente = false;

  return (
    <Routes>
      {!showComponente ? (
        <Route Component={LoginPage} path="/login" />
      ) : (
        <Route Component={SecondRouter} path="*" />
      )}
    </Routes>
  );
};
