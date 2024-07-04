import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { getSinglePost } from '../services/operations/postAPI';

const SinglePost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const result = await getSinglePost(postId, toast);
        console.log(result);  
        if (result) {
          setPost(result);
          setError(null);
        } else {
          setError("Could not fetch the post.");
        }
      } catch (error) {
        setError("Failed to fetch post.");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!post) {
    return <div>No post found.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-2">{post.content}</p>
      <p className="mt-2"><strong>Short Description:</strong> {post.shortDesc}</p>
      <p className="mt-2"><strong>Grant:</strong> {post.grant}</p>
      <p className="mt-2"><strong>Category:</strong> {post.category.name}</p>
      
      <div className="mt-4">
        <strong>References:</strong>
        <ul className="list-disc ml-5">
          {post.references.map((reference, index) => (
            <li key={index}>{reference}</li>
          ))}
        </ul>
      </div>
      
      <div className="mt-4">
        <strong>Contributors:</strong>
        <ul className="list-disc ml-5">
          {post.contributors.map((contributor) => (
            <li key={contributor._id}>{contributor.name}</li>
          ))}
        </ul>
      </div>
      
      <div className="mt-4">
        <strong>Sub Posts:</strong>
        <ul className="list-disc ml-5">
          {post.subPost.map((subPost) => (
            <div>

            <li key={subPost._id}>{subPost.sectionName}
            <li key={subPost._id}>{subPost.subSectionContent}</li></li>
           
            </div>
          ))}
        </ul>
      </div>
      
      <div className="mt-4">
        <strong>Milestones:</strong>
        <ul className="list-disc ml-5">
          {post.milestones.map((milestone) => (
            <li key={milestone._id}>{milestone.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SinglePost;
