import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from "../Footer";

const recipes = [
  { 
    id: 1, 
    name: 'Brownie', 
    description: 'Delicious brownie recipe', 
    ingredients: ['Ingredient 1', 'Ingredient 2'], 
    preparation: [
      'Step 1: Preheat the oven to 350°F (175°C).',
      'Step 2: Mix the ingredients together.',
      'Step 3: Bake for 25 minutes.'
    ],
    imageUrl: '/images/bro.jpg'
  },
  { 
    id: 2, 
    name: 'Span', 
    description: 'Delicious recipe 2', 
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    preparation: [
      'Step 1: Prepare the sauce.',
      'Step 2: Cook the ingredients.',
      'Step 3: Serve hot.'
    ],
    imageUrl: '/images/span.jpg'
  },
  { 
    id: 3, 
    name: 'oat bran', 
    description: 'Delicious recipe 3', 
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    preparation: [
      'Step 1: Prepare the sauce.',
      'Step 2: Cook the ingredients.',
      'Step 3: Serve hot.'
    ],
    imageUrl: '/images/egg.jpg'
  },
  { 
    id: 4, 
    name: 'Fruit Pizza', 
    description: 'Delicious recipe 4', 
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    preparation: [
      'Step 1: Prepare the sauce.',
      'Step 2: Cook the ingredients.',
      'Step 3: Serve hot.'
    ],
    imageUrl: '/images/Pizza.jpg'
  },
  { 
    id: 5, 
    name: 'Chicken Tinga', 
    description: 'Delicious recipe 5', 
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    preparation: [
      'Step 1: Prepare the sauce.',
      'Step 2: Cook the ingredients.',
      'Step 3: Serve hot.'
    ],
    imageUrl: '/images/Tinga.jpg'
  },
  { 
    id: 6, 
    name: 'Egg Bosch', 
    description: 'Delicious recipe 6', 
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    preparation: [
      'Step 1: Prepare the sauce.',
      'Step 2: Cook the ingredients.',
      'Step 3: Serve hot.'
    ],
    imageUrl: '/images/omlet.webp'
  },
  { 
    id: 7, 
    name: 'Sichuhan spicy Noodles', 
    description: 'Delicious recipe7', 
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    preparation: [
      'Step 1: Prepare the sauce.',
      'Step 2: Cook the ingredients.',
      'Step 3: Serve hot.'
    ],
    imageUrl: '/images/Fried.jpg'
  },
  { 
    id: 8, 
    name: ' Honey Cheese Burger', 
    description: 'Delicious recipe7', 
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    preparation: [
      'Step 1: Prepare the sauce.',
      'Step 2: Cook the ingredients.',
      'Step 3: Serve hot.'
    ],
    imageUrl: '/images/honey.webp'
  },
];

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));
  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <>
      <div className='container'>
        <div>
         <h2 className='h2'> Recipes</h2>
         <p></p>
        </div>
        <h3 className='recname'>{recipe.name}</h3>
        <img src={recipe.imageUrl} alt={recipe.name} className='img-fluid recimg' style={{width:'200px', height:'200px'}} />
        <p>{recipe.description}</p>
        <h3 className='ing'>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3 className='pre'>Preparation</h3>
        <div>
          {recipe.preparation.map((step, index) => (
            <p className='recstep' key={index}>{step}</p>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RecipeDetail;
