import React, { useContext, useState } from "react";
import UserSearch from "./UserSearch";
import UserList from "./UserList";

import { AppContext } from "../store/AppProvider";
import { FILTER_USER } from "../actions/Actions";

const Home = () => {
  const { state, dispatch } = useContext(AppContext);
  const [filter, setFilter] = useState("na");
  const handleChange = (value) => {
    setFilter((prev) => value);
    let filterlist = null;
    if (value === "na") filterlist = [...state.apiResults];
    else filterlist = state.apiResults.filter((item) => item.gender === value);
    dispatch({
      type: FILTER_USER,
      payload: {
        results: filterlist,
      },
    });
  };

  return (
    <div className="container mt-5">
      <UserSearch filter={filter} handleChange={handleChange} />
      <UserList filter={filter} />
    </div>
  );
};

export default Home;
