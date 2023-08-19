import { useState, useMemo } from "react";
import { useReducer } from "react";
import React from "react";
import PropTypes from "prop-types";
import "./App.css";

class ComponentClassOne extends React.Component {
  render() {
    return (
      <section className="info-section" style={stylesCSS}>
        Nasz pierwszy komponent ...
      </section>
    );
  }
}

const stylesCSS = {
  textDecoration: "underline overline",
  margin: "25px",
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
// // całe funkcje:
// const Button = (props) => {
//   return (
//     <button
//       onClick={() => {
//         props.update(`New app name ${Date.now()} `);
//       }}
//     >
//       Click button to update!
//     </button>
//   );
// };

// ===================

// Definiowanie parametrów, ich typów oraz domyślnych wartości

// Kontrola typów parametrów przyjmowanych przez komponent wymaga
// zainstalowania zewnętrznej zależności:

// npm install -- save - dev prop - types

// Następnie w kodzie definiujemy typy danych wejściowych w następujący sposób:

class MainComponentWithTypeParameters extends React.Component {
  render() {
    return (
      <div className="main-styles main-margin-top">
        {" "}
        Nazwa : {this.props.name} | Data : {this.props.date}{" "}
      </div>
    );
  }
}
MainComponentWithTypeParameters.propTypes = {
  name: PropTypes.string,
  date: PropTypes.number,
};

// Zdefiniowanie niepoprawnego typu danych powinno zwrócić błąd w konsoli przeglądarki:

// Warning : Failed prop type : Invalid prop `date` of type `string` supplied to
// `Main` , expected `number` .

// Oprócz typów można również zadeklarować, które wartości są wymagane:

// date : PropTypes.number.isRequired

// Możemy również zdefiniować domyślne wartości przyjmowanych parametrów:

MainComponentWithTypeParameters.defaultPropsp = {
  name: "John Doe",
  date: Date.now(),
};

// W przypadku wymogu złożonej walidacji typu danych można skorzystać z funkcji walidujących dane:

// const Name = (props) => <h1> Name : {props.name} </h1>;
// Name.propTypes = {
//   name(props, propName, component) {
//     if (!(propName in props)) {
//       return new Error(`Missing ${propName} `);
//     }
//     if (props[propName].length < 4) {
//       return new Error(` ${propName} was too short`);
//     }
//   },
// };

// Jako alternatywy dla PropTypes można skorzystać z kompilatorów Flow lub TypeScript. Więcej informacji na temat walidacji oraz typów przyjomowanych danych znajduje się w oficjalnej dokumentacji: https://reactjs.org/docs/typechecking-with-proptypes.html

// =================
class Header extends React.Component {
  constructor(props) {
    super(props);
    // this.textOne = <span className="blue-color">blue</span>;
    this.state = {
      actuallState: true,
      favoritecolor: <span className="red-color">red</span>, //to samo co niżej, ale inny zapis
      favoritecolorTwo: <span className="blue-color">{"blue"}</span>, //to samo co wyżej, ale inny zapis
    };
  }
  // shouldComponentUpdate() {
  //   return true;
  // }
  changeColor = () => {
    this.setState((prevState) => ({
      actuallState: !prevState.actuallState,
    }));
  };
  render() {
    return (
      <div>
        <h1>
          My Favorite Color is{" "}
          {this.state.actuallState
            ? this.state.favoritecolor
            : this.state.favoritecolorTwo}
        </h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

const initialTodos = [
  {
    id: 1,
    titlee: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    titlee: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.titlee}
          </label>
        </div>
      ))}
    </>
  );
}

const Appo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 10; i++) {
    console.log(i);
    num += 1;
  }
  return num;
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Appo />
        <Todos />
        <Header />
        <ComponentClassOne />
        <StatelessComponent />
        <StateComponent />
        <MainStateless name="Stateless props name (przekazywanie parametrów do komponentów bezstanowych)" />
        <MainState name="State props name (przekazywanie parametrów do komponentów stanowych)" />
        {/* <Button update={this.update.bind(this)} /> */}
        <MainComponentWithTypeParameters name="App name" date={Date.now()} />
      </div>
    );
  }
}

export default App;
