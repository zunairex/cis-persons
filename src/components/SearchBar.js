import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Cards from "./Cards";
import Button from '@material-ui/core/Button';
import githubLogo from '../github.png'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
    },
  },
  textfield: {
    backgroundColor: 'white',
  },
  button:{
    color:"white",
    marginTop: "15px",
    backgroundColor:"651B63",
  }
}));

export default function SearchBar() {
  const classes = useStyles();
  const [text, setText] = useState("");


  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField className={classes.textfield} id="outlined-basic" label="Search" variant="outlined" onChange={(e) => {
          setText(e.target.value);
        }} />
        <a href="https://github.com/zunairex/cis-persons" target="_blank"  rel="noopener noreferrer">
        <Button variant="contained" color="primary" className={classes.button}>
      <img src={githubLogo} alt="github"></img>{" "}
</Button></a>
      </form>
      <Cards text={text} />
    </div>
  );
}
