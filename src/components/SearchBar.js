import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Cards from "./Cards";
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  textfield:{
    backgroundColor: 'white',
}
}));

export default function SearchBar() {
  const classes = useStyles();
  const [text, setText] = useState("");


  return (
      <div>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField className={classes.textfield} id="outlined-basic" label="Search" variant="outlined" onChange={(e)=>{
setText(e.target.value);
      }} />
    </form>
    <Cards text={text}/>
    </div>
  );
}
