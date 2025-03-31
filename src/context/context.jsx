import { createContext, useState } from "react";

export const ContextTask = createContext();

export const ContextProvider = ({ children }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tasks, setTasks] = useState([]);
  
  return (
      <ContextTask.Provider
        value={{
          title,
          setTitle,
          description,
          setDescription,
          tasks,
          setTasks,
        }}
      >
        {children}
      </ContextTask.Provider>
    );
  }


