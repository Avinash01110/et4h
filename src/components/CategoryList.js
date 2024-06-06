import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../services/operations/categoryAPI';
import { useNavigate } from 'react-router-dom';

const CategoryList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { categories, loading, error } = useSelector((state) => state.category);
  
    useEffect(() => {
      dispatch(getAllCategory());
    }, [dispatch]);
  
    const handleCategoryClick = (categoryId) => {
      navigate(`/category/${categoryId}`);
    };
  
    if (loading) return <p className="text-center mt-4">Loading...</p>;
    if (error) return <p className="text-center mt-4 text-red-500">Error: {error}</p>;
  
    return (
      <ul className="mt-4 text-black">
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <li 
              key={category._id} 
              onClick={() => handleCategoryClick(category._id)} 
              className="cursor-pointer py-2 px-4 mb-2 rounded-md bg-blue-500 text-black hover:bg-blue-600"
            >
              {category.name}
            </li>
          ))
        ) : (
          <p className="text-center mt-4">No categories available</p>
        )}
      </ul>
    );
};

export default CategoryList;
