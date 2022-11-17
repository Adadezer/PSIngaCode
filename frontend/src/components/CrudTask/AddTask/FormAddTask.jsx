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
    border: "2px solid #1b80f5",
    boxShadow: 54,
    p: 4,
  };

  const {
    setModal,
    shouldUpdate,
    setShouldUpdate,
    listTasks,
  } = useContext(IngaCodeContext);

  const createTask = () => {
    axios.post("https://636c08487f47ef51e140c97e.mockapi.io/Tasks", inputValue)
      .then(() => {
        setShouldUpdate(true)
        console.log("shouldUpdate create: ", shouldUpdate)
        setModal(false)
      })
      .catch((error) => console.log(error));
  }

  const [inputValue, setInputValue] = useState({
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
          label="Nome"
          name="name"
          value={inputValue.name}
          onChange={(e) => handleChange(e.target)}
          helperText="Digite o nome da tarefa"
          variant="standard"
        />
      </div>
      <div>
        <TextField
          fullWidth
          label="Descrição"
          name="description"
          value={inputValue.description}
          onChange={(e) => handleChange(e.target)}
          helperText="Descreva o que é essa tarefa"
          variant="standard"
        />
      </div>
      <div>
        <TextField
          fullWidth
          select
          label="Projetos"
          name="projectName"
          value={inputValue.projectName}
          onChange={(e) => handleChange(e.target)}
          helperText="Selecione o projeto ao qual a tarefa faz parte"
          variant="standard"
        >
          {listTasks.map((option) => (
            <MenuItem key={option.id} value={option.projectName}>
              {option.projectName}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          fullWidth
          select
          label="Colaboradores"
          name="collaboratorName"
          value={inputValue.collaboratorName}
          onChange={(e) => handleChange(e.target)}
          helperText="Selecione o colaborador da tarefa"
          variant="standard"
        >
          {listTasks.map((option) => (
            <MenuItem key={option.id} value={option.collaboratorName}>
              {option.collaboratorName}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <br />
      <Button variant="contained" onClick={createTask}>Criar Tarefa</Button>
    </Box>
  );
}
