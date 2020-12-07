import React from "react";
import "./styles.css";
import Moment from "react-moment";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function App() {
const styles={
 margin:"auto",
 width:"800px",

};
const date = new Date();
  return (
      
    <div style={styles}>
            <Moment>{date}</Moment>
      <Carousel >
      <div>
          <img src="https://www.roadaffair.com/wp-content/uploads/2017/12/taj-mahal-india-shutterstock_180918317-1024x683.jpg" alt="taj mahal,india" />
          <p className="legend">Taj Mahal,india</p>
      </div>
      <div>
           <img src="https://www.roadaffair.com/wp-content/uploads/2017/12/great-barrier-reef-australia-shutterstock_269208791-1024x683.jpg" alt="Great Barrier Reef, Australia" />
           <p  className="legend">Great Barrier Reef, Australia</p>
      </div>
      <div>
            <img src="https://www.roadaffair.com/wp-content/uploads/2017/10/machu-picchu-peru-shutterstock_364973210-1024x683.jpg" alt="Machu Picchu, Peru" />
            <p  className="legend">Machu Picchu, Peru</p>
      </div>
      <div>
            <img src="https://www.roadaffair.com/wp-content/uploads/2017/09/manarola-cinque-terre-italy-road-affair-1024x683.jpg" alt="Cinque Terre, Italy" />
            <p  className="legend">Cinque Terre, Italy</p>
      </div>
      <div>
            <img src="https://www.roadaffair.com/wp-content/uploads/2017/09/yellowstone-national-park-usa-shutterstock_125026373-1024x683.jpg" alt="Yellowstone National Park, USA" />
            <p  className="legend">Yellowstone National Park, USA</p>
      </div>
      <div>
            <img src="https://www.roadaffair.com/wp-content/uploads/2017/12/goreme-national-park-turkey-shutterstock_562843438-1024x683.jpg" alt="Cappadocia, Turkey" />
             <p  className="legend">Cappadocia, Turkey</p>
      </div>
      </Carousel>
    </div>
  );
}
