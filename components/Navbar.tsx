import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full border-b py-4 px-6 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">SADIA SAAD</Link>
      <nav className="flex gap-6">
        {/* <Link href="/about" className="hover:underline">About</Link> */}

      </nav>
    </header>
  );
}