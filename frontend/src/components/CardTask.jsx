import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, Modal } from "@mui/material";

export default function BasicCard(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #1b80f5",
    boxShadow: 54,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const OpenModal = () => setOpen(true);
  const CloseModal = () => setOpen(false);

  return (
    <Grid item {...props} >
      <Card sx={{ minWidth: 380, margin: 1 }}>
        <CardContent>
          <Typography color="text.secondary">
            Tarefa
          </Typography>
          <Typography variant="h5" component="div" gutterBottom>
            {props.task.name}
          </Typography>
          <br />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Projeto <br />
            {props.task.projectName}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={OpenModal} size="small">Detalhes da tarefa</Button>
        </CardActions>
      </Card>

      <Modal
        open={open}
        onClose={CloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography color="text.secondary">
            Tarefa
          </Typography>
          <Typography variant="h5" component="div" gutterBottom>
            {props.task.name}
          </Typography>
          <br />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Descrição <br />
            {props.task.description}
          </Typography>
          <br />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Projeto <br />
            {props.task.projectName}
          </Typography>
          <br />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Colaborador <br />
            {props.task.collaboratorName}
          </Typography>
        </Box>
      </Modal>
    </Grid>
  );
}
