import React from 'react';

function InterestCard({ item }) {
    return (
        <button
            className="d-flex"
            style={{ backgroundColor: '#f898a4', marginTop: '10px' }}
        >
            <div>
                <b>{item}</b>
            </div>
        </button>
    );
}

export default InterestCard;
