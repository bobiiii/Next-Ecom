import Image from 'next/image';
import Link from 'next/link';
import logoImage from "../public/images/logo.jpg";
import cart from "../public/images/cart.png";
import { useState } from 'react';

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbackground">
      <div className="container-fluid">
        <Link href="/">
          <Image src={logoImage} alt="Logo" />
        </Link>

        <button onClick={toggleDropdown} className="navbar-toggler" type="button"  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={` navbar-collapse ${isDropdownOpen ? 'collapse' : 'show'}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
            <li className="nav-item dropdown">
              <Link href="as" id="navbarDropdown" role="button"  aria-expanded="false">
                Shop
              </Link>
              <ul className={`dropdown-menu ${isDropdownOpen ? '' : ''}`} aria-labelledby="navbarDropdown">
                <li><Link href="as" >
                    {/* <a className="dropdown-item"> */}
                        Action
                        {/* </a> */}
                        </Link></li>
                <li><Link href="#">
                    {/* <a className="dropdown-item"> */}
                        Another action
                        {/* </a> */}
                        </Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link href="#">
                    {/* <a className="dropdown-item"> */}
                        Something else here
                        {/* </a> */}
                        </Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link href="#" id="navbarDropdown" role="button"  aria-expanded="false">
                Brands
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link href="#">
                    {/* <a className="dropdown-item"> */}
                        Action
                        {/* </a> */}
                        </Link></li>
                <li><Link href="#">
                    {/* <a className="dropdown-item"> */}
                        Another action
                        {/* </a> */}
                        </Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link href="#">
                    {/* <a className="dropdown-item"> */}
                        Something else here
                        {/* </a> */}
                        </Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link href="#" id="navbarDropdown" role="button"  aria-expanded="false">
                HelpWith
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link href="#">
                    {/* <a className="dropdown-item"> */}
                        Action
                        {/* </a> */}
                    </Link></li>
                <li><Link href="#">
                    {/* <a className="dropdown-item"> */}
                        Another action
                        {/* </a> */}
                        </Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link href="#">
                    {/* <a className="dropdown-item"> */}
                        Something else here
                        {/* </a> */}
                        </Link></li>
              </ul>
            </li>

            <div className="navsectionmain ms-4">
              <div className="nav-item navsection">
                <p>New</p>
                |
                <p> speacials</p>
                |
                <p> Try</p>
                |
                <p> Best</p>
                <p>Sellers</p>
              </div>
            </div>
          </ul>

          <form className="d-flex me-2">
            <input className="form-control me-3" type="search" placeholder="Search iHerb Products" aria-label="Search" />
            <button className="btn btn-outline-light btnspace" type="submit">Sign in</button>
          </form>

          <div className="bstimg">
            <Image src={cart} alt="Cart" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
