import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={styles.root}>
      <div>
        <ul className={styles.links}>
          <li>
            <Link to="/sale">Sale</Link>
          </li>
          <li className={styles.dropdown_equipment}>
            <Link to="/equipment">Equipment</Link>
            <ul className={styles.dropdown_equipment_content}>
              <li>
                <Link to="/containers">Containers</Link>
              </li>
              <li>
                <Link to="/pots">Pots</Link>
              </li>
              <li>
                <Link to="/pans">Pans</Link>
              </li>
              <li>
                <Link to="/electricit-devices">Electricity devices</Link>
              </li>
              <li>
                <Link to="/baking-utensils">Baking utensils</Link>
              </li>
              <li>
                <Link to="/cups">Cups</Link>
              </li>
              <li>
                <Link to="/kettles">Kettles</Link>
              </li>
              <li>
                <Link to="/bowls">Bowls</Link>
              </li>
              <li>
                <Link to="/additional-accessories">Additional accessories</Link>
              </li>
              <li>
                <Link to="/helpful-tools">Helpful tools</Link>
              </li>
              <li>
                <Link to="/cutting-boards">Cutting boards</Link>
              </li>
              <li>
                <Link to="/kitchen-gears">Kitchen gears</Link>
              </li>
              <li>
                <Link to="/pliers">Pliers</Link>
              </li>
              <li>
                <Link to="/kitchen-scale">Kitchen scale</Link>
              </li>
              <li>
                <Link to="/sheet-metals">Sheet metals</Link>
              </li>
              <li>
                <Link to="/coffee-grinders">Coffee grinders</Link>
              </li>
              <li>
                <Link to="/pot-lids">Pot lids</Link>
              </li>
            </ul>
          </li>
          <li className={styles.dropdown_edibles}>
            <Link to="/edibles">Edibles</Link>
            <ul className={styles.dropdown_edibles_content}>
              <li>
                <Link to="/seasonings">Seasonings</Link>
              </li>
              <li>
                <Link to="/penutbutters">Penut Butters</Link>
              </li>
              <li>
                <Link to="/sauces">Sauces</Link>
              </li>
              <li>
                <Link to="/pizzas">Pizza | Pinsa</Link>
              </li>
              <li>
                <Link to="/oriental">Oriental</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <button
              className={styles.button}
              onClick={() => {
                props.handleHideMenu();
              }}
            >
              Hide Menu
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
