import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [newsData, setNewsData] = useState([]);
    const [data, setData] = useState([]);
    const [blogs, setBlogs] = useState([]);

    // Fetch projects
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('http://localhost:5000/projects');
          const result = await res.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

    // Fetch news data
    useEffect(() => {
      fetch('http://localhost:5000/projects')
        .then(res => res.json())
        .then(data => {
          setNewsData(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);
    
    // Fetch blogs data from /blog API
    useEffect(() => {
      fetch('http://localhost:5000/blog')
        .then(res => res.json())
        .then(data => {
          setBlogs(data);
        })
        .catch(error => console.error('Error fetching blogs:', error));
    }, []);
  
    // Filter projects by category
    const getFilteredProjects = category => {
      return newsData.filter(item => item.category === category);
    };

    // Define authInfo object to be shared via context
    const authInfo = {
      getFilteredProjects,
      data,
      blogs,  // Expose blogs data to the context consumers
    };

    return (
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;
