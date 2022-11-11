import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function BasicCard(props) {
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
          <br />

          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Colaborador <br />
            {props.task.collaboratorName}
          </Typography> 
        </CardContent>
        <CardActions>
          <Button size="small">Detalhes da tarefa</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
