import axios from '../../config/axios';
import React, { useContext, useEffect, useState } from 'react';
import CardProfile from '../../components/Profile/cardprofile/CardProfile';
import { UserContext } from '../../contexts/UserContext';

import './home.css';

function Home() {
    const { userData, value, selectGender, isFilter } = useContext(UserContext);
    const [filteredUser, setFilteredUser] = useState([]);
    const [allUserData, setAllUserData] = useState([]);

    useEffect(() => {
        const fetchAllUser = async (id) => {
            const res = await axios.get(`/user/all/${id}`);
            setAllUserData(res.data.sortedUser);
        };
        fetchAllUser(userData.id);
    }, []);

    useEffect(() => {
        const filteredUser = allUserData.filter(
            (user) =>
                user.About.age > value[0] &&
                user.About.age < value[1] &&
                user.About.gender === selectGender
        );
        setFilteredUser(filteredUser);
    }, [value, selectGender]);

    return (
        <div className="homePage">
            {(isFilter ? filteredUser : allUserData).map((item) => {
                return <CardProfile item={item} key={item.id} />;
            })}
        </div>
    );
}

export default Home;
