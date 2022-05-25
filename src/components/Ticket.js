import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Ticket = ({ taskList }) => {
  const ToDos = taskList.map((todo) => (
    <Draggable draggableId={todo.ticketID} index={todo.index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="ticket mt-4 bg-slate-200 flex flex-col  shadow-md"
        >
          <div className="top flex justify-between text-slate-600 employee">
            <span className="bg-teal-900  text-white p-2 ">
              {todo.medewerker}
            </span>
            <span className="status flex items-center">{todo.status}</span>
            <div className="text-xs flex items-center extra-info pr-2">
              <span>{todo.ticketID}</span>
              <span>{todo.gsr}</span>
            </div>
          </div>
          <div className="p-2 flex middle bg-gray-50">{todo.naam}</div>
          <div className="p-2 flex bottom text-xs bg-gray-50">
            <span className="company">{todo.company}</span>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  ));

  return <>{ToDos}</>;
};

export default Ticket;
