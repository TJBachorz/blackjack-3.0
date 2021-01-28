import './App.css';
import { Grid } from '@material-ui/core';

import Header from './Components/Header';
import Content from './Components/Content';
import { CountProvider } from './Store/CountContext';


function App() {

  return (
    <CountProvider>
      <div className="App">
        <Grid container direction="column">
            <Grid item>
              <Header/>
            </Grid>
          <Grid item container>
            <Grid item xs={0} sm={2} md={3}/>
              <Content/>
            <Grid item xs={0} sm={2} md={3}/>
          </Grid>
        </Grid>
      </div>
    </CountProvider>
  );
}

export default App;
