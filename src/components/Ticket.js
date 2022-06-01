import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Ticket = ({ taskList }) => {
  const ToDos = taskList.map((todo, index) => (
    <Draggable key={todo.ticketID} draggableId={todo.ticketID} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          className="border-l-4 border-sky-400 ticket mt-4 bg-slate-200 flex flex-col  shadow-md"
        >
          <div className="p-2 align-start text-left font-bold text-sm middle bg-gray-50">
            <span className={`icon ${todo.type}`}></span>
            {todo.naam}
          </div>
          <div className="p-2 flex bottom text-xs bg-gray-50">
            <span className="company">{todo.company}</span>
            <span className="ml-auto">{todo.GSR}</span>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  ));

  return <>{ToDos}</>;
};

export default Ticket;
