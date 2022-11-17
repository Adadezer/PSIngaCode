import { Grid } from "@mui/material"
import React, { useContext, useEffect } from "react"
import Header from "../components/Header"
import CardTask from "../components/CardTask"
import axios from "axios";
import CrudTask from "../components/CrudTask/CrudTask";
import IngaCodeContext from "../context/IngaCodeContext";

export default function Tasks() {
  const {
    listTasks,
    setListTasks,
    shouldUpdate,
    setShouldUpdate 
  } = useContext(IngaCodeContext);

  const getTasks = async () => {
    try {
      const result = await axios.get("https://636c08487f47ef51e140c97e.mockapi.io/Tasks");
      setListTasks(result.data);
      return setShouldUpdate(false);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, [shouldUpdate]);

  return (
    <>
      <Header titleHeader="Tarefas"/>
      <CrudTask />
      <Grid
        container
        component="form"
        spacing={1}
        p={2}
        noValidate
        autoComplete="off"
        sx={{
          overflow: "auto",
          maxHeight: "82vh",
          display: "flex",
          justifyContent: "center"
        }}
      >
        {
          listTasks.map((element, index) => (
            <CardTask task={ element } key={ index } />
          ))
        }
      </Grid>
    </>
  )
}