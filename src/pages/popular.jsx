import React from 'react';
import { Link } from 'react-router-dom';
import mexican from '../Images/mexican.jpg';
import italian from '../Images/italian.jpg';
import indian from '../Images/indian.jpg';
import thai from '../Images/thai.jpg';
import seefood from '../Images/seefood.jpg';
import ramen from '../Images/ramen.jpg';
import popular from '../Images/popular.jpg';

import Footer from '../components/footer';

function Popular() {
  return (
    <div>
      <div className='popular' style={{ backgroundImage: `url(${popular})` }}>
        <table>
          <tbody>
            <tr>
              <td>
                <img src={mexican} alt="mexicanfood-img" className="food-img" />
                <br /><br />
                <Link to="/recipies#mexican" className='picture description'>Mexican</Link>
              </td>
              <td>
                <img src={italian} alt="italianfood-img" className="food-img" />
                <br /><br />
                <Link to="/recipies#italian" className='picture description'>Italian</Link>
              </td>
            </tr>
            <tr>
              <td>
                <img src={indian} alt="indianfood-img" className="food-img" />
                <br /><br />
                <Link to="/recipies#indian" className='picture description'>Indian</Link>
              </td>
              <td>
                <img src={thai} alt="thaifood-img" className="food-img" />
                <br /><br />
                <Link to="/recipies#thai" className='picture description'>Thai</Link>
              </td>
            </tr>
            <tr>
              <td>
                <img src={seefood} alt="seafood-img" className="food-img" />
                <br /><br />
                <Link to="/recipies#seafood" className='picture description'>Seafood</Link>
              </td>
              <td>
                <img src={ramen} alt="ramenfood-img" className="food-img" />
                <br /><br />
                <Link to="/recipies#ramen" className='picture description'>Ramen</Link>
              </td>
            </tr>
          </tbody>
        </table>

        <Footer />
      </div>
    </div>
  );
}

export default Popular;
