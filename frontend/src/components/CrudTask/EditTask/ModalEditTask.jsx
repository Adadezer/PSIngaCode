import React, { useContext } from "react";
import { Grid, IconButton, Modal } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import IngaCodeContext from "../../../context/IngaCodeContext";
import FormEditTask from "./FormEditTask";

export default function ModalEditTask() {
  const {modalEdit, setModalEdit} = useContext(IngaCodeContext);
  const OpenModal = () => setModalEdit(true);
  const CloseModal = () => setModalEdit(false);

  return (
    <Grid item>
      <IconButton onClick={OpenModal} color="success">
        <ModeEditIcon />
      </IconButton>

      <Modal
        open={modalEdit}
        onClose={CloseModal}
      >
        <FormEditTask />
      </Modal>
    </Grid>
  );
}
