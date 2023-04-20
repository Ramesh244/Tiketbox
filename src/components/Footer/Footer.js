import React from 'react';
import './Footer.css'
import logo from '../Images/OjasLogo.png'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,

  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

function Footer() {

  return (
    <MDBFooter className='mt-6 mb-6' color='white' bgColor="dark" 
    // style={{"marginTop":"-100px"}}
    >
      <MDBContainer className='p-1'>


        <section className='container'>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-2'>
              <img src={logo} alt="logo"
                style={{ width: "80px", height: "75px", borderRadius: "10px" }}
                
                 />

              <h5 class='brand_name'>Ojas Innovative Technologies</h5>
              <p class='color'>info@ojas-it.com<br/>+91 9381737484</p>
              {/* <span>+91 9381737484</span> */}
              
                {/* <p className='text_color'>We offer our services from our ODC in Hyderabad, India and cater to US, Canada and Australia.</p> */}
              
             
              {/* <section className='mb-1 px-2 '>
                <MDBBtn outline color="dark" floating className='m-1' href='#!' >
                  <MDBIcon fab icon='facebook-f' />
                </MDBBtn>

                <MDBBtn outline color="success" floating className='m-1' href='#!' role='button'>
                  <MDBIcon fab icon='twitter' />
                </MDBBtn>

                <MDBBtn outline color="success" floating className='m-1' href='#!' role='button'>
                  <MDBIcon fab icon='google' />
                </MDBBtn>

                <MDBBtn outline color="success" floating className='m-1' href='#!' role='button'>
                  <MDBIcon fab icon='instagram' />
                </MDBBtn>

                <MDBBtn outline color="success" floating className='m-1' href='#!' role='button'>
                  <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>

                <MDBBtn outline color="success" floating className='m-1' href='#!' role='button'>
                  <MDBIcon fab icon='github' />
                </MDBBtn>
               
              </section> */}

            </MDBCol>

            <MDBCol lg='2' md='4' className='mb-4 mb-md-2'>
              <p class='color'>Quick Link</p>
              <a href="https://www.ojas-it.com/about.php" id='pcolor'><h6>About Us</h6></a>
              <ul className='list-unstyled mb-2'>
              {/* <p>Ojas is a Cost Effective IT Services Company with 11 years of rich experience in serving its customers with a team of 700+ IT Professionals.<br/> 
                We’re one of the fastest growing companies in India providing 
                Services in Application Dev & Support, Identity Governance, 
                Testing Services, Mobile Dev & Testing, Staff Augmentation and Staffing Services to our customers.</p> */}
                <li><a href="https://www.ojas-it.com/about.php" id='pcolor'>Careers</a></li>
                <li><a href="https://www.ojas-it.com/contact.php" id='pcolor'>Contact Us</a></li>
                <li><a href="" id='pcolor'>Blog</a></li>
                <li><a href="https://www.ojas-it.com/staff-augmentation.php" id='pcolor'>Services</a></li>
                <li><a href=""id='pcolor'>Products</a></li>
                
                
              </ul>
            </MDBCol>

            <MDBCol lg='4' md='6' className='mb-0 mb-md-2'>
              <h6 class='brand_name'>Hyderabad, INDIA</h6>

              <p>Ojas Innovative Technologies Inc Plot No 31 & 32, 4th & 5th Floor, 
                Tower B, Ramky Selenium, Financial District, 
                Nanakramguda, Gachibowli, Hyderabad, Telangana - 500032 +91 9381737484 <br/>
                <span class='brand_name'>sales@ojas-it.com</span></p>

              
            </MDBCol>

            <MDBCol lg='3' md='2' className='mb-4 mb-md-0'>
              <h6 class='brand_name'>Los Angeles, USA</h6>
              <p>Ojas Innovative Technologies Inc 28422 Constellation Road, Suite # 211, Valencia, CA 91355-3027 <br/>
              <span class='brand_name'>sales@ojas-it.com</span></p>

              {/* <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>Link 1</a>
                </li>
                <li>
                  <a href='#!' className='text-white'>Link 2</a>
                </li>
                
              </ul> */}
            </MDBCol>


            {/* <MDBCol lg='2' md='2' className='mb-4 mb-md-0'>
              <h6>Nursery Admissions</h6>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>Link</a>
                </li>
                <li>
                  <a href='#!' className='text-white'>Link 2</a>
                </li>
                <li>
                  <a href='#!' className='text-white'>Link 3</a>
                </li>
                
              </ul>
            </MDBCol> */}

            {/* <MDBCol lg='2' md='2' className='mb-4 mb-md-0'>
              <h6>For Parent</h6>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                
              </ul>
            </MDBCol> */}
          </MDBRow>
        </section>


      </MDBContainer>

      <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Copyright © 2011-2023 Ojas Innovative Technologies. All Rights reserved.
        <a className='text-white' href='https://www.ojas-it.com/'>
          Ojas
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;