import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://www.catchmyjob.in/php-react-post-list/all-users.php`)
            .then((response) => {
                console.log(response.data.users)
                setAPIData(response.data.users);
            })
    }, []);

    const setData = (data) => {
        
      let { id, CategoryName, subCategoryName,PostDetails, PostTitle, PostUrl,PostList } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Category Name', CategoryName);
        localStorage.setItem('SubCategory Name', subCategoryName);
        localStorage.setItem('PostDetails', PostDetails);
        localStorage.setItem('PostList', PostList);
        localStorage.setItem('PostTitle', PostTitle);
        localStorage.setItem('PostUrl', PostUrl)
    }

    const getData = () => {
        axios.get(`https://www.catchmyjob.in/php-react-post-list/all-users.php`)
            .then((getData) => {
                console.log(getData.data.users);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://www.catchmyjob.in/php-react-post-list/delete-user.php?id=${id}`)
        .then((resp) => {
          console.log(resp);
        })
    }

    return (
        <div>
          <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Category Name</th>
      <th>SubCategory Name</th>
      <th>PostDetails</th>
      <th>PostTitle</th>
      <th>PostUrl</th>
      <th>Update</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
  {APIData.map((data) => {
                        return (
    <tr>
     
      <td>{data.CategoryName}</td>
      <td>{data.subCategoryName}</td>
      <td>{data.PostDetails}</td>
      <td>{data.PostTitle}</td>
      <td>{data.PostUrl}</td>
      <td>{data.PostList}</td>
      <td>  <Link to='/update'><Button onClick={() => setData(data)}>Update</Button></Link></td>
      <td><Button onClick={() => onDelete(data.id)}>Delete</Button></td>
    </tr>
                        )   
})}
  </tbody>
</Table>
        </div>
    )
}
