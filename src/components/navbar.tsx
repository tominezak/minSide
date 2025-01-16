export const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Website</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:underline">
              Om meg
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Prosjekter
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
