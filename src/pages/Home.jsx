import React from 'react'
import Header from '../components/common/Header'
import { Button } from 'semantic-ui-react'
import { Link }  from 'react-router-dom'
import '../App.css';

const Home = () => {
  return (//this is Props
<Header title="Our Recipe" bgClass='bg-image'>
    <Button content='SEARCH RECIPIES'
    color='primary'
    as={Link} 
    to='/recipes'
    size='big'
    />
    </Header>
    

)
}

export default Home
