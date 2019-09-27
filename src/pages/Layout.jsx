import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Layout(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      <Navbar /> 
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;