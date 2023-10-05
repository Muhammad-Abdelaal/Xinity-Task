

function Section(props) {
  return (
    <div className={props.className} style={{margin:'20px 0px'}}>{props.children}</div>
  )
}

export default Section;