import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  const mappedRepos = repos.map(repo => <RepoItem repo={repo} key={repo.id} />);

  return <>{mappedRepos}</>;
};

export default Repos;

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};
