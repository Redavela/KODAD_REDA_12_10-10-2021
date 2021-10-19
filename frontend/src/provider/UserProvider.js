const BASE_URL = 'http://localhost:3001/user';

export const getInfoUser = id => {
  return fetchInfo (id);
};

export const getInfoActivity = id => {
  return fetchInfo (id, 'activity');
};

export const getInfoSessions = id => {
  return fetchInfo (id, 'average-sessions');
};

export const getInfoScoreDay = id => {
  return fetchInfo (id, 'today-scores');
};

export const getInfoTypesActivities = id => {
  return fetchInfo (id, 'activities');
};

export const getInfoKeyData = id => {
  return fetchInfo (id, 'key-data');
};


export const getUserPerformance = id => {
  return fetchInfo (id, 'performance');
};
const fetchInfo = (id, route = undefined) => {
  const url = route ? `${BASE_URL}/${id}/${route}` : `${BASE_URL}/${id}`;

  return fetch (url)
    .then (response => response.json())
    .then (response => response.data)
    .catch(error => console.error('erreur des données'));
};
