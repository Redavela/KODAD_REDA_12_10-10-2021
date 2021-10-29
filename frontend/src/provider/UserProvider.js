const BASE_URL = 'http://localhost:3001/user';
/**
 * Fetch user info
 * @param {Number} id - id of user
 * @return {Promise} - Promise with user info
 */
export const getInfoUser = id => {
  return fetchInfo (id);
};
/**
 * Fetch user activities 
 * @param {Number} id - id of user
 * @return {Promise} - Promise with user info
 */
export const getInfoActivity = id => {
  return fetchInfo (id, 'activity');
};
/**
 * Fetch user info sessions 
 * @param {Number} id - id of user
 * @return {Promise} - Promise with user info
 */
export const getInfoSessions = id => {
  return fetchInfo (id, 'average-sessions');
};
/**
 * Fetch user daily score
 * @param {Number} id - id of user
 * @return {Promise} - Promise with user info
 */
export const getInfoScoreDay = id => {
  return fetchInfo (id, 'today-scores');
};
/**
 * Fetch user type of activities 
 * @param {Number} id - id of user
 * @return {Promise} - Promise with user info
 */
export const getInfoTypesActivities = id => {
  return fetchInfo (id, 'activities');
};
/**
 * Fetch user calorie, lipid, protein and carbohydrat count
 * @param {Number} id - id of user
 * @return {Promise} - Promise with user info
 */
export const getInfoKeyData = id => {
  return fetchInfo (id, 'key-data');
};
/**
 * Fetch user performance 
 * @param {Number} id - id of user
 * @return {Promise} - Promise with user info
 */
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
