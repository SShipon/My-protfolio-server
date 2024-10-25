import { div } from 'framer-motion/client';
import React, { useState } from 'react';

const BlogFrom = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      description,
    };
    console.log(newProduct, "blog database add");

    // Post data to the provided URL
    fetch('http://localhost:5000/blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Product added:', data);
        // Reset the input fields after submitting
        alert('Product added successfully!');
        setTitle('');
        setDescription('');
      })
      .catch(error => console.error('Error adding product:', error));
  };

  return (
    <div className='lg:p-20 pt-20'>
      <div>
        <form onSubmit={handleAddProduct} className="w-full max-w-lg mx-auto p-4 rounded-lg shadow-md bg-slate-900">
            <h4 className='text-2xl my-8'>Write Your Blog Title</h4>
          <div className="mb-4">
            
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter product title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900"
            />
          </div>

          <div className="mb-4">
          
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              placeholder="Enter product description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-900"
            />
          </div>

          <button type="submit" className="about__hero__btn about__hero__btn:hover gradient-border  font-bold">
                Blog Post <i className="fa-solid fa-angles-right"></i>
              </button>
        </form>
      </div>
    </div>
  );
};

export default BlogFrom;
