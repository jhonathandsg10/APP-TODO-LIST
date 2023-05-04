import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Button, Grid, TextField, Toolbar, Typography } from '@mui/material/index';
import { dark } from '@mui/material/styles/createPalette';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...dark
  },
});

function App() {
  const theme = createTheme()
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar position = "static">
        <Toolbar sx={{
          paddingTop:theme.spacing(2),
          paddingBottom:theme.spacing(2),
          display:"flex",
          justifyContent:'center',
          alignItems:'center',
          '@media all':{
            minHeight:200,
          }

        }}>
            <Typography variant = "h5" component="h1">todo</Typography>
        </Toolbar>
      </AppBar>
      <main>
          <Grid container spacing={theme.spacing(0.5)}>
              <Grid item xl={8}  sm={12}>
                <TextField name='task' fullWidth>

                </TextField>
              </Grid>
              <Grid item xl={4} sm={12}>
                <Button variant='contained'>Criar</Button>
              </Grid>
          </Grid>
      </main>
      
    </ThemeProvider>
  );
}

export default App;
