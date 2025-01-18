// src/store/recipeStore.js
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (id) => set(state => ({ recipes: state.recipes.filter(recipe => recipe.id !== id) })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe)
  })),
  setSearchTerm: (term) => set({ searchTerm: term }, (state) => {
    set({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      )
    });
  }),
}));

export default useRecipeStore;




//ORIGNAL
// import { create } from 'zustand';

// const useRecipeStore = create((set) => ({
//   recipes: [],
//   favorites: [],
//   recommendations: [],

//   // Add a recipe to favorites
//   addFavorite: (recipeId) => set((state) => ({
//     favorites: [...new Set([...state.favorites, recipeId])], // Prevent duplicates
//   })),

//   // Remove a recipe from favorites
//   removeFavorite: (recipeId) => set((state) => ({
//     favorites: state.favorites.filter((id) => id !== recipeId),
//   })),

//   // Generate personalized recommendations based on favorites
//   generateRecommendations: () => set((state) => {
//     const recommended = state.recipes.filter((recipe) =>
//       state.favorites.includes(recipe.id) && Math.random() > 0.5 // Mock recommendation logic
//     );
//     return { recommendations: recommended };
//   }),
// }));

// export { useRecipeStore };
