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

export const parseRecentPosts = (posts) => {
  return posts.map((post) => ({
    ...post.fields,
    ...post.sys
  }));
};
