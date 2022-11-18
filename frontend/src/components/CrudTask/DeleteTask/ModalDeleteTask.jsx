import React, { useContext } from "react";
import { Grid, IconButton, Modal } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IngaCodeContext from "../../../context/IngaCodeContext";
import FormDeleteTask from "./FormDeleteTask";

export default function ModalDeleteTask() {
  const {modalDelete, setModalDelete} = useContext(IngaCodeContext);
  const OpenModal = () => setModalDelete(true);
  const CloseModal = () => setModalDelete(false);
  return (
    <Grid item>
      <IconButton onClick={OpenModal} aria-label="delete" color="error">
        <DeleteIcon />
      </IconButton>

      <Modal
        open={modalDelete}
        onClose={CloseModal}
      >
        <FormDeleteTask />
      </Modal>
    </Grid>
  );
}
