import classes from './UI.module.css';

function SmallPfp({profilePic}) {
  return (
    <img alt='pfp' src={profilePic}  className={classes['small-pfp']} />
  )
}

export default SmallPfp;