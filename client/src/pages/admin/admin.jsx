import React,{useState,useEffect} from 'react'
import "./admin.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import newRequest from "../../utils/newRequest.js";



const Admin = () => {
  const [data,setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/users/getall",{method:'GET'})
    .then(response => {
      return response.json()
    })
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setData(data))
    console.log(data); 
  },[])
  return (
    <div className='admin_dash'>
      <TableContainer component={Paper}>
     <Table aria-label="simple table">
       <TableHead>
         <TableRow>           
          <TableCell>Name</TableCell>
           <TableCell align="right">Email</TableCell>
           <TableCell align="right">Country</TableCell>
           <TableCell align="right">Phone</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {data.map((dataa) => (
           <TableRow key={dataa._id}>
             <TableCell component="th" scope="row">
               {dataa.username}
             </TableCell>
             <TableCell align="right">{dataa.email}</TableCell>
             <TableCell align="right">{dataa.country}</TableCell>
             <TableCell align="right">{dataa.phone}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
      
    </div>
  )
}

export default Admin;
