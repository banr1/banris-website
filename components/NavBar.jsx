import useIsJapanese from '@/lib/useIsJapanese';
import LangSwitcher from './LangSwitcher';
import Link from 'next/link';

export default function NavBar() {
  const { isJapanese } = useIsJapanese();
  const prefix = isJapanese ? '/ja' : '';

  const links = [
    { id: 0, name: 'Blog', to: `${prefix}/blog` },
    { id: 1, name: 'Notes', to: `${prefix}/notes` },
  ];
  return (
    <div className='flex flex-row flex-shrink-0 items-center'>
      <ul className='flex flex-row pr-4'>
        {links.map(link => (
          <li key={link.id} className='block ml-4 text-gray-700 dark:text-gray-50 nav'>
            <Link href={link.to} target={link.external ? '_blank' : null}>
              {link.name}
            </Link>
          </li>
        ))}
        <LangSwitcher />
      </ul>
    </div>
  );
}
