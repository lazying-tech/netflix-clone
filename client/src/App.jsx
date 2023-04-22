import HomePage from "./pages/Homepage/HomePage";
import "./app.scss";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Fragment } from "react";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={user ? <HomePage /> : <Navigate to="/register" />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        {user && (
          <Fragment>
            <Route path="/movies" element={<HomePage type="movie" />} />
            <Route path="/series" element={<HomePage type="series" />} />
            <Route path="/watch" element={<Watch />} />
          </Fragment>
        )}
      </Routes>
    </Router>
  );
};

export default App;
