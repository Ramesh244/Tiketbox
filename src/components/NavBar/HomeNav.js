import { useEffect, useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../Images/OjasLogo.png'
import logout from '../Images/logout-svgrepo-com@2x.png'
import setting from '../Images/setting.png'
import notification from '../Images/notification.png'
import './HomeNav.css';


function HomeNav(props) {
    const[show, setShow]=useState(true)
    const [flag, setflag] = useState(false)
   
console.log(props.data1, " aiam role");
   
    const val = useLocation();
    // console.log(val.state);
    const navigate = useNavigate()

    const handleLogout = (e) => {
        setflag(!flag)
        console.log(!flag);
        navigate('/signin')
    }

    const handleLogin = (e) => {
        setflag(false)
        navigate()
    }
   

    return (
        <div>
            <Navbar style={{ "backgroundColor": "#4B4848" }} variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand><img src={Logo} alt='brandlogo' style={{ width: "75px", height: "60px", borderRadius: "10px" }} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            // style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {
                               (props.data1==="manager"||  props.data1==="employee" || props.data1==="admin")  ?
                                <Nav.Link>
                                <Link to='/'><button type="button" className='btn btn-light'>Home</button></Link>
                            </Nav.Link>
                            :null }
                            
                        </Nav>
                        <Nav>
                            
                            <Nav.Link>
                                <Link to='/signin' > <button type="button" className="button" onClick={handleLogin}>Sign In</button></Link>
                            </Nav.Link>
                            <DropdownButton
                                title='👤Profile'
                                id='ddb'
                                align="end"

                            >
                                {/* <Dropdown.Item><img src={setting} style={{ height: "25px", width: "25px" }} />Setting</Dropdown.Item>
                                <Dropdown.Item><img src={notification} style={{ height: "20px", width: "20px" }} />Notification</Dropdown.Item> */}

                              

                                <Link to='Logout'><Dropdown.Item onClick={handleLogout}><img src={logout}
                                    style={{ height: "20px", width: "25px" }} />
                                    Logout
                                </Dropdown.Item></Link>
                                {/* <Link to='/'><Dropdown.Item onClick={handleLogout}><i class="bi bi-box-arrow-left"></i>Login</Dropdown.Item></Link>  */}
                            </DropdownButton>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>

    );
}

export default HomeNav;
