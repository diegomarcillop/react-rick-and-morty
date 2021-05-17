const apiURL = process.env.REACT_APP_API_URL;

class Api {
  async get(url, params) {
    url = new URL(`${apiURL}${url}`);

    if (params) {
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key]),
      );
    }
    return fetch(url, {
      method: 'GET',
      headers: {},
    })
    .then(async (response) => {
      return await response.json();
    })
    .catch((err) => err);
  }
}
export default new Api();