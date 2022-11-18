import React, { useContext, useState } from "react";
import { Button, MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import IngaCodeContext from "../../../context/IngaCodeContext";

export default function FormAddTask() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#ffffff",
    border: "2px solid #fd0b48",
    boxShadow: 54,
    p: 4,
  };

  const {
    setModalDelete,
    setShouldUpdateDelete,
    listTasks,
  } = useContext(IngaCodeContext);

  const [inputValue, setInputValue] = useState({
    id: "",
    name: "",
    description: "",
    projectName: "",
    collaboratorName: ""
  });

  const handleChange = (target) => {
    setInputValue({
      ...inputValue,
      [target.name]: target.value
    });
  };
  console.log("inputValue: ", inputValue);
  const updateTask = async () => {
    try {
      await axios.delete(
        `https://636c08487f47ef51e140c97e.mockapi.io/Tasks/${inputValue.id}`, inputValue
      );
      setShouldUpdateDelete(true);
      return setModalDelete(false);

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box
      component="form"
      sx={style}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          fullWidth
          select
          label="Id"
          name="id"
          value={inputValue.id}
          onChange={(e) => handleChange(e.target)}
          helperText="Selecione o identificador da tarefa (id)"
          variant="standard"
        >
          {listTasks.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.id}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <br />
      <Button variant="contained" onClick={updateTask} color="error">Deletar Tarefa</Button>
    </Box>
  );
}