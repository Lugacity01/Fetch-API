import axios from "axios";




const API_FETCH_URL = 'https://jsonplaceholder.typicode.com';


export const fetchPost = async(page = 1, limit = 10) => {
    try {
        const response = await axios.get(`${API_FETCH_URL}/posts`, {
            params: {
        _page: page,
        _limit: limit,
      },
        })
        return response.data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return{error: true, message: "Failed to load" }
    }
}


// Show detailed view of the post 
export const fetchPostById = async (identifier) => {
    try {
        const response = await axios.get(`${API_FETCH_URL}/posts/${identifier}`)
        console.log("Fetch", response)
        return response.data
    } catch (error) {
        console.error("Error fetching posts:", error);
        return{error: true, message: "Failed to load" }
    }
}


// Fetch USERS 
export const fetchUsers = async () => {
    try {
        const res = await axios.get(`${API_FETCH_URL}/users`)
        return res.data
    } catch (err) {
        console.err("Error Fetching Users", err);
        return{err: true, message:"Failed to Fetch"}
    }
}


// Comment
export const fetchCommentsByPostId = async (identifier) => {
    try {
        const response = await axios.get(`${API_FETCH_URL}/posts/${identifier}/comments `)
        // console.log("Postcomment", response)
        return response.data
    } catch (error) {
        console.error("Error fetching posts:", error);
        return{error: true, message: "Failed to load" }
    }
}


// DELETE USERS 
export const deletePost = async (identifier) => {
    try {
        const res = await axios.delete(`${API_FETCH_URL}/posts/${identifier}) `)
        return res.data
    } catch (err) {
        console.err("Error Fetching Users", err);
        return{err: true, message:"Failed to Fetch"}
    }
}


// EDIT USERS 
export const updatePost = async (identifier, postData) => {
    try {
        const res = await axios.put(`${API_FETCH_URL}/posts/${identifier})`, postData)
        return res.data
    } catch (err) {
        // console.err("Error Fetching Users", err);
        return{err: true, message:"Failed to Fetch"}
    }
}


export const createPost = async (postData) => {
  const response = await axios.post(`${API_FETCH_URL}/posts`, postData);
  return response.data;
};


// ADVISE GENERATOR APP
export const adviseGenerator = async function () {
    const URL = `https://api.adviceslip.com/advice`

    try{
        const res = await axios.get(`${URL}`);
        console.log('advise app', res);
        return res.data;
    } catch(err){
        console.log('error', err);
    }
}