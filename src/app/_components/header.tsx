import Link from "next/link";

const Header = () => {
  return (
    <p className="text-lg md:text-xl font-medium leading-tight mb-10 mt-10 flex items-center">
      <Link
        href="/"
        className="inline-flex items-center py-2 px-5 pr-6 rounded-full hover:text-white text-darkBlue border-darkBlue border-2 transition-all duration-200 bg-white hover:bg-darkBlue">
        <svg
          className="font-bold w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16">
          <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
        </svg>
        &nbsp;&nbsp;back to homepage
      </Link>
    </p>
  );
};

export default Header;
