import React, { useEffect, useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";

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

  const [listProjects, setlistProjects] = useState([]);

  const getTasks = async () => {
    try {
      const result = await axios.get("https://636c08487f47ef51e140c97e.mockapi.io/Tasks");
      setlistProjects(result.data);
      return result.data
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const [selectedProject, setSelectedProject] = useState("");
  const [selectedCollaborator, setSelectedCollaborator] = useState("");

  const handleChangeProject = (event) => {
    setSelectedProject(event.target.value);
  };

  const handleChangeCollaborator = (event) => {
    setSelectedCollaborator(event.target.value);
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
          helperText="Digite o nome da tarefa"
          variant="standard"
        />
      </div>
      <div>
        <TextField
          fullWidth
          label="Descrição"
          helperText="Descreva o que é essa tarefa"
          variant="standard"
        />
      </div>
      <div>
        <TextField
          fullWidth
          select
          label="Projetos"
          value={selectedProject}
          onChange={handleChangeProject}
          helperText="Selecione o projeto ao qual a tarefa faz parte"
          variant="standard"
        >
          {listProjects.map((option) => (
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
          value={selectedCollaborator}
          onChange={handleChangeCollaborator}
          helperText="Selecione o colaborador da tarefa"
          variant="standard"
        >
          {listProjects.map((option) => (
            <MenuItem key={option.id} value={option.collaboratorName}>
              {option.collaboratorName}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
