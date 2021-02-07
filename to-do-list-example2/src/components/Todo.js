import React from "react";
import TodoItem from "./Todoitem";

class Todo extends React.Component {
  state = {
    elements: [
      { id: "11111", title: "Zrobić zakupy", isComplited: false },
      { id: "11112", title: "Opłacić domenę", isComplited: true },
    ],
    inputValue: "",
  };

  markComplited(id) {
    //odznaczenie
    const index = this.state.elements.findIndex((x) => x.id === id);

    const newElements = this.state.elements;
    newElements[index].isComplited = true;

    this.setState({ elements: newElements });
  }

  addItem() {
    //dodawanie
    const item = {
      id: Math.random(),
      title: this.state.inputValue,
    };
    const newElements = [item, ...this.state.elements];
    this.setState({ elements: newElements });
    this.setState({ inputValue: "" });
  }

  inputHandler(event) {
    const newValue = event.target.value;
    this.setState({ inputValue: newValue });
  }

  render() {
    const elementsToMap = this.state.elements.map((e, eIndex) => {
      return (
        <TodoItem
          key={e.id}
          element={e}
          markClicked={this.markComplited.bind(this)}
          indexOfElement={eIndex}
        />
      );
    });
    return (
      <div>
        <h1>ToDo list</h1>
        <input
          className="input-style"
          type="text"
          placeholder="..."
          value={this.state.inputValue}
          onChange={this.inputHandler.bind(this)}
        ></input>
        <button onClick={this.addItem.bind(this)}>Dodaj do listy</button>
        {elementsToMap}
      </div>
    );
  }
}

export default Todo;
