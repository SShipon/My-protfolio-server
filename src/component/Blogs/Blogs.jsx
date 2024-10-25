import { useContext } from "react";
import { AuthContext } from "../../context/useContextProjects";


const Blogs = () => {
  const { blogs } = useContext(AuthContext);
  console.log(blogs)
  return (
    <div>
      <h2>Blog List</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
