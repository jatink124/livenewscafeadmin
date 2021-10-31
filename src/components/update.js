import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Update() {
    let history = useHistory();
    const [id, setID] = useState('');
    const [CategoryName, setCategoryName] = useState('');
    const [subCategoryName, setsubCategoryName] = useState('');
    const [PostList, setPostList] = useState('');
    const [Categoryid, setCategoryid] = useState('');
    const [subCategoryid, setsubCategoryid] = useState('');
    const [PostDetails, setPostDetails] = useState('');
    const [PostTitle, setPostTitle] = useState('');
    const [PostUrl, setPostUrl] = useState('');
    const [categories,setCategories] = useState([]);
    const [subcategories,setsubCategories] = useState([]);
    const [cat,setcat] = useState('');
    const [subcat,setsubcat] = useState('');
    const [Status, setStatus] = useState('');

    useEffect(() => {
      
        setID(localStorage.getItem('ID'))
        setCategoryName(localStorage.getItem('CategoryId'));
        setsubCategoryName(localStorage.getItem('subCategoryid'));
        setPostDetails(localStorage.getItem('PostDetails'));
        setPostTitle(localStorage.getItem('PostTitle'));
        setPostUrl(localStorage.getItem('PostUrl'));
        setPostList(localStorage.getItem('PostList'));
        axios.get('https://www.catchmyjob.in/php-react-category/category-dropdown.php')
    .then(response=>setCategories(response.data))
    .then(error=>console.log(error))
    axios.get('https://www.catchmyjob.in/php-react-subcategory/all-users.php')
    .then(response=>setsubCategories(response.data.users))
    .then(error=>console.log(error))
       
    }, []);
    const onddlChange=(e)=>{
        // alert(e.target.value);
     
        setcat(e.target.value);
      
    }
    const onddlChangesubcat=(e)=>{
        // alert(e.target.value);
     
        setsubcat(e.target.value);
      
    } 
    const updateAPIData = () => {
       debugger;
        axios.put(`https://www.catchmyjob.in/php-react-post-list/update-latest-news-tblposts.php`, {
        id:id,    
        PostTitle:PostTitle,
        CategoryId:cat,
        SubCategoryId:subcat,
        PostDetails:PostDetails
        }).then(() => {
            history.push('/read')
        })
        .catch(error => {
            console.log(error);
        });
    }
    return (
        <div>
            {/* <Form className="create-form">
                <Form.Field>
                    <label>Category Name</label>
                    <input placeholder='Category Name' value={CategoryId} onChange={(e) => setCategoryName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Sub Category Name</label>
                    <input placeholder='SubCategory Name' value={subCategoryid} onChange={(e) => setsubCategoryid(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                   
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form> */}
       {/* copied create code */}
       <Form className="create-form">
                <Form.Field>
                    <label>PostTitle</label>
                    <input placeholder='PostTitle' value={PostTitle} onChange={(e) => setPostTitle(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>PostDetails</label>
                    <input placeholder='PostDetails' value={PostDetails} onChange={(e) => setPostDetails(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>PostList</label>
                    <input placeholder='PostList' value={PostList} onChange={(e) => setPostList(e.target.value)}/>
                </Form.Field>
               <Form.Field>
              <label>Category Id</label>
                <select className="form-control col-md-3" onChange={onddlChange}>
     <option value="0">--Select User--</option>
        {categories.map((category)=>(
<option value={category.value}>{category.label}</option>
            ))}
    </select>
    </Form.Field>
    <Form.Field>
              <label>Sub Category Id</label>
                <select className="form-control col-md-3" onChange={onddlChangesubcat}>
     <option vlaue="0">--Select User--</option>
        {subcategories.map((subcategory)=>(
<option value={subcategory.id}>{subcategory.Subcategory}</option>
            ))}
    </select>
    {subcat}
    </Form.Field>          
    <Form.Field>
                    <label>Status</label>
                    <input placeholder='Status'  onChange={(e) => setStatus(e.target.value)}/>
                </Form.Field>
<Form.Field>
                    <label>PostUrl</label>
                    <input placeholder='PostUrl' onChange={(e) => setPostUrl(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
{/* copied create code */}
        </div>
    )
}
