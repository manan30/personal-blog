/**
 * @function parsePost
 * @param  {type} post {description}
 * @return {Object} {description}
 */
export const parsePost = (post) => {
  return {
    ...post.fields,
    id: post.sys.id,
    coverImage: {
      alt: post.fields.coverImage.fields.title,
      file: post.fields.coverImage.fields.file.url
    }
  };
};

/**
 * @function ParseRecentPosts
 * @param  {type} posts {description}
 * @return {type} {description}
 */
export const parseRecentPosts = (posts) => {
  return posts.map((post) => ({
    ...post.fields,
    ...post.sys
  }));
};
