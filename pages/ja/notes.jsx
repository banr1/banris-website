import { clientConfig } from '@/lib/server/config';

import Container from '@/components/Container';
import Pagination from '@/components/Pagination';
import { getAllPages } from '@/lib/notion';
import { useConfig } from '@/lib/config';
import NotePostLink from '@/components/NotePostLink';

export default function Notes({ postsToShow, page, showNext }) {
  const { title, description } = useConfig();

  return (
    <Container title={title} description={description}>
      {postsToShow.map(post => (
        <NotePostLink key={post.id} post={post} />
      ))}
      {showNext && <Pagination page={page} showNext={showNext} blogOrNotes={'notes'} />}
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPages({ allowedTypes: ['Note'], allowedStatuses: ['Published'], allowedLang: 'ja' });
  const postsToShow = posts.slice(0, clientConfig.postsPerPage);
  const totalPosts = posts.length;
  const showNext = totalPosts > clientConfig.postsPerPage;
  return {
    props: {
      page: 1, // current page is 1
      postsToShow,
      showNext,
    },
    revalidate: 1,
  };
}
