import { Grid } from "@mui/material"
import React from "react"
import AddTask from "./AddTask/ModalAddTask"
import EditTask from "./EditTask/ModalEditTask"
import DeleteTask from "./DeleteTask"

export default function CrudTask() {
  return (
    <Grid
      container
      component="form"
      spacing={1}
      noValidate
      autoComplete="off"
      sx={{
        overflow: "auto",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <AddTask />
      <EditTask />
      <DeleteTask />
    </Grid>
  )
}