import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button, Container} from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import {UserActions} from '../redux/actions/user.action'

const ProfilePage = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector((state)=>state.user.currentUser.data)
  const loading = useSelector((state)=>state.user.loading)
  console.log("this is currentuser",currentUser)
  let [someBoolean,SetsomeBoolean] = useState(true);
  let [form,setForm] = useState({
    name:currentUser && currentUser.data.name,
    avatarUrl:"",
  })
  useEffect(()=>{
    dispatch(UserActions.getUser())
  },[])
  const handleEditAvatar = (e)=>{
    e.preventDefault()
    window.cloudinary.openUploadWidget(
      {
        cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        upload_preset: process.env.REACT_APP_CLOUDINARY_PRESET,
        multiple: false,
      },
      function (error, result) {
        if (!error) {
          if (result.event === "success") {
            // setImage(result.info.url);
            setForm({...form,avatarUrl:result.info.url})
            console.log("done",result.info.url)
          }
        } else {
          console.log(error);
        }
      }
    )
  }
  const handleEdit = (e)=>{
    e.preventDefault();
    SetsomeBoolean(false)
  }
  const handleCancle = (e) =>{
    e.preventDefault();
    SetsomeBoolean(true)
  }
  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    const {name,avatarUrl} = form
   dispatch(UserActions.editUser({name,avatarUrl}))
   SetsomeBoolean(true) 
  }
  return (
    <div>
      {loading?(<h1 className="text-center">loading ...</h1>):(<>
        <h1 className="text-center">This is ProfilePage</h1>
      <Container>
      <Form onSubmit={handleSubmit}>
      <Button variant="primary" type="edit" onClick={handleEdit}>
        Edit Name
      </Button>
      <Button variant="info" type="edit" onClick={handleEditAvatar} disabled={someBoolean?true:false}>
        Edit avatar
      </Button>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Name"  name="name" disabled={someBoolean?true:false} value={someBoolean?currentUser && currentUser.data.name || '':null} onChange={handleChange}/>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="text" name="email" placeholder="Email" disabled value={currentUser && currentUser.data.email || ''} />
      </Form.Group>
      {someBoolean?null:(<>
      <Button variant="primary" type="submit">
       Submit
      </Button>
      <Button variant="light" type="cancle" onClick={handleCancle}>
       Cancel
      </Button></>)}
      </Form>
      </Container></>)}
     
    </div>
  );
};

export default ProfilePage;
