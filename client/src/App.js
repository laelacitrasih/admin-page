import './App.css';
import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './views/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import blue from '@mui/material/colors/blue';
import Form from './views/Form';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: blue[50],
    },
  },
  typography: {
    fontFamily: 'Raleway, Arial',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Container position="absolute">
          <div>
              <Switch>
                {/* <Route exact path='/details/:id'>
                  <DetailPage />
                </Route>*/}
                <Route exact path='/form'>
                  <Form />
                </Route>
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
