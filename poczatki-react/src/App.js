import React, { useState } from "react";

const arrayX = [-1, 1, 2, 3, 4, 5];

const arrayY = [6, 7, 8, 9, 10, 11, 12];

let arrayXY = [];

// let showNumbersList = true;

function Adding(x, y) {
  for (let i = 0; x.length > i || i < y.length; i++) {
    if (i >= x.length) {
      x[i] = 0;
    } else if (i >= y.length) {
      y[i] = 0;
    }
    let result = x[i] + y[i];
    console.log(result);

    arrayXY.push(result);

    // return result;
  }

  return arrayXY;
}

Adding(arrayX, arrayY);

console.log(arrayXY);

class ButtonNumbersWithClassAndState extends React.Component {
  state = {
    count: 0,
    showNumbersList: false,
    hidingShowInformations: null,
  };
  render() {
    // let count = 0;

    const numbersArray = ["one", "two", "three"]; // tworzymy zwykłą tablicę JS

    const numbersList = numbersArray.map((number, indexNumber) => {
      return (
        <p className="numbers-section-p" key={indexNumber}>
          {number}
        </p>
      ); //tworzymy zmienną JS, ktróra zawiera wewnątrz zarówno kod React'a ale i czystego JS ---> kod JS zawsze musi być zamknięty w klamrach wąsatych {}
      // Ważne ---> bez key={index} działa, ale wywala błąd w konsoli ---> aby wszystko było oki, należy używać tutaj klucza i wartości (key - klucz zawsze, ale czy wpiszemy w wartość index czy np. indexNumber to już obojętne)
    });

    // let showNumbersList = false;

    const buttonInformationShowHide = () =>
      this.setState({ showNumbersList: !this.state.showNumbersList }); //zapewni przeciwieństwo poprzedniej wartości false zamienia na true i na odwrót

    // const [showNumbersList, setNumbersState] = React.useState(true);

    const showNumbers = () => {
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count + 1); //aby zapis był prawidłowy (zgodnie z React i setState()), i abyśmy nie mieli na początku zera tak możemy wyświetlić informacje aby liczyć od 1.
    };

    return (
      <div>
        <h3>
          Wyświetlamy ilość naciśnięć przycisku
          <span className="count-information">{` >>> ${this.state.count} <<<`}</span>
        </h3>
        <button
          onClick={() => {
            buttonInformationShowHide();
            showNumbers();
          }}
        >
          {/* tak możemy dodać kilka funkcji w jednej metodzie tutaj w onclick w funkcji strzałkowej dodajemy dwie funkcje */}
          Pokaż/Ukryj
        </button>
        {this.state.showNumbersList ? numbersList : null}
      </div>
    );
  }
}

//-------------

// const ButtonAnimalsWithFunctionAndHooks = () => {
//   const [showAnimals, setAnimalState] = useState(true);
//   // const showAnimals = false; //- używamy w destrukturyzacji powyżej
//   const animalsArray = ["Cat", "Dog", "Elephant", "Mouse", "Wolf"];
//   const animalsList = animalsArray.map((animal) => (
//     <li className="animals-list" key={animal}>
//       {animal}
//     </li>
//   ));
//   const showHideAnimals = () => {
//     console.log("Animals!");
//     setAnimalState(!showAnimals);
//   };

//   return (
//     <div>
//       <button className="animals-button" onClick={showHideAnimals}>
//         Pokaż/Ukryj Zwierzęta
//       </button>
//       {showAnimals ? (
//         <ul>{animalsList}</ul>
//       ) : (
//         "Naciśnij przycisk by pokazać zwierzęta"
//       )}
//     </div>
//   );
// };

