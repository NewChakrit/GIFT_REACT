import axios from '../../../config/axios';
import React, { useRef } from 'react';
import { useContext } from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { AuthContext } from '../../../contexts/AuthContext';
import { UserContext } from '../../../contexts/UserContext';
import './changecoverpicture.css';

function ChangeCoverPicture() {
    const { coverUrl, setCoverUrl, setLoading, loading, user } =
        useContext(AuthContext);
    const { fetchUser } = useContext(UserContext);
    const inputEl = useRef();

    const handleFileInputChange = (e) => {
        e.preventDefault();
        setLoading(true);
        if (!e.target.value) return;

        const reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
        };
    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            const res = await axios.post('/upload', {
                data: base64EncodedImage,
            });
            await axios.patch(`/user/${user.id}`, { coverUrl: res.data.url });
            await setCoverUrl(res.data.url);
            fetchUser();
            setLoading(false);
        } catch (err) {
            alert('File size too large.');
        }
    };
    return (
        <div
            className="modal fade"
            id="ChangeCoverImgModal"
            tabIndex="-1"
            aria-labelledby="ChangeCoverImgModal"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-fullscreen-sm-down">
                <div className="modal-content modalContent">
                    <div className="p-4 d-flex justify-content-between">
                        <div className="backButtonModal">
                            <button
                                type="button"
                                className="btn "
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <MdOutlineKeyboardArrowLeft />
                            </button>
                        </div>
                    </div>

                    <div className="modal-body modalBody">
                        <div
                            style={{
                                margin: '0 0 40px',
                                fontSize: '2rem',
                            }}
                        >
                            Change cover Image
                        </div>
                        <div className="previewCoverImg">
                            <input
                                type="file"
                                className="form-control Input d-none"
                                ref={inputEl}
                                onChange={handleFileInputChange}
                            />
                            <img
                                src={
                                    coverUrl
                                        ? coverUrl
                                        : `https://res.cloudinary.com/dbtlgaii3/image/upload/v1644336153/Gift/Profile_avatar_placeholder_large_tafrpo.png`
                                }
                                alt="ProfileImg"
                                role="button"
                                onClick={() => inputEl.current.click()}
                            />
                        </div>

                        {loading ? (
                            <button
                                type="button"
                                className="btn btn-danger modalSubmitButton"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                disabled
                            >
                                Save Change
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="btn btn-danger modalSubmitButton"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                Save Change
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangeCoverPicture;
