import { useRouter } from 'next/router';

function Post() {
  const router = useRouter();
  const data = router;

  console.log(data);

  return <p>Post: {}</p>;
}

export default Post;
