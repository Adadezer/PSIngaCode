import React from "react";
import { Grid, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function AddTask() {
  
  return (
    <Grid item>
      <IconButton aria-label="add" color="primary">
        <AddIcon />
      </IconButton>
    </Grid>
  );
}
