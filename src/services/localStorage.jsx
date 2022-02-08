const TOKEN = 'token';
const setToken = (token) => localStorage.setItem(TOKEN, token);
const getToken = () => localStorage.getItem(TOKEN);
const removeToken = () => localStorage.removeItem(TOKEN);

const getRole = () => {
    if (getToken()) {
        return 'user';
    }
    return 'guest';
};

export { setToken, getToken, removeToken, getRole };

// completed
