export default function Header() {
  return (
    <header className="flex items-center justify-between p-8">
      <h1 className="text-4xl font-bold">Create Next App</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="https://nextjs.org/docs">Docs</a>
          </li>
          <li>
            <a href="https://nextjs.org/learn">Learn</a>
          </li>
          <li>
            <a href="">GitHub</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
