import React from 'react';
import PostContent from '../postcontent/PostContent';
import './postcard.css';

function PostCard({ item }) {
    return (
        <>
            <div
                role="button"
                className="postCardContainer"
                style={{
                    backgroundImage: `url(${item.pictureUrl}) `,
                }}
                data-bs-toggle="modal"
                data-bs-target={`#modal${item.id}`}
            >
                <button
                    className="btn"
                    style={{ height: '50px', width: '60px' }}
                >
                    <i className="bi bi-heart-fill heartIcon" />
                </button>
            </div>
            <PostContent item={item} />
        </>
    );
}

export default PostCard;
