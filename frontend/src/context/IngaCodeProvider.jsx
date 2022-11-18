import React, { useState } from "react";
import IngaCodeContext from "./IngaCodeContext";

export default function IngaCodeProvider({ children }) {
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [shouldUpdateAdd, setShouldUpdateAdd] = useState(false);
  const [shouldUpdateEdit, setShouldUpdateEdit] = useState(false);
  const [shouldUpdateDelete, setShouldUpdateDelete] = useState(false);
  const [listTasks, setListTasks] = useState([]);

  const myContext = {
    modalAdd,
    setModalAdd,
    modalEdit,
    setModalEdit,
    modalDelete,
    setModalDelete,
    shouldUpdateAdd,
    setShouldUpdateAdd,
    shouldUpdateEdit,
    setShouldUpdateEdit,
    shouldUpdateDelete,
    setShouldUpdateDelete,
    listTasks,
    setListTasks,
  };

  return (
    <IngaCodeContext.Provider value={ myContext }>
      {children}
    </IngaCodeContext.Provider>
  );
}