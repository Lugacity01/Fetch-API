import  { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deletePost, fetchCommentsByPostId, fetchPostById, fetchUsers } from '../../services/api';
// import Sidebar from '../../Layout/Sidebar';

function PostDetails() {
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [authors, setAuthors] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  // console.log('identity', useParams())
  const { ids } = useParams();

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const postData = await fetchPostById(ids);

      const users = await fetchUsers();

      const author = users.find(user => user.id === postData.id);
      const comments = await fetchCommentsByPostId(ids);
      setPost(postData);
      setAuthors(author);
      setComments(comments);
      setIsLoading(false);
    }
    loadData();
  }, [ids]);



  // const handleDelete = async () => {
  //   await deletePost(ids);
  //   setIsDeleting(true)
  //   navigate('/');
  // };

  const handleDelete = async () => {
    setIsDeleting(true); // Set to true before starting the delete process
    try {
      await deletePost(ids);
      navigate('/');
    } catch (error) {
      console.error("Failed to delete post:", error);
    } finally {
      setIsDeleting(false); // Ensure state resets even if there's an error
    }
  };

  return (
    <div className='flex min-h-screen bg-gray-100'>
      {/* <Sidebar /> */}

    <div className="container mx-auto">
      {isLoading ? (
        <p >Loading...</p>
      ) : (
        <>
          <div className='p-4'>
           <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
                  <p className="text-gray-600 text-sm mb-4">By: {authors?.name}</p>
                  <p className="text-gray-700 leading-relaxed">{post.body}</p>
            
           <div className="mt-6 flex space-x-4">
              <button
                onClick={() => navigate(`/edit-post/${ids}`)}
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
              >
                Edit
              </button>
              <button disabled={isDeleting}
                onClick={handleDelete}
                className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-colors"
              >
               {isDeleting ? "Deleting" : "Delete"} 
              </button>
                </div>
                
          </div>

          <h2 className="text-2xl font-semibold mt-8">Comments</h2>
          {comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200"
              >
                <h3 className="font-bold text-lg text-gray-800 mb-2">{comment.name}</h3>
                <p className="text-gray-600 leading-relaxed">{comment.body}</p>
              </div>
            ))}

          </div>
        </>
      )}
    </div>
    </div>
  );
}

export default PostDetails;
