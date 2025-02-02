import React from "react";
import m1 from "../Images/mexican.jpg";
import New from "../components/recip1.jsx";
import t1 from "../Images/thai.jpg";
import i1 from "../Images/italian.jpg";
import s1 from "../Images/seefood.jpg";
import r1 from "../Images/ramen.jpg";
import recipies from "../Images/recipies.jpg";
import Footer from "../components/footer";


function Recipies() {
  return (
    <div>
      
      <div className="recipies" style={{ backgroundImage: `url(${recipies})` }}>
        <div className="recip-inner">
          {/* Italian Section */}
          <h2 className="recip-id" id="italian">Italian</h2>
          <div className="recip-container">
            <div className="recip-row">
            <New name="Mexican Dish" price="1500" img={m1} description="Mexican cuisine" />
            <New name="Thai Dish" price="1200" img={t1} description="Thai flavors" />
            <New name="Italian Dish" price="1800" img={i1} description="Classic pasta" />
            <New name="Seafood Dish" price="2000" img={s1} description="seafood platter" />
            <New name="Ramen Dish" price="900" img={r1} description="Japanese ramen" />
            </div>
          </div>

          {/* Mexican Section */}
          <h2 className="recip-id" id="mexican">Mexican</h2>
          <div className="recip-container">
            <div className="recip-row">
            <New name="Mexican Dish" price="1500" img={m1} description="Delicious Mexican cuisine" />
            <New name="Thai Dish" price="1200" img={t1} description="Exquisite Thai flavors" />
            <New name="Italian Dish" price="1800" img={i1} description="Classic Italian pasta" />
            <New name="Seafood Dish" price="2000" img={s1} description="Fresh seafood platter" />
            <New name="Ramen Dish" price="900" img={r1} description="Authentic Japanese ramen" />
            </div>
          </div>

          {/* Thai Section */}
          <h2 className="recip-id" id="thai">Thai</h2>
          <div className="recip-container">
            <div className="recip-row">
            <New name="Mexican Dish" price="1500" img={m1} description="Delicious Mexican cuisine" />
            <New name="Thai Dish" price="1200" img={t1} description="Exquisite Thai flavors" />
            <New name="Italian Dish" price="1800" img={i1} description="Classic Italian pasta" />
            <New name="Seafood Dish" price="2000" img={s1} description="Fresh seafood platter" />
            <New name="Ramen Dish" price="900" img={r1} description="Authentic Japanese ramen" />
            </div>
          </div>

          {/* Seafood Section */}
          <h2 className="recip-id" id="seafood">Seafood</h2>
          <div className="recip-container">
            <div className="recip-row">
            <New name="Mexican Dish" price="1500" img={m1} description="Delicious Mexican cuisine" />
            <New name="Thai Dish" price="1200" img={t1} description="Exquisite Thai flavors" />
            <New name="Italian Dish" price="1800" img={i1} description="Classic Italian pasta" />
            <New name="Seafood Dish" price="2000" img={s1} description="Fresh seafood platter" />
            <New name="Ramen Dish" price="900" img={r1} description="Authentic Japanese ramen" />
            </div>
          </div>

          {/* Ramen Section */}
          <h2 className="recip-id" id="ramen">Ramen</h2>
          <div className="recip-container">
            <div className="recip-row">
            <New name="Mexican Dish" price="1500" img={m1} description="Delicious Mexican cuisine" />
            <New name="Thai Dish" price="1200" img={t1} description="Exquisite Thai flavors" />
            <New name="Italian Dish" price="1800" img={i1} description="Classic Italian pasta" />
            <New name="Seafood Dish" price="2000" img={s1} description="Fresh seafood platter" />
            <New name="Ramen Dish" price="900" img={r1} description="Authentic Japanese ramen" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Recipies;
