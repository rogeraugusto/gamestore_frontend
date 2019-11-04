export const TOKEN_KEY = null;
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUserData = JSON.parse(localStorage.getItem('USERDATA'));

export const signIn = async (token, userdata) => {
  await localStorage.setItem(TOKEN_KEY, token);
  await localStorage.setItem('USERDATA', JSON.stringify(userdata));
};

export const signOut = async () => {
  await localStorage.removeItem(TOKEN_KEY);
};
