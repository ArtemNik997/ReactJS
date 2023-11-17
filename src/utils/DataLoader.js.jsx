const serverUrl = "https://jsonplaceholder.typicode.com/";

export class Api {
  static async getUsers() {
    return await get("users");
  }

  static async getAlbums() {
    return await get("albums");
  }

  static async getUser({ id }) {
    return await get(`users/${id}`);
  }

  static async getUserAlbums(filters) {
    const query = new URLSearchParams(filters).toString();
    console.log(serverUrl + `albums?${query}`);
    return await get(`albums?${query}`);
  }

  static async getAlbum({ id }) {
    return await get(`albums/${id}`);
  }

  static getPhotos(filters) {
    const query = new URLSearchParams(filters).toString();
    console.log(serverUrl + `photos?${query}`);
    return get(`photos?${query}`);
  }
}

const get = async (url) => {
  const response = await fetch(`${serverUrl}/${url}`);

  if (!response.ok) {
    console.log("response not ok 404");
    throw new Response("", { status: 404 });
  }

  const obj = await response.json();
  return obj;
};
