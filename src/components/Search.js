import React from 'react'
import { Grid, Form, Input } from 'semantic-ui-react'
import { useState } from 'react'

const Search = ({ setSearchQuery }) => { 
    const [value, setValue] = useState("")
    const onFormSubmit = () => {
     setSearchQuery(value)
    }
  return (
      <Grid columns={2} textAlign='center' className='search-box'>
        <Grid.Column>
            <h2 className='search-heading'>Search Recipes with <span style={{ color: '#2185D0'}}>Our Recipe</span>
             </h2>
             <h4 >Input Recipes seprated by comma</h4>
             <Form onSubmit={onFormSubmit}>
                <Input placeholder='tomato, Potato , Pizza' 
                action={{ icon: 'search', color: 'blue'}} 
                onChange={(e)=> setValue(e.target.value)}
                value={value}
                />
             </Form>
        </Grid.Column>
    </Grid>
  )
}

export default Search
