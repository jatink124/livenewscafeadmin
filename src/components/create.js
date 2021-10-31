import React, { useState,useEffect } from 'react';

import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
import Select from 'react-select';
import { tsConstructorType } from '@babel/types';
import DropDown from './dropdown';
export default function Create() {
    let history = useHistory();
    const [PostTitle, setPostTitle] = useState('');
    const [PostDetails, setPostDetails] = useState('');
    const [PostList, setPostList] = useState('');
    const [Categoryid, setCategoryid] = useState('');
    const [subCategoryid, setsubCategoryid] = useState('');
    const [subCategoryName, setsubCategoryName] = useState('');
    const [Status, setStatus] = useState('');
    const [PostUrl, setPostUrl] = useState('');
    

    //    this.handleChange = this.handleChange.bind(this);
   
    const handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
        this.setState({ddval: selectedOption.value});
        this.setState({ddvalname:selectedOption.label});
      };
      
      const postData = () => {
        axios.post(`https://www.catchmyjob.in/php-react-post-list/add_post.php`, {
            PostTitle:PostTitle,
            PostDetails:PostDetails,
            PostList:PostList,
            Categoryid:cat,
            subCategoryid:subcat,
            subCategoryName:subCategoryName,
            PostUrl:PostUrl,
            value:Status
           
        }).then(() => {
            history.push('/read')
        })
    }

    const [categories,setCategories] = useState([]);
    const [subcategories,setsubCategories] = useState([]);
    const [cat,setcat] = useState('');
    const [subcat,setsubcat] = useState('');
useEffect(function(){
    axios.get('https://www.catchmyjob.in/php-react-category/category-dropdown.php')
    .then(response=>setCategories(response.data))
    .then(error=>console.log(error))
    axios.get('https://www.catchmyjob.in/php-react-subcategory/all-users.php')
    .then(response=>setsubCategories(response.data.users))
    .then(error=>console.log(error))
},[]);

const onddlChange=(e)=>{
    // alert(e.target.value);
 
    setcat(e.target.value);
  
}
const onddlChangesubcat=(e)=>{
    // alert(e.target.value);
 
    setsubcat(e.target.value);
  
} 
// const { selectedOption } = this.state;
    // const options=this.state.dd;
    return (
        
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>PostTitle</label>
                    <input placeholder='PostTitle' onChange={(e) => setPostTitle(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>PostDetails</label>
                    <input placeholder='PostDetails' onChange={(e) => setPostDetails(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>PostList</label>
                    <input placeholder='PostList' onChange={(e) => setPostList(e.target.value)}/>
                </Form.Field>
                {/* <Form.Field>
                    <label>Categoryid</label>
                    <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
                </Form.Field> */}
                {/* <Form.Field>
                    <label>SubCategoryid</label>
                    <input placeholder='SubCategoryid' onChange={(e) => setsubCategoryid(e.target.value)}/>
                </Form.Field> */}
               <Form.Field>
              <label>Category Id</label>
                <select className="form-control col-md-3" onChange={onddlChange}>
     <option vlaue="0">--Select User--</option>
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
                    <input placeholder='Status' onChange={(e) => setStatus(e.target.value)}/>
                </Form.Field>

              
                {/* <Form.Field>
                    <label>subCategoryName</label>
                    <input placeholder='subCategoryName' onChange={(e) => setsubCategoryName(e.target.value)}/>
                </Form.Field> */}
                <Form.Field>
                    <label>PostUrl</label>
                    <input placeholder='PostUrl' onChange={(e) => setPostUrl(e.target.value)}/>
                </Form.Field>
               
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
