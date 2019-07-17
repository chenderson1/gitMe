import React from "react";
import UserItem from "../users/UserItem";
import PropTypes from "prop-types";

const Users = ({ users }) => {
  const mappedUsers = users.map(user => <UserItem {...user} key={user.id} />);
  return <div style={userStyle}>{mappedUsers}</div>;
};

export default Users;

Users.propTypes = {
  users: PropTypes.array.isRequired
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};
