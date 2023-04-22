import {
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
  deleteMoviesStart,
  deleteMoviesSuccess,
  deleteMoviesFailure,
  createMoviesStart,
  createMoviesSuccess,
  createMoviesFailure,
  updateMoviesStart,
  updateMoviesSuccess,
  updateMoviesFailure,
} from "./MovieActions";
import axios from "axios";

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());

  try {
    const res = await axios.get("/movies", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch(getMoviesSuccess(res.data.data));
  } catch (error) {
    dispatch(getMoviesFailure());
  }
};

//delete
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMoviesStart());

  try {
    await axios.delete(`/movies/${id}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteMoviesSuccess(id));
  } catch (error) {
    dispatch(deleteMoviesFailure());
  }
};

//create
export const createMovie = async (movie, dispatch) => {
  dispatch(createMoviesStart());

  try {
    const res = await axios.post("/movies", movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createMoviesSuccess(res.data.data));
  } catch (error) {
    dispatch(createMoviesFailure());
  }
};

// update
export const updateMovie = async (movie, dispatch) => {
  dispatch(updateMoviesStart());

  try {
    const res = await axios.patch("/movies/" + movie._id, movie, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(updateMoviesSuccess(res.data.data));
  } catch (error) {
    dispatch(updateMoviesFailure());
  }
};
