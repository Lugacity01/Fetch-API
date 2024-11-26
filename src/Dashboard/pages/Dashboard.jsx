import { useEffect, useState } from "react"
// import Sidebar from "../../Layout/Sidebar"
import { fetchPost, fetchUsers } from "../../services/api";
import { NavLink } from "react-router-dom";
// import Topbar from "../../Layout/Topbar";
// import Topbar from "../../Layout/Topbar";
// import Navbar from "../navbar/Navbar"; 
// import axios from "axios";


const Dashboard = () => {
  
  const [posts, setPosts] = useState([]);
  // const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState();
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState();
  const [filteredPosts, setFilteredPosts] = useState([]);

  // const postsPerPage = 10;

  useEffect(() => {
    async function loadPosts() {
      setLoading(true);

      try {
        // Fetch posts data
        const data = await fetchPost(currentPage);
        console.log("Fetch Data", data);
        if (data.error) {
          setError(data.message);
        } else {
          setPosts(data);
           setFilteredPosts(data);
        }

        // Fetch users data
        // const usersData = await fetchUsers();
        // console.log("Users data", usersData);
        // if (usersData.error) {
        //   setError(usersData.message);
        // } else {
        //   // Map users by their ID for easy access
        //   const usersMap = usersData.map((usersD) => ({
        //     id : usersD.id,
        //     name: usersD.name,
        //     username: usersD.username,
        //   }));

        //   console.log("usersMap", usersMap);
            
        //   setUsers(usersMap);
        // }
      }
      catch (err) {
        setError("Failed to fetch data.", err);
      } finally {
        setLoading(false); // End loading
      }
    }

    loadPosts();
  }, [currentPage]);


  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query);



    const filtered = posts.filter((post) => 
      post.title.toLowerCase().includes(query) ||
        post.body.toLowerCase().includes(query)
    );
      setFilteredPosts(filtered);
 }

  const handleNextPage = () => setCurrentPage(nextPage => nextPage + 1);
  const handlePrevPage = () => setCurrentPage(prevPage => prevPage - 1);
  
  return (


    <div className="  bg-gray-100">
 
        <div className="p-4 bg-white shadow-md flex items-center">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search by title..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="border p-2 rounded w-full outline-none"
            />
          </div>

      <main className="p-4">
        {loading ? "Loading....." :
          error ? "Network Error" : (
            <div>
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <NavLink key={post.id} to={`/posts/${post.id}`} className="block p-4 bg-white shadow-md rounded mb-4">
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="text-gray-700 mt-2">{post.body}</p>
                    {/* {users.find(user => user.id === post.id).name} */}
                    {/* <p className="text-gray-500 mt-4">Author: {users.find(user => user.id === post.id).name}</p> */}
                    {/* <p className="text-gray-500 mt-4">Username: {users.find(user => user.id === post.id).username}</p> */}
                    {/* {users[post.userId]?.name} */}
                  </NavLink>
                ))
              ) : (
                  <p>No posts match your search. </p>
              )

              }
              
          {/* Pagination Controls */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1 || loading}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={loading}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Next
            </button>
          </div>
            </div>
            
        )
        
        }

      </main>
    </div>
  )
}

export default Dashboard