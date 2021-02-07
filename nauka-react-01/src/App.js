import React from "react";
import "./App.css";

class ComponentClassOne extends React.Component {
  render() {
    return (
      <section className="info-section" style={stylesCSS}>
        {" "}
        Nasz pierwszy komponent ...
      </section>
    );
  }
}

const stylesCSS = {
  textDecoration: "underline overline",
  margin: "10px",
  backgroundColor: "rgb(35, 84, 35, 0.1)",
  width: "440px",
}; //Tak możemy zadaklarować style, ale oczywiście możemy też w pliku CSS. Tutaj deklarujemy w js, a potem wrzucamy to do komponentu react do JSX

const StatelessComponent = () => <h1> To jest Komponent bezstanowy </h1>;

// Komponent bezstanowy - podstawowa forma komponentu, definiowana poprzez
// zapis funkcyjny. Tego typu komponenty nie posiadają własnego stanu.

class StateComponent extends React.Component {
  constructor() {
    super();
    this.state = { name: "To jest Komponent stanowy" };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

// Komponent stanowy - komponent tworzony poprzez instancję klasy. Komponenty
// stanowe mogą posiadać swój własny stan, do którego odwołujemy się przez
// this.state.

// Przekazywanie parametrów do komponentów bezstanowych
const MainStateless = (props) => (
  <section className="main-styles"> {props.name} </section>
);

// lub do komponentów stanowych
class MainState extends React.Component {
  render() {
    return <div className="main-styles"> {this.props.name} </div>;
  }
}

// Do komponentu oprócz standardowych parametrów można również przekazywać
// całe funkcje:
const Button = (props) => {
  return (
    <button onClick={() => props.update(`New app name ${Date.now()} `)}>
      Click button to update!
    </button>
  );
};

class App extends React.Component {
  render() {
    return (
      <div>
        <ComponentClassOne />
        <StatelessComponent />
        <StateComponent />
        <MainStateless name="Stateless props name (przekazywanie parametrów do komponentów bezstanowych)" />
        <MainState name="State props name (przekazywanie parametrów do komponentów stanowych)" />
        <Button update={this.update.bind(this)} />
      </div>
    );
  }
}

// function App() {
//   return <Button update={this.update.bind(this)} />;
// }

export default App;
