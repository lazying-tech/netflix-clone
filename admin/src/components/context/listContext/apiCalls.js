import axios from "axios";
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from "./ListActions";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());

  try {
    const res = await axios.get("/lists", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });

    dispatch(getListsSuccess(res.data.data));
  } catch (error) {
    dispatch(getListsFailure());
  }
};

//delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());

  try {
    await axios.delete(`/lists/${id}`, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (error) {
    dispatch(deleteListFailure());
  }
};

//create
export const createList = async (list, dispatch) => {
  dispatch(createListStart());

  try {
    const res = await axios.post("/lists", list, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createListSuccess(res.data.data));
  } catch (error) {
    dispatch(createListFailure());
  }
};

// // update
// export const updateMovie = async (movie, dispatch) => {
//   dispatch(updateMoviesStart());

//   try {
//     const res = await axios.patch("/movies/" + movie._id, movie, {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     });
//     dispatch(updateMoviesSuccess(res.data.data));
//   } catch (error) {
//     dispatch(updateMoviesFailure());
//   }
// };
