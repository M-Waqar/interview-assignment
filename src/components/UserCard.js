import React, { useState, useContext } from "react";
import { AppContext } from "../store/AppProvider";
import { DELETE_USER } from "../actions/Actions";
import UserDetail from "./UserDetail";

function UserCard({ user }) {
  const { state, dispatch } = useContext(AppContext);
  const [showModel, setShowModel] = useState(false);
  const closeModel = () => setShowModel(false);
  const openModel = () => setShowModel(true);

  const handleDelete = () => {
    console.log("delete Click", user);
    const filterlist = state.results.filter(
      (item) => item.email !== user.email
    );
    const apilist = state.apiResults.filter(
      (item) => item.email !== user.email
    );
    dispatch({
      type: DELETE_USER,
      payload: {
        results: filterlist,
        apiResults: apilist,
      },
    });
  };

  return (
    <div className="col-lg-3 col-md-4 text-center main-col">
      <div className="card">
        <div className="card-img">
          <span className="close-toggle clickable close-icon">
            <button
              onClick={handleDelete}
              type="button"
              className="close"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </span>
        </div>
        <div className="rounded-circle mx-auto">
          <img
            src={user.picture.large}
            className="card-img-bottom rounded-circle-pic"
            alt={user.email}
          />
        </div>

        <div className="card-body">
          <h5 className="card-title">
            {user.name.first} {user.name.last}
          </h5>
          <p className="card-text">{user.gender}</p>
          <div className="d-grid gap-2 col-8 mx-auto">
            <UserDetail show={showModel} closeModel={closeModel} user={user} />
            <button
              onClick={() => openModel()}
              className="btn btn-outline-primary button-connect"
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
