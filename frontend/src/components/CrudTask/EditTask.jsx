import React from "react";
import { Grid, IconButton } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export default function EditTask() {
  return (
    <Grid item>
      <IconButton aria-label="edit" color="success">
        <ModeEditIcon />
      </IconButton>
    </Grid>
  );
}
