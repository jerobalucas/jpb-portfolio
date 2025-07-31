import { Link } from "react-router-dom";
import { TriangleAlert } from "lucide-react";

const NotFound = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-screen bg-gray-900/50">
      <TriangleAlert color=""/>
      <h1 className="text-white text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">This page does not exist</p>
      {/* <Link to="/" className=''></Link> */}
      <Link to='/' className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center">
        Go to Home
      </Link>
    </section>
  );
};

export default NotFound;
