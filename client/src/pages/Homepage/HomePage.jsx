import { useEffect, useState } from "react";
import { Featured } from "../../component/featured/Featured";
import { List } from "../../component/list/List";
import { Navbar } from "../../component/navbar/Navbar";
import "./HomePage.scss";
import axios from "axios";

const HomePage = (props) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${props.type ? "?type=" + props.type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );

        setLists(res.data.data);
      } catch (error) {}
    };

    getRandomLists();
  }, [props.type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={props.type} setGenre={setGenre} />
      {lists.map((list) => {
        return <List key={list._id} list={list} />;
      })}
    </div>
  );
};

export default HomePage;
