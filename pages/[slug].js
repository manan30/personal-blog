import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getPostBySlug } from '../contentful';

export default function Post() {
  const router = useRouter();
  const [postContent, setPostContent] = useState();
  const { slug } = router.query;

  useEffect(() => {
    (async function fetchContent() {
      const data = await getPostBySlug(slug);
      setPostContent(data);
    })();
  }, [slug]);

  return <p>Post: {slug}</p>;
}
