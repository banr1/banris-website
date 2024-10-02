import Link from 'next/link';
import useIsJapanese from '@/lib/useIsJapanese';

const ConceptPostLink = ({ post }) => {
  const { isJapanese } = useIsJapanese();
  const prefix = isJapanese ? '/ja' : '';

  return (
    <Link href={`${prefix}/${post.slug}`}>
      <article key={post.id} className='mb-6 md:mb-8'>
        <header className='flex flex-col justify-between md:flex-row md:items-baseline'>
          <h2 className='text-lg md:text-xl font-medium mb-2 cursor-pointer text-[#337ab7] dark:text-gray-100 hover:underline'>
            {post.title}
          </h2>
        </header>
      </article>
    </Link>
  );
};

export default ConceptPostLink;
