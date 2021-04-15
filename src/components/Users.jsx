import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import {EditSharp} from '@material-ui/icons';
import {BackspaceSharp} from '@material-ui/icons';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: "100%",
    boxShadow: "none",
    height: "100vh",
  },
  container: {
    maxHeight: "100vh",
  },
  tableCell: {
      width: "25%"
  }
});

export default function Users() {

  const [data, setData] = useState([
    {name: "Milad Raza", email: "Miladrazabhatti@gmail.com", id: 1},
    {name: "Imran Ali", email: "Imran@gmail.com", id: 2},
    {name: "Ali Raza", email: "Ali@gmail.com", id: 3},
    {name: "Sameer", email: "Sameer@gmail.com", id: 4},
    {name: "Sana", email: "Sana@gmail.com", id: 5},
    {name: "Milad Raza", email: "Miladrazabhatti@gmail.com", id: 6},
    {name: "Imran Ali", email: "Imran@gmail.com", id: 7},
    {name: "Ali Raza", email: "Ali@gmail.com", id: 8},
    {name: "Sameer", email: "Sameer@gmail.com", id: 9},
    {name: "Sana", email: "Sana@gmail.com", id: 10},
])

  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  const deleteIt = (id) => {
      const newData = data.filter(function(value) {
        return value.id !== id
      })
      setData(newData)
  }
  
  const editIt = (id1, name1, email1) => {
    setId(id1)
    setName(name1)
    setEmail(email1)
  }

  const check = () => {
      setId("")
      setName("")
      setEmail("")
  }

  return (
    <Paper className={classes.root}>
        
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell} align="center">Policy Number</TableCell>
              <TableCell className={classes.tableCell} align="center">Issue Date</TableCell>
              <TableCell className={classes.tableCell} align="center">Expiry Date</TableCell>
              <TableCell className={classes.tableCell} align="center">Gross Premium</TableCell>
              <TableCell className={classes.tableCell} align="center">New Premium</TableCell>
              <TableCell className={classes.tableCell} align="center">Premium Rate</TableCell>
              <TableCell className={classes.tableCell} align="center"></TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
                {data.map((value, index)=>(
                      ((id === value.id)? (
                        <TableRow  key={value.id}>
                            {/* <TableCell className={classes.tableCell} align="center">{value.name}</TableCell> */}
                            {/* <TableCell className={classes.tableCell} align="center">{value.email}</TableCell> */}
                            <TableCell className={classes.tableCell} align="center"><Button onClick={()=>editIt(value.id, value.name, value.email)}><EditSharp /></Button></TableCell>
                            <TableCell className={classes.tableCell} align="center"><Button onClick={()=>deleteIt(value.id)}><BackspaceSharp /></Button></TableCell>
                        </TableRow>
                        ):(
                        <TableRow  key={value.id}>
                            <TableCell className={classes.tableCell} align="center">{value.name}</TableCell>
                            <TableCell className={classes.tableCell} align="center">{value.email}</TableCell>
                            <TableCell className={classes.tableCell} align="center"><Button onClick={()=>editIt(value.id, value.name, value.email)}><EditSharp /></Button></TableCell>
                            <TableCell className={classes.tableCell} align="center"><Button onClick={()=>deleteIt(value.id)}><BackspaceSharp /></Button></TableCell>
                        </TableRow>
                      ))
                    ))}
           </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
