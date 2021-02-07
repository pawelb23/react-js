import React from "react";

class Todo extends React.Component {
  state = {
    elements: [
      { id: "11111", title: "Zrobić zakupy" },
      { id: "11112", title: "Opłacić domenę" },
    ],
  };
  render() {
    const elementsToMap = this.state.elements.map((e, index) => {
      return (
        <div className="one-element" key={e.id}>
          {`${index}) `}
          {e.title}
        </div>
      );
    });
    return (
      <div>
        <h1>ToDo list</h1>
        {elementsToMap}
      </div>
    );
  }
}

export default Todo;
