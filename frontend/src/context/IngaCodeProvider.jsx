import React, { useState } from "react";
import IngaCodeContext from "./IngaCodeContext";

export default function IngaCodeProvider({ children }) {
  const [modal, setModal] = useState(false);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [listTasks, setListTasks] = useState([]);

  const myContext = {
    modal,
    setModal,
    shouldUpdate,
    setShouldUpdate,
    listTasks,
    setListTasks
  };

  return (
    <IngaCodeContext.Provider value={ myContext }>
      {children}
    </IngaCodeContext.Provider>
  );
}