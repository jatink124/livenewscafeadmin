import React, {useState,useEffect} from "react";
import axios from 'axios';



function DropDown(){
    const [users,setUsers] = useState([]);
    const [cat,setcat] = useState('');
useEffect(function(){
    axios.get('https://www.catchmyjob.in/php-react-category/category-dropdown.php')
    .then(response=>setUsers(response.data))
    .then(error=>console.log(error))
},[]);

const onddlChange=(e)=>{
    // alert(e.target.value);
 
    setcat(e.target.value);
    
}

return (
  <>
  <select className="form-control col-md-3" onChange={onddlChange}>
     <option vlaue="0">--Select User--</option>
        {users.map((user)=>(
<option value={user.id}>{user.label}</option>
            ))}
    </select>

</>
);
}

export default DropDown;

// url--https://www.youtube.com/watch?v=o8Gx_QQUjhQ