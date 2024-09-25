import React from "react";
 
function About() {
  return (
    <>
       
      <div className="  container mt-2">
        <h1>The Famous Food Bloggers</h1>
        <hr></hr>
        <h5>
          1.B. Smith (Facebook: @BSmithStyle) - Celebrity chef and lifestyle
          expert.
        </h5>
        <p>
          <img
            src={require("./smith.jpg")}
            alt="library"
            className="float-start me-3"
            style={{ width: "50px" }}
          />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          perspiciatis id dolorem maxime similique enim sed unde nemo minus
          asperiores? Consequuntur repudiandae provident rem exercitationem
          iusto quasi est dolor blanditiis?
        </p>
        <br></br>
        <h5>
          2.Mark Wiens (Instagram: @markwiens) - Food enthusiast and travel
          blogger.
        </h5>
        <p>
          <img
            src={require("./mark.jpg")}
            alt="library"
            className="float-start me-3"
            style={{ width: "50px" }}
          />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          quae ut sit temporibus alias magni iusto. Rerum consequatur vitae sit
          distinctio. Ratione beatae voluptatum, exercitationem quisquam alias
          obcaecati voluptas iusto?
        </p>
        <br></br>
        <h5>
          3.David Chang (Instagram: @davidchang) - Chef and founder of Momofuku.
        </h5>
        <p>
          <img
            src={require("./david.jpg")}
            alt="library"
            className="float-start me-3"
            style={{ width: "70px", height: "70px" }}
          />
          LoremLorem ipsum dolor sit amet consectetur adipisicing elit.
          Architecto quae ut sit temporibus alias magni iusto. Rerum consequatur
          vitae sit distinctio. Ratione beatae voluptatum, exercitationem
          quisquam alias obcaecati voluptas iusto?
        </p>
        <br></br>
        <h5>
          4.Ree Drummond (Instagram: @reedrummond) - The Pioneer Woman, sharing
          recipes and ranch life.
        </h5>
        <p>
          <img
            src={require("./red.jpg")}
            alt="library"
            className="float-start me-3"
            style={{ width: "50px" }}
          />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ex
          architecto ipsa aspernatur amet voluptatem accusantium magnam,
          quibusdam minus. Pariatur minima ipsum totam ullam fugit eum quis
          rerum quod quia hic quibusdam error ut molestiae necessitatibus .
        </p>
        <br></br>
        <h5>
          5.Deb Perelman (Instagram: @debperelman) - Smitten Kitchen, sharing
          recipes and cooking tips.{" "}
        </h5>
        <p>
          <img
            src={require("./deb.jpg")}
            alt="library"
            className="float-start me-3"
            style={{ width: "50px" }}
          />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolore
          numquam earum laboriosam unde, officiis delectus facilis laborum odit
          minus, at architecto eaque corporis nostrum cupiditate, quam impedit.
          Minus, molestias.
        </p>
        <br></br>
        <h5>
          6.Nandita Iyer (Instagram: @saffrontrail) - Sharing vegetarian recipes
          and stories
        </h5>
        <p>
          <img
            src={require("./nandita.jpg")}
            alt="library"
            className="float-start me-3"
            style={{ width: "50px" }}
          />
          lorem orem ipsum dolor sit amet consectetur adipisicing elit. Modi
          dolore numquam earum laboriosam unde, officiis delectus facilis
          laborum odit minus, at architecto eaque corporis nostrum cupiditate,
          quam impedit. Minus, molestias.<br></br>{" "}
        </p>
        <h5>
          7.Kunal Kapur (Instagram: @kunalkapur) - Chef, food stylist, and TV
          personality.
        </h5>
        <p>
          <img
            src={require("./kunal.jpg")}
            alt="library"
            className="float-start me-3"
            style={{ width: "50px" }}
          />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo vero
          cumque, magni quisquam mollitia et tenetur nostrum placeat nesciunt
          dignissimos, eveniet velit minus laboriosam iure beatae maiores
          incidunt reprehenderit animi.
        </p>
        <br></br>

        <button className="btn btn-primary mt-2">Read More</button>
      </div>
     
    </>
  );
}
export default About;
