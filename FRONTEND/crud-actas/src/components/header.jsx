import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="py-4 mb-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-blue-950">
          Actas App
        </Link>
        <div>
          <Link
            to="/nueva-acta"
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Nueva Acta
          </Link>
        </div>
      </div>  
    </nav>
  );
}
