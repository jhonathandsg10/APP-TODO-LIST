import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Badge, Box, Button, Chip, Container, Grid, TextField, Toolbar, Typography, colors } from '@mui/material/index';
import { dark } from '@mui/material/styles/createPalette';
import { CheckFat, PlusCircle, Rocket } from '@phosphor-icons/react';
import {useState, useEffect} from 'react'
import { Task } from './types';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...dark
  },
});

function App() {
  const theme = createTheme()
  const [tasks,setTasks]= useState<Task[]>()

  useEffect(()=>{

  },[])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar sx={{
          paddingTop: theme.spacing(2),
          paddingBottom: theme.spacing(2),
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center',
          '@media all': {
            minHeight: 200,
          }

        }}>
          <Typography variant="h5" component="h1" sx={{
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing(2),
            color: theme.palette.primary.light
          }}><CheckFat size={32} weight='fill' /><span> Lista de Tarefas</span>
          </Typography>
        </Toolbar>
      </AppBar >
      <main>
        <Container sx={{
          position: 'relative',

        }}>
          <Grid container spacing={theme.spacing(0.5)} sx={{
            position: 'absolute',
            top: '-27px',
          }}>
            <Grid item xl={10} sm={12}>
              <TextField placeholder='adicione uma nova tarefa' variant='outlined' name='task' fullWidth sx={{
                backgroundColor: colors.grey[800]
              }}>
              </TextField>
            </Grid>
            <Grid item xl={2} sm={12}>
              <Button variant='contained' sx={{
                height: '100%'
              }}>
                <span>Criar</span><PlusCircle size={32} />

              </Button>
            </Grid>
            <Grid container spacing={theme.spacing(1)} sx={{
              marginTop: '25px'
            }}>
              <Grid item sx={{
                display: 'flex',
                justifyContent: 'end',
              }}>
                <Box display='flex' alignItems='center' gap={theme.spacing(1)}>
                  <Typography>
                    Tarefas Criadas
                  </Typography>
                  <Chip label={0}></Chip>
                </Box>

                <Box display='flex' alignItems='center' gap={theme.spacing(1)}>
                  <Typography>
                    Tarefas Concluidas
                  </Typography>
                  <Chip label={'2 de 5'}></Chip>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
