import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import userService from "../../services/UserService";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


const useStyles = makeStyles((theme) => ({
  
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  child: {
    width: "40%",
    margin:25
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    alignItems: 'center',
  },
  form: {
    width: '25%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    alignItems: 'center',
  },
}));
const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <h1>Sign In</h1>

      
        <TextField
          label="email"
          fullWidth
          className={classes.form}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
  
        <TextField
          label="password"
          type="password"
          fullWidth
          
          className={classes.form}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br />
        <Button
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={(e) => {
            userService
              .login(email, password)
              .then((data) => {
                console.log(data);
                window.location.href = "/";
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Login
        </Button>
        <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
      </div>
    
  );
};

export default Login;