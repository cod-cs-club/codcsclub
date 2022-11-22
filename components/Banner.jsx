// Banner/jumbotron component
function Banner({ image, title, subtitle }) {
  return (
    <div id="banner" style={{backgroundImage: `url(${image})`}}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
  )
}

// Export the component.
export default Banner