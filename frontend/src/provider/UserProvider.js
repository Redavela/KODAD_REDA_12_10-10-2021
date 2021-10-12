const BASE_URL = 'http://localhost:3001/user';

export const getInfoUser = id => {
  return fetch (`${BASE_URL}/${id}`)
    .then (response => response.json ())
    .then (response => response.data);
};

