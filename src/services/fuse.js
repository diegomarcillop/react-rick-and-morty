import Fuse from "fuse.js";

export const search = (body, keys, query) => {
  const fuse = new Fuse(body, {
    keys,
    includeScore: false,
  });

  const result = fuse.search(query);
  return result;
};
