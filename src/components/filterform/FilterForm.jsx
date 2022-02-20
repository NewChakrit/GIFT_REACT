import React, { useContext, useState } from 'react';
import './filterform.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { UserContext } from '../../contexts/UserContext';

function valuetext(value) {
    return `${value}°C`;
}

function FilterForm() {
    const { setValue, setSelectGender, setIsFilter, userData } =
        useContext(UserContext);
    const [tempValue, setTempValue] = useState([20, 37]);
    const [temp, setTemp] = useState(
        userData.About.gender === 'male' ? 'female' : 'male'
    );

    const handleSubmitFilterForm = (e) => {
        e.preventDefault();
        setValue(tempValue);
        setSelectGender(temp);
        setIsFilter(true);
    };

    return (
        <div
            className="modal fade"
            id="FilterModal"
            tabIndex="-1"
            aria-labelledby="FilterModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog ">
                <div className="modal-content logoutForm">
                    <form onSubmit={handleSubmitFilterForm}>
                        <div className="modal-header ">
                            <h5
                                className="modal-title logoutTitle"
                                id="FilterModalLabel"
                            >
                                Filter
                            </h5>
                        </div>
                        <div className="modal-body">
                            <div>Find for</div>
                            <select
                                className="form-select select-gender"
                                aria-label="Default select example"
                                value={temp}
                                onChange={(e) => setTemp(e.target.value)}
                            >
                                <option value="male">Man</option>
                                <option value="female">Woman</option>
                                <option value="nonbinary">Other</option>
                            </select>
                            <div
                                style={{
                                    marginTop: '20px',
                                    marginBottom: '10px',
                                }}
                            >
                                Setting age range
                            </div>
                            <Box sx={{ width: 300 }}>
                                <Slider
                                    getAriaLabel={() => 'Temperature range'}
                                    value={tempValue}
                                    onChange={(event, newValue) => {
                                        event.preventDefault();
                                        setTempValue(newValue);
                                    }}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                />
                            </Box>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={() => setIsFilter(false)}
                            >
                                Clear
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary logoutBtn"
                                data-bs-dismiss="modal"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FilterForm;
