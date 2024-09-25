import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";  
import Footer from "./Footer";
import { Carousel } from "react-bootstrap";

function Home() {
  return (
    <>
     
      <div className="container">
        <div className="img">
          <h1 className="mt-4">Simply Using recipes made for Real, Unique, everyday life.</h1>
          <hr />
          
          <div className="carouselcontainer">
          <Carousel>
            <Carousel.Item>
              <img
                src={require("./salad.jpeg")}
                alt="Salad"
                className="d-block w-100 img-fluid" // Responsive image class
               
              />
              <Carousel.Caption>
                <h3>Salad</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("./spicy.jpeg")}
                alt="Spicy Gravy"
                className="d-block w-100 img-fluid" // Responsive image class
               
              />
              <Carousel.Caption>
                <h3>Spicy Gravy</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("./cont.jpeg")}
                alt="Continental"
                className="d-block w-100 img-fluid"  
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>Continental</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("./nrth.jpeg")}
                alt="North-Indian"
                className="d-block w-100 img-fluid" 
              style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>North-Indian</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("./chin.jpeg")}
                alt="Kung-Pao-Chicken"
                className="d-block w-100 img-fluid" 
               
              />
              <Carousel.Caption>
                <h3>Kung-Pao-Chicken</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("./sth.jpeg")}
                alt="South-Indian"
                className="d-block w-100 img-fluid"  
               
              />
              <Carousel.Caption>
                <h3>South-Indian</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("./chik.jpeg")}
                alt="Spicy-Chicken"
                className="d-block w-100 img-fluid" 
         
              />
              <Carousel.Caption>
                <h3>Spicy-Chicken</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("./junk.jpeg")}
                alt="Burger"
                className="d-block w-100 img-fluid" 
                
              />
              <Carousel.Caption>
                <h3>Burger</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
        </div>
        <h2>The Latest and Greatest</h2>
        <div className="row grid">
          <div className="col-lg-3">
            <img
              src={require("./bro.jpg")}
              alt="Party Brownies"
              className="img-fluid"
              style={{ width: '200px' }}
            />
          </div>
          <div className="flex justify-between col-lg-6">
            <p className="uppercase">AUGUST 13, 2024</p>
            <h3 className="des" id="two">Party Brownies</h3>
            <p className="p">Brownies covered with a thick layer of fudge frosting and rainbow sprinkles. The best way to jazz up a box of brownie mix!</p>
            <h4 className="c" onClick={() => window.location.href = '#one'}>Continue to Taste</h4>
          </div>
        </div>
        <hr />
        
        <div className="row grid">
          <div className="col-lg-3">
            <img
              src={require("./shrimp.jpg")}
              alt="Shrimp"
              className="img-fluid"
              style={{ width: '200px' }}
            />
          </div>
          <div className="flex justify-between col-lg-6">
            <p className="uppercase">AUGUST 13, 2024</p>
            <h3 className="des" id="three">Shrimp</h3>
            <p className="p">This is summertime in a bowl! Spicy shrimp with all the delicious heat, smoke, and sweetness we want, alongside a fresh peach and cucumber salad.</p>
            <h4 className="c" onClick={() => window.location.href = '#four'}>Continue to Taste</h4>
          </div>
        </div>
        <hr />
        
        <div className="row grid">
          <div className="col-lg-3">
            <img
              src={require("./egg.jpg")}
              alt="Oat Bran"
              className="img-fluid"
              style={{ width: '200px' }}
            />
          </div>
          <div className="flex justify-between col-lg-6">
            <p className="uppercase">SEPTEMBER 13, 2024</p>
            <h3 className="des" id="six">Oat Bran</h3>
            <p className="p">High protein, high fiber. I love this oat bran for breakfast! Creamy and soothing + quick and easy to make!</p>
            <h5 className="c" onClick={() => window.location.href = '#five'}>Continue to Taste</h5>
          </div>
        </div>
        <hr />
        <div>
          <h5 className="des" id="one" onClick={() => window.location.href = '#two'}>Party Brownies</h5>
          <p className="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi cupiditate itaque doloremque, alias quia facere dicta at 
            dignissimos exercitationem! Dolor amet ad soluta, tempora dolore distinctio recusandae incidunt. Repellat commodi nesciunt quo, dolorem neque quia?</p>
          <h5 className="des" id="four" onClick={() => window.location.href = '#three'}>Shrimp</h5>
          <p className="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit necessitatibus iste 
            fugiat ipsa delectus quisquam earum quod officiis placeat sapiente iusto, ullam debitis quae, nostrum doloremque provident omnis eaque odio deserunt quia aperiam minus! Autem alias quas ullam tempora asperiores reprehenderit, laborum voluptate, eaque, accusantium provident molestiae repudiandae possimus delectus?</p>
          <h5 className="des" id="five" onClick={() => window.location.href = '#six'}>Oat Bran</h5>
          <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid beatae nihil ipsam sint dolor,
             laborum quam ducimus enim, vitae eligendi fuga facilis repellendus amet et omnis? Dolorem, debitis modi quisquam porro illum autem id, laudantium saepe veniam dolore, voluptates impedit accusamus mollitia quaerat aut nostrum incidunt iure. Temporibus debitis eveniet est ea quibusdam amet doloribus neque, dolorem quia? Harum nihil itaque sint sapiente tenetur quod atque quibusdam nesciunt sequi nobis quidem consequatur laudantium esse similique eum iste, dicta aut temporibus dolorem reiciendis, vero accusantium dignissimos? Tempora ex nemo sequi deleniti maxime, similique cumque odit ut. Vero quod repudiandae assumenda magnam.</p>
        </div>
      </div>
       <Footer />
    </>
  );
}

export default Home;
