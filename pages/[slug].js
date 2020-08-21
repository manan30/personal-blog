import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getPostBySlug } from '../contentful';
import styles from '../styles/Slug.module.css';

export default function Post() {
  const router = useRouter();
  const [postContent, setPostContent] = useState([]);
  const { slug } = router.query;

  useEffect(() => {
    (async function fetchContent() {
      const data = await getPostBySlug(slug);
      setPostContent(data);
    })();
  }, [slug]);

  console.log(postContent[0]);

  const content = documentToReactComponents(
    postContent[0]?.fields?.postContent
  );
  console.log(content);

  return (
    postContent.length > 0 && (
      <div className={styles.container}>
        <h1 className={styles.postTitle}>{postContent[0].fields.postTitle}</h1>
        <article>{}</article>
      </div>
    )
  );
}
