import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tilt from 'react-tilt';


import {persons} from '../persons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center",
        '& > *': {
            margin: theme.spacing(10),
            width: theme.spacing(30),
            height: theme.spacing(30),
        },
    },
    card: {
        backgroundColor: 'lightGreen',
        color: "#651B63",
        boxShadow: " 0 0 10px grey",
        borderRadius: "10px",
        textAlign: "center",
        height: "270px",
        
    },
    img: {
        borderRadius: "50%",
        marginTop: "20px",
        border: "5px solid white"

    },
   
}));




export default function Cards({ text }) {
    const classes = useStyles();



    const filteredPerson = persons.filter((person) => {
        return person.name.toLowerCase().includes(text.toLowerCase()) || person.email.toLowerCase().includes(text.toLowerCase())
    })







    return (
        <div className={classes.root}>
            {filteredPerson.map((val) => {

                return (
                    <div key={val.id} >
                        <Tilt className="Tilt" options={{ max: 35 }} style={{ height: 250, width: 250 }} >
                            <div className="Tilt-inner">

                                <Paper elevation={3} className={classes.card}>
                                    <img src={val.imgUrl} alt={val.name} height="120px" width="120px" className={classes.img}></img>

                                    <h3>Name: {val.name}</h3>
                                    <p>Email: {val.email}</p>

                                </Paper>
                            </div>

                        </Tilt>

                    </div>



                )
            })}


        </div>
    );

}
