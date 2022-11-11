import { Grid } from "@mui/material"
import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import CardTask from "../components/CardTask"
import axios from "axios";
import CrudTask from "../components/CrudTask/CrudTask";

export default function Tasks() {
  const [listTasks, setlistTasks] = useState([]);

  const getTasks = async () => {
    try {
      const result = await axios.get("https://636c08487f47ef51e140c97e.mockapi.io/Tasks");
      setlistTasks(result.data);
      return result.data
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

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