import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
function Footer() {
  return (
    <div>
       <MDBFooter bgColor='dark mt-5' className='text-white text-center text-lg-left'>
      <MDBContainer className='p-5'>
        <MDBRow className='w-100'>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'><i class="fa-solid fa-truck-fast fa-bounce"></i> E-Cart</h5>
            <p>E-Cart provides a beautiful shopping experience for the users in a simple manner.Users can add their needed items to the wishlist and can shop that in a simple way without any difficulty.</p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  Home
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Cart
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Wishlist
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                 
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Guides</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  React
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  React Bootstrap
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Bootswatch
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                 
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://mdbootstrap.com/'>
          E-CART.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer