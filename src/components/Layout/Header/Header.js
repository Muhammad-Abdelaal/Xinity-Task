import classes from './Header.module.css';
import classNames from 'classnames';

import gearIcon from '../../../Assets/gear-svgrepo-com.svg';
import bellIcon from '../../../Assets/bell-ringing-svgrepo-com.svg';
import searchIcon from '../../../Assets/search-alt-1-svgrepo-com.svg';
import SmallPfp from '../../UI/SmallPfp';
import pfp from '../../../Assets/Smilingman.jpg';

function Header({menuStateHandler, isMenuOpen}) {

    return (
        <div className={classes.header}>
           <div className={classes['header_left']}>
            <div onClick={menuStateHandler} className={classNames(classes['burger-btn-container'] , isMenuOpen === true ? classes['open'] : '')}>
                <div className={classes['burger-btn']}/>
            </div>
            <p>Welcome, Muhammad</p>
           </div>
           <div className={classes['header_right']}>
                <div className={classes['search-container']}>
                    <img alt='img' width='20' src={searchIcon} />
                    <input type='text' style={{border:'none', outline:'none'}} placeholder='Search...' />
                </div>
                <img alt='img' width='20' src={bellIcon} />
                <img alt='img' width='20' src={gearIcon} />
                <SmallPfp profilePic={pfp} />
           </div>
        </div>
    )
}

export default Header;