import React from "react";
import { Link, useParams } from "react-router-dom";
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
interface MemberDetailEntity {
  id: string;
  login: string;
  name: string;
  company: string;
  bio: string;
}


const useStyles = makeStyles((theme) => ({
  title:{
    fontFamily: 'Barlow, san-serif',
    fontWeight: 600,
    color: '#122740',
   
    fontSize: '2rem',
  },
  card: {
    width: '40%',
    borderRadius: 16,
    boxShadow: '0 2px 5px 0 #BDC9D7',
    overflow: 'hidden',
    marginTop:"10px",
    padding:"15px"
   
  },
  text:{
    fontFamily: 'Barlow, san-serif',
    fontWeight: 400,
    fontSize: '1rem',
    color: '#122740',
    padding:"5px"
  },
  subtitle: {
    fontFamily: 'Barlow, san-serif',
    fontWeight: 700,
    fontSize: '1rem',
    color: '#122740',
    padding:"5px"
  },
  link:{
    textDecoration:"none",
  }


}));



const createDefaultMemberDetail = () => ({
  id: "",
  login: "",
  name: "",
  company: "",
  bio: "",
});

export const DetailPage: React.FC = () => {
  const classes = useStyles()
  const [member, setMember] = React.useState<MemberDetailEntity>(
    createDefaultMemberDetail()
  );
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, []);

  return (
    <>
      <h2 className={classes.title}>Hello from Detail page</h2>
      <Card className={classes.card}>
      
      <p className={classes.text}><strong className={classes.subtitle}>ID:</strong> {member.id}</p>
      <p className={classes.text}><strong className={classes.subtitle}>Login:</strong> {member.login}</p>
      <p className={classes.text}><strong className={classes.subtitle}>Name:</strong> {member.name}</p>
      <p className={classes.text}><strong className={classes.subtitle}>Company:</strong> {member.company}</p>
      <p className={classes.text}><strong className={classes.subtitle}>Biography:</strong> {member.bio}</p>
      <Button 
       variant="outlined"
       color="primary"
       size="small"
       startIcon={<SettingsBackupRestoreIcon />} 
       >
       
          <Link className={classes.link} to="/list">Back to list page</Link>
      </Button>
      
      
      </Card>
     
    </>
  );
};
