import React, { useState } from "react";
import IngaCodeContext from "./IngaCodeContext";

export default function IngaCodeProvider({ children }) {
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [shouldUpdateAdd, setShouldUpdateAdd] = useState(false);
  const [shouldUpdateEdit, setShouldUpdateEdit] = useState(false);
  const [listTasks, setListTasks] = useState([]);

  const myContext = {
    modalAdd,
    setModalAdd,
    shouldUpdateAdd,
    setShouldUpdateAdd,
    listTasks,
    setListTasks,
    modalEdit,
    setModalEdit,
    shouldUpdateEdit,
    setShouldUpdateEdit
  };

  return (
    <IngaCodeContext.Provider value={ myContext }>
      {children}
    </IngaCodeContext.Provider>
  );
}