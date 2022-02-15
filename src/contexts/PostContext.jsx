import axios from '../config/axios';
import { createContext, useState } from 'react';

const PostContext = createContext();

function PostContextProvider(props) {
    const [post, setPost] = useState([]);
    const [title, setTitle] = useState('');
    const [picture, setPicture] = useState('');
    const [showEdit, setShowEdit] = useState(false);

    // Get data profile
    const fetchPost = async (username) => {
        const res = await axios.get(`/post/${username}`);
        setPost(res.data.posts);
    };

    const addPost = async ({ title, picture }) => {
        if (title || picture) {
            const res = await axios.post('/post', {
                caption: title,
                pictureUrl: picture,
            });
            const nextPost = [res.data.post, ...post];
            setPost(nextPost);
        }
    };

    const updatePost = async (id, value, value2) => {
        const idx = post.findIndex((item) => item.id === id);
        const newPost = [...post];
        const res = await axios.put(`/post/${id}`, {
            caption: value,
            pictureUrl: value2,
        });
        newPost[idx] = res.data.post;
        setPost(newPost);
        setShowEdit(false);
    };

    const deletePost = async (id) => {
        const res = await axios.delete(`/post/${id}`);
        const newPost = post.filter((item) => item.id !== id);
        setPost(newPost);
    };

    return (
        <PostContext.Provider
            value={{
                title,
                setTitle,
                fetchPost,
                addPost,
                post,
                picture,
                setPicture,
                updatePost,
                deletePost,
                showEdit,
                setShowEdit,
            }}
        >
            {props.children}
        </PostContext.Provider>
    );
}

export default PostContextProvider;
export { PostContext };
