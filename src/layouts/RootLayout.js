import { NavLink, Outlet } from 'react-router-dom'
// import Home from '../Home'
import '../Sidebar.css'; 

export default function RootLayout({ children }) {
    return (
        <div>
            <div className="root-layout">

            <aside className="sidebar">
                <nav className="sidebar__nav">
                    
                        <li>
                            <NavLink to="/Home" className="sidebar__nav__link">
                                <i className="material-icons">palette</i>
                                <span className="sidebar__nav__text">Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Portraits" className="sidebar__nav__link">
                                <i className="material-icons">account_box</i>
                                <span className="sidebar__nav__text">Portraits in Watercolour</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className="sidebar__nav__link">
                                <i className="material-icons">query_builder</i>
                                <span className="sidebar__nav__text">Previous Commissions</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className="sidebar__nav__link">
                                <i className="material-icons">settings_system_daydream</i>
                                <span className="sidebar__nav__text">Gallery</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className="sidebar__nav__link">
                                <i className="material-icons">camera</i>
                                <span className="sidebar__nav__text">Exhibitions</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className="sidebar__nav__link">
                                <i className="material-icons">person</i>
                                <span className="sidebar__nav__text">About Me</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className="sidebar__nav__link">
                                <i className="material-icons">chat_bubble_outline</i>
                                <span className="sidebar__nav__text">Contact</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className="sidebar__nav__link">
                                <i className="material-icons">settings</i>
                                <span className="sidebar__nav__text">Information</span>
                                </NavLink>
                                </li>
                               
                   </nav>
               </aside>

            <main>          
                <Outlet />
            </main>

            {/* <div>
           <footer>
            <Outlet />  
            </footer>  
            </div> */}

        </div>
        </div>
    );
}