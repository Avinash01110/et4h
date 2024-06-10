import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategoryPage } from '../services/operations/categoryAPI';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        console.log("Fetching data for categoryId:", categoryId);
        const data = await getCategoryPage(categoryId);
        if (!data) {
          throw new Error('Could not fetch category page');
        }
        console.log("Fetched data:", data); // Log the fetched data here
        setCategoryData(data);
      } catch (error) {
        console.error("Error fetching category data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchCategory();
  }, [categoryId]);
  
  // Or, log the categoryData state after it's updated
  console.log("Category data:", categoryData);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{categoryData.selectedCategory.name}</h2>
      <h3>Projects:</h3>
      <ul>
        {categoryData.selectedCategory.projects.map((project) => (
          <li key={project._id}>{project.title}</li>
        ))}
      </ul>
      <h3>Other Category:</h3>
      <p>{categoryData.differentCategory.name}</p>
    </div>
  );
};

export default CategoryPage;
