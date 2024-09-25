import React from 'react';
import About from './About';
import Recipe from './Recipe';
import Footer from "./Footer";
 
function MergedComponent() {
  return (
    <>
    {/* <Navbar/> */}
    <div className="container row mt-4">
     <div className='col-lg-9'>
          <About />
          </div>
     <div className='col-lg-3 'style={{paddingright:"10px"}} >
        <Recipe />
     </div>
   </div>
   <Footer/>
   </> 
  );
}

export default MergedComponent;