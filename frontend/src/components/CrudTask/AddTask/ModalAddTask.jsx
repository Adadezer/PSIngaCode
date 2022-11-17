import React, { useContext } from "react";
import { Grid, IconButton, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FormAddTask from "./FormAddTask";
import IngaCodeContext from "../../../context/IngaCodeContext";

export default function ModalAddTask(props) {
  const {modal, setModal} = useContext(IngaCodeContext);
  const OpenModal = () => setModal(true);
  const CloseModal = () => setModal(false);

  return (
    <Grid item {...props}>
      <IconButton onClick={OpenModal} aria-label="add" color="primary">
        <AddIcon />
      </IconButton>

      <Modal
        open={modal}
        onClose={CloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <FormAddTask />
      </Modal>
    </Grid>
  );
}
