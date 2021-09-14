import React, { useState} from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
const initialState = {
    firstName : '',
    lastName : '',
    email : '',
}
function AddContacts() {
    const [state, setState] = useState(initialState);
    const classes = useStyles();
    const submitContact = (e) => { 
              e.preventDefault();
              fetch("http://localhost:8080/api/contacts",{
                  method :"POST",
                  headers :{
                      "content-type" : "application/json",
                  },
                  body : JSON.stringify(state),
              })
              .then(res => res.json());
              window.location.reload();  //check this
        
          };
    return (
        <form  className = {classes.root} onSubmit = {submitContact}>
       <div>
         <TextField
            id="firstname"
            label="First Name"
            type="firstname"
            value = {state.firstName}
            onChange = {(e) =>{
                const temp = {...state, firstName: e.target.value};
                setState(temp);
            }}
            autoComplete="firstName"
          />
          <TextField
            id="lastname"
            label="Last Name"
            type="lastname"
            value = {state.lastName}
            onChange = {(e) =>{
                const temp = {...state, lastName: e.target.value};
                setState(temp);
            }}
            autoComplete="lastName"
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            value = {state.email}
            onChange = {(e) =>{
                const temp = {...state, email: e.target.value};
                setState(temp);
            }}
            autoComplete="email"
          />
          <Button variant="contained" color="secondary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    )
}

export default AddContacts

