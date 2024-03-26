import React from 'react'
import {Menu} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {logo} from '../../constants/constant'

const NavBar = () => {
  return (
    <Menu borderless fixed='top'>
        <Menu.Item>
            <img src={logo} alt='logo' style={{height: 40,  width: 120 }}/>
        </Menu.Item>
        <Menu.Item name='Home' style={{ fontSize: 20 , fontWeight: 'bold'}} as={Link} to='/'/>
        <Menu.Item name='Recepies' style={{ fontSize: 20 , fontWeight: 'bold'}} as={Link} to='/recipes'/>
    </Menu>  
  )
}

export default NavBar;
