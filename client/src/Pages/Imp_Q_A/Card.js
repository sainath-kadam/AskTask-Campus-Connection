import { Link } from "react-router-dom";
import { menu } from "./Data";
import CardStyle from './CardStyle.css';
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
const Card = () => {
  return (
    <>
   
      <section className="menu" id="menu">
        <h1 className="heading">
          <span>Prepare yourself for the Interview</span>
        </h1>

        <div className="box-container">
          {menu.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <p>{item.disc}</p>
              <div className="trend">{item.trend}</div>
              {item.link && (
                <Link to={item.link.to} className="btn">
                  {item.link.text}
                </Link>
              )}
            </div>
          ))}
        </div>

        
      </section>
    </>
  );
};

export default Card;
