import React from "react";
import { Link } from "react-router-dom";

interface IProduct {
    idMeal?: number,
    strMeal?: string,
    strMealThumb?: string,
}



export const MealItem: React.FC<IProduct> = ({ idMeal, strMeal, strMealThumb }) => {

    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={strMealThumb} alt="" />
            <div className="p-2 sm:p-3 md:p-4">
                <h5 className="mb-2 text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-white">{strMeal?.slice(0, 35)}</h5>
                <Link to={`/meal/${idMeal}`} className="inline-flex items-center py-1 px-2 md:py-2 md:px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Watch
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>
        </div>
    );
};
