import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

var useStyles ={
   
        margin: 8,
    
        padding: '0 30px',
        margin: 8,
    
  };
  

const Admin = () => {
  return (
  <div style={useStyles} >
    <Button
        variant="contained"
        color="default"
        style={useStyles}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>


<Button
  variant="contained"
  color="secondary"
    style={useStyles}
  startIcon={<DeleteIcon />}
    onClick
>
  Delete
</Button>

</div>
  );
}
export default Admin;