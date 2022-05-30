/* eslint-disable no-unused-vars */
import { isFocusable } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import Ticket from "./components/Ticket";

const gepland = [
  {
    medewerker: "MD",
    status: "Gepland",
    ticketID: "2232451",
    GSR: "20G, 11R, 9S",
    naam: "Kapshoeven ombouwen Saas",
    company: "Strandcamping Groede",
  },
  {
    medewerker: "FG",
    status: "Gepland",
    ticketID: "23456646",
    GSR: "2G, 1R, 1S",
    naam: "Kapshoeven ombouwen Saas",
    company: "'n Kaps",
  },
  {
    medewerker: "MD",
    status: "Gepland",
    ticketID: "343254234",
    GSR: "1G, 2R, 3S",
    naam: "Westerbergen Boekstraat",
    company: "Westerbergen",
  },
];

const uitvoering = [
  {
    medewerker: "MD",
    status: "In uitvoering",
    ticketID: "3242455",
    GSR: "10G, 3R, 2S",
    naam: "EveryOffice - Template bouwen",
    company: "EveryOffice",
  },
  {
    medewerker: "FG",
    status: "In uitvoering",
    ticketID: "45623234",
    GSR: "2G, 1R, 1S",
    naam: "Toevoegen Captcha Wesbite",
    company: "AKG ICT",
  },
];

const testing = [
  {
    medewerker: "MD",
    status: "Testing",
    ticketID: "3453111",
    GSR: "2G, 1R, 22S",
    naam: "SaaS Compiler update",
    company: "EveryOffice",
  },
  {
    medewerker: "FG",
    status: "Testing",
    ticketID: "23412414",
    GSR: "21G, 11R, 9S",
    naam: "Westerbegen Boekstraat SaaS",
    company: "Eiland van Maurik",
  },
  {
    medewerker: "MD",
    status: "Testing",
    ticketID: "23423544",
    GSR: "4G, 4R, 4S",
    naam: "Westerbegen Boekstraat SaaS",
    company: "Westerbegen",
  },
];

const App = () => {
  const [plannedList, setPlannedList] = useState(gepland);
  const [doingTasks, setDoingTasks] = useState(uitvoering);
  const [testingTasks, setTestingTasks] = useState(testing);
  const [deliveredTasks, setDeliveredTasks] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    // Return als dropped buiten droppable gebied
    if (destination == null) {
      console.log("none");
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let newPlanned = plannedList;
    let newDoing = doingTasks;
    let addedTask;

    if (source.droppableId === "TaskGepland") {
      addedTask = newPlanned[source.index];
      newPlanned.splice(source.index, 1);
    } else {
      addedTask = newDoing[source.index];
      newDoing.splice(source.index, 1);
    }

    if (destination.droppableId === "TaskGepland") {
      newPlanned.splice(destination.index, 0, addedTask);
    } else {
      newDoing.splice(destination.index, 0, addedTask);
    }

    setPlannedList(newPlanned);
    setDoingTasks(newDoing);

    return;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <div className="grid grid-cols-4">
          <Droppable droppableId="TaskGepland">
            {(provided) => (
              <div
                className="p-2 min-h-full"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <span>Plannend</span>
                <Ticket taskList={plannedList} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="TaskDoing">
            {(provided) => (
              <div
                className="p-2"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <span>Doing</span>
                <Ticket taskList={doingTasks} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="TaskDoing">
            {(provided) => (
              <div
                className="p-2"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <span>Testing</span>
                <Ticket taskList={testingTasks} />
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
