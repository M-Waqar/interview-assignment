import React from "react";
import "./user-detail.css";

const UserDetail = ({ closeModel, show, user }) => {
  const { first, last } = user.name;
  const { phone, email } = user;
  return (
    <>
      {show === true && (
        <div className="my-modal">
          <div className="modal-content">
            <h4>
              {first} {last}
            </h4>
            <p className="p-name">Phone Number: {phone}</p>
            <p>Email: {email}</p>
            <button
              onClick={() => closeModel()}
              className="btn btn-primary btn-ok"
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetail;