function App() {
  // const numberArray = ["one", "two", "three"]; // tworzymy zwykłą tablicę JS

  // const numbersList = numberArray.map((number, indexNumber) => {
  //   return <p key={indexNumber}>{number}</p>; //tworzymy zmienną JS, ktróra zawiera wewnątrz zarówno kod React'a ale i czystego JS ---> kod JS zawsze musi być zamknięty w klamrach wąsatych {}

  //   // Ważne ---> bez key={index} działa, ale wywala błąd w konsoli ---> aby wszystko było oki, należy używać tutaj klucza i wartości (key - klucz zawsze, ale czy wpiszemy w wartość index czy np. indexNumber to już obojętne)
  // });

  // // const [showNumbersList, setNumbersState] = React.useState(true);

  // let showNumbersList = true;

  // const showNumbers = () => {
  //   count++;
  //   console.log(count);
  //   // setNumbersState(false);
  //   // return (showNumbersList = true);
  // };

  // const info = "React"; ---> opis na dole
  return (
    // w returnie zwracamy zawsze jeden element dlatego tworzymy jeden nadrzędny element tak jak poniżej div i w niego wstawiamy wszystko co chcemy ---> <div className="App">...tutaj wstawiłem wszystkie elementy...</div>
    <div className="App">
      {/* {React.createElement("h1", null, "Szkolenie React")} */}
      {/* Powyżej ten sam zapis co poniżej tylko poniżej zapis jest zdecydowanie czytelniejszy (tak właśnie działa JSX)*/}
      <h1>Szkolenie React</h1>
      {/* <h1>Szkolenie {info}</h1> ---> opis na samym dole */}
      {/* {showNumbersList ? numbersList : `Naciśnij przycisk aby pokazać numery`} */}
      <div>
        {/* <button onClick={buttonInformationShowHide}>Pokaż numery</button> */}
        <ButtonNumbersWithClassAndState />
        {/* <ButtonAnimalsWithFunctionAndHooks /> */}
      </div>
      <h2>Tworzymy nową tablicę z dwóch starych tablic</h2>
      <h3>Stare tablice:</h3>
      <h4>{`Pierwsza tablica: [${arrayX}]`}</h4>
      <h4>{`Druga tablica: [${arrayY}]`}</h4>
      <h4>{`Nowa tablica: [${arrayXY}]`}</h4>
      <h4>{console.log(React.version)}</h4>
      <h5>
        Jako komponent react, nowa tablica dodaje się bez nawiasów (co widać
        poniżej):
      </h5>
      <div className="adding-padding">
        {/* klassy zawsze dodajemy jako className */}
        <Adding />
      </div>
      <div>
        Nowa tablica powstała z dodania kolejnych wartości (na tych samych
        pozycjach) pierwszej i drugiej tablicy (czyli np. -1 + 6 = 5, czy 1 + 7
        = 8).
      </div>
    </div>
  );
}

// { ["foo", "bar"].forEach((el) => <span>{el}</span>) }
// { ["foo", "bar"].filter(el => <span>{el}</span>) }
// { ["foo", "bar"].map((el, index) => <span key={index}>{el}</span>) }
// { ["foo", "bar"].forEach((el,index) => <span key={index}>{el}</span>) }

export default App;

// return ---> w ReactJS warto jest wstawiać return () ---> i całą naszą operację którą chcemy zrobić należy wstawić w nawias i w jeden element np. jakiegoś div'a czyli tak powinien wyglądać dobry return w React, jak poniżej (tu z użyciem klasy):

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Szkolenie React</h1>
//         <span>Lorem ipsum ...</span>
//       </div>
//     );
//   }
// }

// export default App;

// ================

// <h1>Szkolenie React</h1> ---> // ten zapis odpowiada dokładnie temu co jest poniżej, po prostu jest to wersja krótsza, uproszczona, bardziej czytelna i łatwiejsza do kodowania
// React.createElement("h1 class=123", null, "Szkolenie React");

//----------------

// W React możemy wykonywać zwykłe operacje JavaScript, zapis poniżej:

// const info = "React"; ---> przypisujemy wartość zmiennej

//<h1>Szkolenie {info}</h1> //---> w React, operacje JavaScript'owe wykonujemy wstawiając je w nawiasach wąsatych, czyli w tym przypadku nawiasach wstawiamy zmienną info

//----------------
