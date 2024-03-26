import React from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'
import RecipeListItem from './RecipeListItem'

const RecipeList = ({ recipes, searchQuery }) => {
  return (
    <Container>
        <Header 
        size='huge'
        content={ `RECIPE LIST FOR ${searchQuery}`}
        textAlign='center'
        />
        <Grid columns={4} doubling>
            {
                recipes && recipes.map(recipe =>(
                    <Grid.Column>
                        <RecipeListItem recipe={recipe}/>
                    </Grid.Column>
                ))
            }
        </Grid>
    </Container>
  )
}

export default RecipeList
