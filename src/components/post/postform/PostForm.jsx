import axios from '../../../config/axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { PostContext } from '../../../contexts/PostContext';
import './postform.css';

function PostForm() {
    const { addPost, title, setTitle, picture, setPicture } =
        useContext(PostContext);
    const { loading, setLoading } = useContext(AuthContext);

    const handleSubmitPost = (e) => {
        e.preventDefault();
        addPost({ title, picture });
        setTitle('');
        setPicture('');
    };

    const handleFileInputChange = async (e) => {
        setLoading(true);
        if (!e.target.value) return;

        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onloadend = async () => {
            await uploadImage(reader.result);
        };
        e.target.value = '';
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
        };
    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            const res = await axios.post('/upload', {
                data: base64EncodedImage,
            });
            setPicture(res.data.url);
            setLoading(false);
        } catch (err) {
            alert('File size too large.');
        }
    };

    return (
        <div
            className="modal fade"
            id="PostModal"
            tabIndex="-1"
            aria-labelledby="PostModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog ">
                <div className="modal-content postForm">
                    <form onSubmit={handleSubmitPost}>
                        <div className="modal-header ">
                            <h5
                                className="modal-title postTitle"
                                id="PostModalLabel"
                            >
                                Create Post
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            {picture ? (
                                <div className="previewpostphoto d-flex">
                                    <img
                                        src={picture}
                                        alt=""
                                        className="previewpostphoto"
                                    />
                                    <button
                                        type="button"
                                        className="btn deletePhotoPreview"
                                        onClick={() => setPicture('')}
                                    >
                                        <i className="bi bi-x-circle-fill"></i>
                                    </button>
                                </div>
                            ) : (
                                <></>
                            )}
                            <div className="mb-2">
                                <label
                                    htmlFor="caption"
                                    className="col-form-label postTitle"
                                >
                                    Caption :
                                </label>
                                <textarea
                                    className="form-control"
                                    id="caption"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="postFile"
                                    className="form-label"
                                >
                                    Select your photo :
                                </label>
                                <input
                                    className="form-control"
                                    type="file"
                                    id="postFile"
                                    onChange={handleFileInputChange}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            {picture && !loading ? (
                                <button
                                    className="btn postBtn"
                                    data-bs-dismiss="modal"
                                >
                                    Submit Post
                                </button>
                            ) : (
                                <button
                                    className="btn postBtn"
                                    data-bs-dismiss="modal"
                                    disabled
                                >
                                    Submit Post
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PostForm;
