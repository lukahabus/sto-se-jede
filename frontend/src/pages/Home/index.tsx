import Menu from "components/Menu";
import { ReactComponent as Plate } from "../../assets/plate.svg"
import {Link, useLocation} from "react-router-dom"
import { IconButton, Badge } from "@material-ui/core"
import { Face, ListAlt, Restaurant}  from "@material-ui/icons"
import Logo from "../../assets/logo.png"

import "../Home/styles/homestyles.css"

const Home = () => {
  return (
    <><div className="navbar-container">
      <h1 className="navbar-title">Što se jede?</h1>
      <IconButton component={Link} to="/loginform" aria-label="Show cart items">
<Badge  color="secondary">
            <Face />
          </Badge>
</IconButton>
     
<IconButton component={Link} to="/cart" aria-label="Show cart items">
<Badge  color="secondary">
            <Restaurant className="cart-icon"/>
          </Badge>
</IconButton>

<IconButton component={Link} to="/recipes" aria-label="Show cart items">
<Badge  color="secondary">
            <ListAlt className="cart-icon"/>
          </Badge>
</IconButton>
    </div><Menu /></>
  );
};

export default Home;
