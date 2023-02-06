import React from "react";
import UserItem from "./UserItem";

const UserListe = ({ listes }) => {
  const userliste = listes.map((list) => (
    <UserItem key={list.id} list={list} />
  ));
  return <div>{userliste}</div>;
};

export default UserListe;
