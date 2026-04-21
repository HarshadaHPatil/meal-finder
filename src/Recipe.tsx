import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Recipe() {
    const { id } = useParams();  // URL madhun values (parameters) gheycha tool ahe

    const [meal, setMeal] = useState<any>(null);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((res) => res.json())
            .then((data) => {
                setMeal(data.meals ? data.meals[0] : null);
            });
    }, [id]);

    if (!meal) {
        return <div className="p-5 text-center text-4xl font-bold">Loading...</div>;
    }

    return (
        <div className=" w-full">

            {/* HERO IMAGE SECTION */}
            <div className="relative mt-4 w-full h-72">

                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-full h-full object-cover"
                />

                {/* DARK OVERLAY */}
                {/* <div className="absolute inset-0 bg-black/40"></div> */}

                {/* TITLE ON IMAGE */}
                <h1 className="absolute bottom-4 left-4 text-3xl font-bold text-white">
                    {meal.strMeal}
                </h1>
            </div>

            {/* CONTENT SECTION */}
            <div className="p-5">

                
                {/* Recipe*/}
                <h2 className="text-3xl font-bold mt-4">Recipe</h2>

                <p className="mt-4 text-gray-700">
                    {meal.strInstructions}
                </p>

                {/* YouTube Button */}
                {meal.strYoutube && (
                    <a
                        href={meal.strYoutube}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="mt-7 bg-blue-600 text-white px-6 py-3 rounded-full">
                            Video Instructions
                        </button>
                    </a>
                )}
            </div>
        </div>
    );
}

export default Recipe;