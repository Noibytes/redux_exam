import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from './Slice/CounterSlice'
import { Card, Button } from 'react-bootstrap'

function Saved() {
const dispatch = useDispatch()
const SavedUsers = useSelector(state => state.UserReducer.SavedUsers)

return ( <> <h2 className='text-center fw-bold'>Saved Profiles</h2>

  {SavedUsers.map((st, index) => {
    return (

        <center>
            <Card style={{ width: '18rem' }} className='text-center'>
        <Card.Img variant="top" src={st.picture.large} />

        <Card.Body>
          <Card.Title>
            {st.name.first} {st.name.last}
          </Card.Title>

          <Button
            variant="danger"
            onClick={() => dispatch(removeUser(st.email))}>Remove</Button>
        </Card.Body>
      </Card>

        </center>
      
    )
  })}
</>

)
}

export default Saved
