import React from 'react';
import Auth from '../../utils/auth';
import { Nav, Bars, NavMenu, NavLink, NavBtn } from './NavbarEl';
import { Dropdown } from 'react-bootstrap';
import "./nav.css";

const Navbar = ({ toggle }) => {
    const loggedIn = Auth.loggedIn();
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <>
            <Nav className="navbar-box">
                <NavLink to="/">
                    <div className="navbar-div">
                        <h2>PokeDex</h2>
                    </div>
                </NavLink>
                {/* <Dropdown id="dropdown">
                    <Dropdown.Toggle className='drop-btn'>Get Stats</Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            
                        </Dropdown.Item>
                        {/* <Dropdown.Item>
                            <NavLink to="/mountain-bike">
                                Mountain bike
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <NavLink to="/trail-run">
                                Trail Run
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <NavLink to="/strava">
                                Strava Data
                            </NavLink>
                        </Dropdown.Item> */}
                {/* </Dropdown.Menu>
                </Dropdown>  */}
                <Bars onClick={toggle} />
                <nav className="text-center">
                    <NavMenu>
                        {Auth.loggedIn() ? (
                            <>
                                <Bars onClick={toggle} />

                                <NavLink to="/social">
                                    Social Feed
                                </NavLink>
                                <NavLink to="/pokedex">
                                    pokedex
                                </NavLink>
                                {/* <NavLink to="/friends">
                                    Find Friends!
                                </NavLink> */}

                                <NavLink to="/chat">
                                    Chat
                                </NavLink>
                                <a id="logout" href="/" onClick={logout}>
                                    Logout
                                </a>
                            </>
                        ) : (
                            <>
                                <NavLink to="/login">Login</NavLink>
                            </>
                        )}

                    </NavMenu>
                </nav>

                {/* <NavBtn>
          <Button to='/login' primary='true'>
              Login
          </Button>
      </NavBtn> */}
            </Nav>
        </>
    );
}


export default Navbar;