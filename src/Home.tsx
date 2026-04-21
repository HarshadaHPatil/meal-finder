import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [meal, setMeal] = useState("");
    const [result, setResult] = useState<any[]>([]); //We use [] so we can safely loop over results even before data comes from the API

    const navigate = useNavigate(); //useNavigate() is a React Router hook. navigate() is a React Router function used to move pages programmatically (using code, not UI links)

    function handleMeal() {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setResult(data.meals || []);
            });
    }

    function openRecipe(id: string) {
        navigate(`/meal/${id}`);
    }

    return (
        <div>
            <h1 className='flex justify-center m-5 text-center text-5xl bg-[#800020] p-5 text-white rounded'>
                  𝘔𝘦𝘢𝘭 𝘧𝘪𝘯𝘥𝘦𝘳 𐙚
            </h1>

            <div className='justify-center flex gap-6 mb-10'>
                <input
                    placeholder='What you wanna eat?'
                    className='px-5 py-4 rounded-full border border-black'
                    value={meal}
                    onChange={(e) => setMeal(e.target.value)}
                />

                <button
                    className='bg-green-500 text-white p-5 rounded-full font-xl'
                    onClick={handleMeal}
                >
                    Search
                </button>
            </div>

            <div className="bg-black text-white flex justify-center p-5 flex-wrap">
                {result.map((meal: any) => (
                    <div
                        key={meal.idMeal}
                        className="w-60 h-72 border m-4 p-4 rounded cursor-pointer hover:scale-105 transition flex flex-col items-center justify-between"
                        onClick={() => openRecipe(meal.idMeal)}
                    >
                        <img
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            className="w-full h-40 object-cover rounded"
                        />

                        <h2 className="text-center font-semibold mt-2 line-clamp-2">
                            {meal.strMeal}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;


//.map() takes the API result array and converts each item into UI elements — it does not perform searching, only rendering