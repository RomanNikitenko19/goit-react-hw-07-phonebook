const BASE_URL = "https://61dc6fb5591c3a0017e1a92d.mockapi.io/";

const fetchData = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}/${path}`, options);
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

const getUtterContacts = (endpoint, options) => fetchData(endpoint, options);

const saveContact = (endpoint, elem) => {
  const options = {
    method: "POST",
    body: JSON.stringify(elem),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  return fetchData(endpoint, options);
};

const deleteContact = (endpoint, id) => fetchData(`${endpoint}/${id}`, { method: "DELETE", });

export { getUtterContacts, saveContact, deleteContact };