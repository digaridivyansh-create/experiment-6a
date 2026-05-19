import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
return (
<div style={styles.navbar}>
<Link to="/" style={styles.link}>Home</Link>
<Link to="/about" style={styles.link}>About</Link>
<Link to="/contact" style={styles.link}>Contact</Link>
</div>
);
}
const styles = {
navbar: {
display: "flex",
justifyContent: "center",
gap: "30px",
padding: "15px",
backgroundColor: "#1e1e2f",
},
link: {
color: "white",
textDecoration: "none",
fontSize: "18px",
fontWeight: "500",
},
};
export default Navbar;