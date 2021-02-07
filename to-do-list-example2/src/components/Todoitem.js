import React from "react";

const TodoItem = (props) => {
  const markHandler = () => {
    props.markClicked(props.element.id);
  };

  return (
    <div
      key={props.element.id}
      className={`one-element ${props.element.isComplited ? "complited" : ""}`}
    >
      <h5>
        {`${props.indexOfElement}) `}
        {props.element.title}
      </h5>
      <button disabled={props.element.isComplited} onClick={markHandler}>
        Zakończone
      </button>
    </div>
  );
};

export default TodoItem;
