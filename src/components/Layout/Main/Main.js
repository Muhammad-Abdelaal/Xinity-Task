import { Fragment } from "react";
import classes from './Main.module.css';

function Main(props) {

    return (
        <Fragment>
            <div style={!props.isMenuOpen ? {paddingLeft:'300px'}:{}} className={classes.main}>{props.children}</div>
        </Fragment>
    )
}

export default Main;