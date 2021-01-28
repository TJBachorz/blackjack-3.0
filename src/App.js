import './App.css';
import { Grid } from '@material-ui/core';

import Header from './Components/Header';
import Content from './Components/Content';

function App() {
  return (
    <div className="App">
      <Grid container direction="column">
          <Grid item>
            <Header/>
          </Grid>
        <Grid item container>
          <Grid item xs={0} sm={2} md={3}/>
          <Grid item xs={12} sm={8} md={6}>
            <Content/>
          </Grid>
          <Grid item xs={0} sm={2} md={3}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
