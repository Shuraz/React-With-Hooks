import React from "react";

function List(props) {
    const {repos} = props;
  if (!repos) return null;
  if (!repos.length) return <p>No Repos, Sorry!!!</p>;
  return (
    <div>
      <ul>
        {repos.map((item) => {
          return <li key={item.id}>{item.full_name}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;
