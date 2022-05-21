import React, { useContext } from "react";
import { AppContext } from "../store/AppProvider";
import { v4 as uuidv4 } from "uuid";
import InfiniteScroll from "react-infinite-scroll-component";
import UserCard from "./UserCard";
import LoadingSpinner from "./LoadingSpinner";
import getUsers from "../services/UserService";
import { FETCH_USERS } from "../actions/Actions";

const UserList = ({ filter }) => {
  const { state, dispatch } = useContext(AppContext);
  const fetchMoreData = async () => {
    const resp = await getUsers({ page: state.page + 1, count: state.count });
    let filterlist = null;
    if (filter === "na") filterlist = [...state.apiResults];
    else filterlist = state.apiResults.filter((item) => item.gender === filter);
    dispatch({
      type: FETCH_USERS,
      payload: {
        count: resp.data.info.results,
        page: resp.data.info.page,
        results: filterlist,
        apiResults: resp.data.results,
      },
    });
  };

  return (
    <>
      {state.results ? (
        <InfiniteScroll
          dataLength={state.results.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<LoadingSpinner />}
        >
          <div className="row">
            {state.results.map((user) => (
              <UserCard key={uuidv4()} user={user} />
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default UserList;
