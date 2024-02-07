
import { useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4'
import MyRecipesComponent from './MyRecipesComponent';

function App() {


  const [MySearch,setMySearch]= useState("");
  const [MyRecipes,setMyRecipes]=useState([]);

  // const MY_ID ="af7a0d97";
  // const MY_KEY = "%204e8696da3ba97e3073949460db305d40%09%E2%80%94";

  useEffect(()=>{
 const getRecipe = async ()=>{
  const responce = await fetch ('https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=af7a0d97&app_key=%204e8696da3ba97e3073949460db305d40%09%E2%80%94');
  const data= await responce.json();
  setMyRecipes(data.hits)
 }
getRecipe()
},[])


const MyRecipSearch = (e)=> {
console.log(e.target.value)
setMySearch(e.target.value)


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
     <form>
         <input className='search' placeholder='search...' onChange={MyRecipSearch} value={MySearch}/>
    </form>
</div>

<div className='container'>
     <button>
         <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
      </button>
</div>

{MyRecipes.map(element => (
  <MyRecipesComponent/>
))}


    </div>
  );
}

export default App;
