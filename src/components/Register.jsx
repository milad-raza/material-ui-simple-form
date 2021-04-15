import {useState} from "react";
import styles from "./Register.module.css";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    input: {
        width: "300px",
    },
    button: {
        height: "50px"
    }
  });

export default function Register() {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userNameValidation = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
    const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const save = () => {
        if(userNameValidation.test(userName) === false){
            alert("Enter Valid User Name")
        } 
        else if(emailValidation.test(email) === false){
            alert("Enter Valid Email Adress")
        }
        else if(!(password.length > 7 && password.length <21) ){
            alert("Enter Valid Password")
        }
        else{
            console.log(userName, email, password)
            alert("saved")
        }

        
    }
      
    const classes = useStyles();

  return (
    <div className={styles.RegisterationForm}>
      <h1>Registeration Form</h1>
      <form onSubmit={()=>save()}>
        <TextField
          className={classes.input}
          id="UserName"
          label="User Name"
          variant="outlined"
          type="text"
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
        />
        <br />
        <br />
        <TextField 
          className={classes.input}
          id="Email" 
          label="Email" 
          variant="outlined" 
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <br />
        <br />
        <TextField
          className={classes.input}
          id="Password"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <br />
        <br />
        <Button variant="contained" color="primary" fullWidth className={classes.button} onClick={()=>save()}>
          Save
        </Button>
      </form>
    </div>
  );
}
