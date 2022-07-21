import React from "react";
import PropTypes from 'prop-types';
import "./AppBar.css";

//para crear componenete funcional usamos la extenion create-react-components
//type the snipe:rfc

AppBar.PropType = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

//vamos a obtener 2 args y las props pasadas despues de estas dos props
function AppBar({ title = "Titulo", subtitle = "Subtitle", ...props }) {
  return (
    <div className="appbar">
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
    </div>
  );
}

export default AppBar;
