import React from 'react'
import axios from 'axios'
import { setUser,savedUsers,clearUsers } from './Slice/CounterSlice'
import { useSelector,useDispatch } from 'react-redux'


import { Card,Button } from 'react-bootstrap'


function Home() {
     const dispatch=useDispatch()
  const user=useSelector(state=>state.UserReducer.User)

  const generateuser=()=>{
    axios.get('https://randomuser.me/api/').then(response=>dispatch(setUser(response.data.results)))
  }

  return (
    <>
    <h1 className='text-center '>Random User Profile Generator </h1>
    <center> <button onClick={generateuser} className='btn btn-danger' >generate</button></center>
    
   
   <center className='home-g'>
    {user.map((st) => {
    return (
      <Card style={{ width: '18rem' }} className='text-center mt-4'>
        <Card.Img variant="top" src={st.picture.large} />

        <Card.Body>
          <Card.Title>
            {st.name.first} {st.name.last}
          </Card.Title>

          <Card.Text>{st.email}</Card.Text>
          <Card.Text>{st.gender}</Card.Text>
          <Card.Text>{st.location.country}</Card.Text>

          <Button variant="primary" onClick={() => dispatch(savedUsers(st))}>Save</Button>
        </Card.Body>
      </Card>
    )
  })}

  <Button onClick={() => dispatch(clearUsers())} variant="danger" className='mt-3'>
    Clear User</Button>

   </center>

      
    </>
  )
}

export default Home