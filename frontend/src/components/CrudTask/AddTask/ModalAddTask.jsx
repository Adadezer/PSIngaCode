import React, { useState } from "react";
import { Grid, IconButton, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FormAddTask from "./FormAddTask";

export default function ModalAddTask(props) {
  const [open, setOpen] = useState(false);
  const OpenModal = () => setOpen(true);
  const CloseModal = () => setOpen(false);

  return (
    <Grid item {...props}>
      <IconButton onClick={OpenModal} aria-label="add" color="primary">
        <AddIcon />
      </IconButton>

      <Modal
        open={open}
        onClose={CloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <FormAddTask />
      </Modal>
    </Grid>
  );
}
