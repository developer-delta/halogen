import React from "react";

function NavBar() {
  const [openNav, setNavOpen] = React.useState(false);

  return (
    <div>
      <nav>
        <button onClick={() => setNavOpen(!openNav)}>
          {openNav ? (
            <div className="px-7">
              <img
                className="h-2.5 mt-1.5 float-left "
                src="/images/up_caret.png"
                alt="Up_caret icon"
              />
              <strong className="ml-2">Menu</strong>
            </div>
          ) : (
            <div className="px-7">
              <img
                className="h-6 float-left"
                src="/images/hamburger-icon.png"
                alt="Hamburger's icon"
              />
              <strong className="ml-1">Menu</strong>
            </div>
          )}
        </button>
      </nav>
      <div className="absolute -bottom-6 bg-black w-full">
        {openNav && (
          <ul className="flex space-x-6 ml-7">
            <li>
              <a href="x">about</a>
            </li>
            <li>
              <a href="x">compatibility</a>
            </li>
            <li>
              <a href="x">social</a>
            </li>
            <li>
              <a href="x">reviews</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;
