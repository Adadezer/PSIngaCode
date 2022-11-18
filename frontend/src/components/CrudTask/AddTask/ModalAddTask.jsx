import React, { useContext } from "react";
import { Grid, IconButton, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import FormAddTask from "./FormAddTask";
import IngaCodeContext from "../../../context/IngaCodeContext";

export default function ModalAddTask() {
  const {modalAdd, setModalAdd} = useContext(IngaCodeContext);
  const OpenModal = () => setModalAdd(true);
  const CloseModal = () => setModalAdd(false);

  return (
    <Grid item>
      <IconButton onClick={OpenModal} aria-label="add" color="primary">
        <AddIcon />
      </IconButton>

      <Modal
        open={modalAdd}
        onClose={CloseModal}
      >
        <FormAddTask />
      </Modal>
    </Grid>
  );
}
