import { isFocusable } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import Ticket from "./components/Ticket";

const todoList = [
  {
    medewerker: "MD",
    status: "Gepland",
    ticketID: "2232451",
    index: "0",
    GSR: "20G, 11R, 9S",
    naam: "Kapshoeven ombouwen Saas",
    company: "Strandcamping Groede",
  },
  {
    medewerker: "FG",
    status: "Gepland",
    ticketID: "23456646",
    index: "1",
    GSR: "2G, 1R, 1S",
    naam: "Kapshoeven ombouwen Saas",
    company: "'n Kaps",
  },
  {
    medewerker: "MD",
    status: "Gepland",
    ticketID: "343254234",
    index: "2",
    GSR: "1G, 2R, 3S",
    naam: "Westerbergen Boekstraat",
    company: "Westerbergen",
  },
];

const doingList = [
  {
    medewerker: "MD",
    status: "In uitvoering",
    ticketID: "3242455",
    index: "0",
    GSR: "10G, 3R, 2S",
    naam: "EveryOffice - Template bouwen",
    company: "EveryOffice",
  },
  {
    medewerker: "FG",
    status: "In uitvoering",
    ticketID: "45623234",
    index: "1",
    GSR: "2G, 1R, 1S",
    naam: "Toevoegen Captcha Wesbite",
    company: "AKG ICT",
  },
];

const App = () => {
  const [todos, setTodos] = useState([]);
  const [doingTasks, setDoingTasks] = useState([]);
  const [deliveredTasks, setDeliveredTasks] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    // Return als dropped buiten droppable gebied
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
    }

    if (source.droppableId === "") {
    }

    return;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <div className="grid grid-cols-4">
          <Droppable droppableId="TaskGepland">
            {(provided) => (
              <div
                className="p-2"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <Ticket
                  taskList={todoList}
                  // completedTodos={completedTodos}
                  // setCompletedTodos={setCompletedTodos}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="TaskGepland">
            {(provided) => (
              <div
                className="p-2"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <Ticket
                  taskList={doingList}
                  // completedTodos={completedTodos}
                  // setCompletedTodos={setCompletedTodos}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};

export default App;
