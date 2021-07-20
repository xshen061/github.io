import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, ThemeProvider } from "@material-ui/core";
import FeaturedCoures from "../FeaturedCourses";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Card from '../Card';
import courseList from '../../mockData';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: { width: "100%" },
  section: { paddingTop: theme.spacing(4) },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
  },
}));







export default function Catalog() {

  const [query,setQuery] = useState('');

  const classes = useStyles();

  function handleSearch(e){
    console.log(e.target.value);
    let searchQuery = e.target.value;
    setQuery(searchQuery);
  }

  function RenderCourses() {
    return courseList.filter((course)=>course.title.includes(query)).map(course => {
        return (<div key={course.id} style={{ gridColumnEnd: 'span 4' }}>
          <Card {...course}></Card>
        </div>)
    })
}

  return (
    <div className={classes.root}>
      <div className={classes.section}>

      <div style={{display:'flex', justifyContent:'space-between', alignItems:'end', padding: '0 0 1rem 0'}}>
      <Typography variant="h4" component="h2">
          Catalog
      </Typography>

      <TextField label="Search" variant="outlined" onChange={handleSearch} ></TextField>
      </div>
      


    <Paper className={classes.paper} style={{margin:"0 0 2rem 0"}}>
        <div className={classes.container}>

        <RenderCourses></RenderCourses>
      </div>

      </Paper>
      </div>
    </div>
  );
}
