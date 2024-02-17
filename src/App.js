
import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4'
import MyRecipesComponent from './MyRecipesComponent';

function App() {


  const [MySearch,setMySearch]= useState("");
  const [MyRecipes,setMyRecipes]=useState([]);
  const [wordSubmitted, SetWordSubmitted] =useState("avocado")



  useEffect(()=>{
 const getRecipe = async ()=>{
  const responce = await fetch ('https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=93a2c545&app_key=45be8d723b6b1a7a62ee8b189ecb0604');
  const data= await responce.json();
  setMyRecipes(data.hits)
  console.log(data.hits)
 }
getRecipe()
},[wordSubmitted])


const MyRecipSearch = (e)=> {
console.log(e.target.value)
setMySearch(e.target.value)
}

const finalSearch =(e)=>{
e.preventDefault()
SetWordSubmitted(MySearch)
}

  return (
    <div className="App">
    <div className='container'>
      <video autoPlay muted loop >
        <source src={video} type='video/mp4'  />
      </video>
   <h1>Find a Recipe</h1>
   </div>

   <div className='container'>
     <form onSubmit={finalSearch}>
         <input className='search' placeholder='search...' onChange={MyRecipSearch} value={MySearch}/>
    </form>
</div>

<div className='container'>
     <button>
         <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
      </button>
</div>


{MyRecipes.map((element, index) => (
  <MyRecipesComponent  key={index}
  label={element.recipe.label} 
  image={element.recipe.image} 
  calories={element.recipe.calories} 
  ingredients={element.recipe.ingredientLines}/>
))}


    </div>
  );
}

export default App;
