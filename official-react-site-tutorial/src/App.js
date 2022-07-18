import "./App.css";

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: "Gracjan",
  lastName: "Brzęczyszczykiewicz",
};

const Element = () => (
  <h1 className="first-last-name">Witaj, {formatName(user)}! </h1>
);

const WelcomeReact = () => (
  <h1 className="font-size-welcome"> Szkolenie React z oficjalnej strony </h1>
);

function App() {
  return (
    <div className="App">
      <WelcomeReact />
      <Element />
    </div>
  );
}

export default App;
