import React from "react";
import "./App.css";

const arrayList = ["Ziutek", "Czesio", "Zyta", "Wiesia"];

const ourRandomNumber = Math.floor(Math.random() * arrayList.length);

let randomName = arrayList[ourRandomNumber];

// const name = "Frydzia";

const Greeting = () => <h1>Welcome {randomName}</h1>;

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Gracjan",
  lastName: "Brzęczyszczykiewicz",
};

// user.firstName = "Lucek";

const SecondGreeting = () => <h1>Witaj, {formatName(user)}! </h1>;

function ThirdGreeting() {
  if (user.firstName === "Lucek") {
    return <h1>Witaj, {formatName(user)}!</h1>;
  }
  return <h1>Witaj, nieznajomy.</h1>;
}

const Element = () => <h1 className="greeting">Witaj, świecie!</h1>;

function Welcome(props) {
  return <h1>Cześć, {props.name}</h1>;
}

//===========

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};
// ReactDOM.render(
//   <Comment date={comment.date} text={comment.text} author={comment.author} />,
//   document.getElementById("root")
// );

function App() {
  return (
    <div className="App">
      <Greeting />
      <SecondGreeting />
      <ThirdGreeting />
      <Element />
      <Welcome name="Sara" />
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
    </div>
  );
}

export default App;
