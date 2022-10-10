import * as React from "react";

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  return (
    <div>
      <h1>My hacker stories</h1>

      <Search />

      <hr />

      <List mylist={stories} />
    </div>
  );
};

const List = (props) => (
  <ul>
    {props.mylist.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
    ;
  </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>, author(s): {props.item.author}</span>
    <span>, comments: {props.item.num_comments}</span>
    <span>, points: {props.item.points}</span>
  </li>
);

const Search = () => {
  const HandleChange = (event) => {
    // synthetic event
    console.log(event);
    // value of target (here: element)
    console.log(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={HandleChange} />
    </div>
  );
};

export default App;
