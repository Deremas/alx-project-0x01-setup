import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo/Title */}
        <h3 className="font-bold text-2xl">
          <Link
            href="/"
            className="no-underline text-white hover:text-gray-200 transition-colors"
          >
            Daily Contents
          </Link>
        </h3>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-9 list-none">
            <li>
              <Link
                href="/posts"
                className="no-underline text-white hover:text-gray-200 transition-colors"
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                href="/users"
                className="no-underline text-white hover:text-gray-200 transition-colors"
              >
                Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
