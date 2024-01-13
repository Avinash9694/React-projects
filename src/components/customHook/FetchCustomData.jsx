import React from "react";
import useFetchPerson from "./useFetchPerson";

const FetchCustomData = () => {
  const url = "https://api.github.com/users/QuincyLarson";
  const { isError, loading, user } = useFetchPerson(url);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <div>Sorry, there was an error.</div>;
  }

  const { avatar_url, company, name, bio } = user;
  return (
    <div>
      <img src={avatar_url} alt={avatar_url} />
      <h1>{name}</h1>
      <h4>{company}</h4>
      <p>{bio}</p>
    </div>
  );
};

export default FetchCustomData;
