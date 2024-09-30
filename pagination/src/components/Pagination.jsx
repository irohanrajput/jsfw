import React, { useState, useEffect } from "react";
import axios from "axios";

const PaginationExample = () => {
  // State to store data, loading status, and current page
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(50); // 10 posts per page

  // Fetch data from API
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get the current posts for the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Create page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <h1>Posts</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ul className="list-group">
          {currentPosts.map((post) => (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          ))}
        </ul>
      )}

      {/* Pagination */}
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="#!"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default PaginationExample;
