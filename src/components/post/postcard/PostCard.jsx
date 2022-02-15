import axios from '../../../config/axios';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostContext } from '../../../contexts/PostContext';
import { UserContext } from '../../../contexts/UserContext';
import PostContent from '../postcontent/PostContent';
import './postcard.css';

function PostCard({ item }) {
    const { userData } = useContext(UserContext);
    const { fetchPost } = useContext(PostContext);
    const { username } = useParams();
    const [isLike, setIsLike] = useState(
        item.Likes.findIndex((item) => item.userId === userData.id) !== -1
    );

    const likePost = async () => {
        try {
            const res = await axios.post(`/post/like/${item.id}`);
            setIsLike(true);
            fetchPost(username);
        } catch (err) {
            console.log(err.message);
        }
    };

    const unLikePost = () => {
        axios.delete(`/post/like/${item.id}`).then((res) => {
            setIsLike(false);
            fetchPost(username);
        });
    };
    return (
        <>
            <div
                className="postCardContainer"
                style={{
                    backgroundImage: `url(${item.pictureUrl}) `,
                }}
                data-bs-toggle="modal"
                data-bs-target={`#modal${item.id}`}
            >
                {isLike ? (
                    <i
                        className="bi bi-heart-fill heartIcon"
                        style={{
                            height: '50px',
                            width: '60px',
                        }}
                    />
                ) : (
                    <></>
                )}
            </div>
            <PostContent
                item={item}
                likePost={likePost}
                unLikePost={unLikePost}
                isLike={isLike}
                setIsLike={setIsLike}
            />
        </>
    );
}

export default PostCard;
