import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../Layout/Sidebar";
import { createPost, fetchPostById, updatePost } from "../../services/api";
import { useState } from "react";

const CreateEditPost = () => {
    const { ids } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');


    // This will get the value for us
    if (ids) {
        fetchPostById(ids).then(data => {
            setTitle(data.title);
            setBody(data.body);
        });
    }


    // This will handle sumit or update the value get from the ids 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (ids) {
                await updatePost(ids, { title, body });
                setSuccessMessage('Post updated successfully!');
            } else {
                await createPost({ title, body, userId: 1 });
                setSuccessMessage('Post created successfully!');
            }
            setTimeout(() => {
                setSuccessMessage('');
                navigate('/');
            }, 2000); // Redirect after 2 seconds
        } catch (error) {
            console.error("Error:", error);
            setSuccessMessage('An error occurred while processing your request.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex min-h-screen bg-gray-100 p-4'>
            {/* <Sidebar /> */}

            <div className="container p-4 mx-auto">
                <h1 className="text-3xl font-bold">{ids ? "Edit a post" : "Create a post"}</h1>
                
                {successMessage && (
                    <div className="p-4 mb-4 text-green-800 bg-green-100 border border-green-300 rounded">
                        {successMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="mt-4">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="block w-full p-2 mb-4 border"
                        placeholder="Title"
                        required
                    />
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className="block w-full p-2 mb-4 border"
                        placeholder="Body"
                        required
                    />
                    <button
                        disabled={loading}
                        type="submit"
                        className={`text-white ${loading ? "px-4 py-2 bg-blue-300" : "px-4 py-2 bg-blue-500"}`}
                    >
                        {loading ? "Loading....." : ids ? "Update Post" : "Create Post"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateEditPost;
