import React from "react";

const UserItem = ({ list }) => {
  console.log(list);
  return (
    <div className="card border-primary mb-3" style={{ maxWidth: "20rem" }}>
      <div className="card-header">{list.name}</div>
      <div className="card-body text-primary">
        <h5 className="card-title">{list.email}</h5>
        <p className="card-text">{list.address.city}</p>
      </div>
    </div>
  );
};

export default UserItem;
