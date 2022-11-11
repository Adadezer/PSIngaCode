import React from "react";
import { Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DeleteTask() {
  return (
    <Grid item>
      <IconButton aria-label="delete" color="error">
        <DeleteIcon />
      </IconButton>
    </Grid>
  );
}
