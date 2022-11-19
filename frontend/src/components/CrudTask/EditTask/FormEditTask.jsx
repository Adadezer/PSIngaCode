import React, { useContext, useState } from "react";
import { Button, MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import IngaCodeContext from "../../../context/IngaCodeContext";
import schemaValidations from "../../../helpers/schemaValidations"

export default function FormAddTask() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#ffffff",
    border: "2px solid #029e31",
    boxShadow: 54,
    p: 4,
  };

  const {
    setModalEdit,
    setShouldUpdateEdit,
    listTasks,
  } = useContext(IngaCodeContext);

  const [inputValue, setInputValue] = useState({
    id: "",
    name: "",
    description: "",
    projectName: "",
    collaboratorName: ""
  });

  const [isInvalid, setIsInvalid] = useState({
    id: true,
    name: true,
    description: true,
    projectName: true,
    collaboratorName: false
  });

  const handleChange = (target) => {
    setInputValue({
      ...inputValue,
      [target.name]: target.value
    });

    const schemaValidate = schemaValidations.EditTask[target.name].validate(target.value)
    if (schemaValidate.error) {
      setIsInvalid({
        ...isInvalid,
        [target.name]: true
      });
    } else {
      setIsInvalid({
        ...isInvalid,
        [target.name]: false
      });
    }
  };

  const updateTask = async () => {
    try {
      await axios.put(
        `https://636c08487f47ef51e140c97e.mockapi.io/Tasks/${inputValue.id}`, inputValue
      );
      setShouldUpdateEdit(true);
      setModalEdit(false);

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
          error={isInvalid.id}
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
      <div>
        <TextField
          fullWidth
          label="Nome"
          name="name"
          error={isInvalid.name}
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
          error={isInvalid.description}
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
          error={isInvalid.projectName}
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
          error={isInvalid.collaboratorName}
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
      <Button variant="contained" onClick={updateTask} color="success">Editar Tarefa</Button>
    </Box>
  );
}
