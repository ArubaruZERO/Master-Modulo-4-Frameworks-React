import React from "react";
import { Link, useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const useStyles = makeStyles((theme) => ({
  title:{
    fontFamily: 'Barlow, san-serif',
    fontWeight: 600,
    color: '#122740',
   
    fontSize: '2rem',
  },
  text:{
    fontFamily: 'Barlow, san-serif',
    fontWeight: 400,
    fontSize: '1rem',
    color: '#122740',
  },
  subtitle: {
    fontFamily: 'Barlow, san-serif',
    fontWeight: 600,
    fontSize: '1rem',
    color: '#122740',
  },
  button: {
    margin: theme.spacing(1),
    padding:"5px",
    width:"200px",
    display:"flex",
    justifyContent:"center",

  },
 
  card: {
    width: '15%',
    padding:"30px",
    borderRadius: 16,
    boxShadow: '0 2px 5px 0 #BDC9D7',
    overflow: 'hidden',
    marginTop:"10px",
    display:"flex",
    justifyContent:"space-around",
  },
  
 

}));



export const LoginPage: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const classes = useStyles();

 
  


  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "admin" && password === "test") {
      history.push("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <Card className={classes.card}>
    <form onSubmit={handleNavigation}>
      <h2 style={{margin:"15px"}} className={classes.title}>Login</h2>
      <div>
        <div style={{margin:"15px"}}>
       
       
          <input
          style={{padding:"5px"}}
          placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{margin:"15px"}}>
          
          <input
          style={{padding:"5px"}}
          placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <Button 
      className={classes.button}
      type="submit"
       variant="contained"
       color="primary"
       size="small"
       startIcon={<ExitToAppIcon />} 
       >Login</Button>
     
    </form>
    </Card>
  );
};
