// src/components/RecipeList.jsx
import React from 'react';
import useRecipeStore from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes available. Try adjusting your search criteria!</p>
      ) : (
        filteredRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;





//ORIGINAL
// import { useRecipeStore } from './recipeStore';
// import { Link } from 'react-router-dom';

// const RecipeList = () => {
//   const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

//   return (
//     <div>
//       {filteredRecipes.map((recipe) => (
//         <div key={recipe.id}>
//           <Link to={`/recipe/${recipe.id}`}>
//             <h3>{recipe.title}</h3>
//           </Link>
//           <p>{recipe.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RecipeList;
