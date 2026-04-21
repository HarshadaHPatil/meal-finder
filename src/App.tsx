// import React from 'react'

// import { useState } from 'react'

// const App = () => {


//   const [meal, setMeal] = useState("");

//   const [result, setResult] = useState<any>(null);


//   function handleMeal() {
//     // console.log(meal);

//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setResult(data.meals);
//       })

//   }

//   return (
//     <div>
//       <h1 className='flex justify-center m-5 text-center text-5xl bg-[#800020] p-5 text-white rounded'>
//         🍔Meal Finder🍕</h1>

//       <div className='justify-center flex gap-6'>
//         <input placeholder='What you wanna eat?' className='px-5 py-4 rounded-full border border-black' value={meal}
//           onChange={(e) => setMeal(e.target.value)}></input>
//         <button className='bg-green-500 text-white p-5 rounded-full font-xl'
//           onClick={handleMeal}>Search</button>
//       </div>


//       <div className='flex justify-center p-5'>
//         {result && result.map((meal: any) => (
//         <div key={meal.idMeal} className="border m-4 p-4 rounded">
//           <img
//             src={meal.strMealThumb}
//             alt={meal.strMeal}
//             className="w-40"
//           />
//           <h2>{meal.strMeal}</h2>
//         </div>  
//       ))}
//       </div>
//     </div>
//   )
// }

// export default App  



import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home"; 
import Recipe from "./Recipe";

const App = () => {
  return (
    <Routes>
      {/* Home Page (Search Page) */}
      <Route path="/" element={<Home />} />

      {/* Recipe Page */}
      <Route path="/meal/:id" element={<Recipe />} />
    </Routes>
  );
};

export default App;