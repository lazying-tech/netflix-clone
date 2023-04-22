import "./ArrayLists.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ListContext } from "../../components/context/listContext/ListContext";
import {
  deleteList,
  getLists,
} from "../../components/context/listContext/apiCalls";

export default function ArrayLists() {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  // console.log(lists);

  const handleDelete = (id) => {
    deleteList(id, dispatch);
  };
  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "title", headerName: "Title", width: 250 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "Type", width: 150 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{
                pathname: "/list/" + params.row._id,
                state: { list: params.row },
              }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => {
          return r._id;
        }}
      />
    </div>
  );
}
