// Banner/jumbotron component
export default function Banner({ image, title, subtitle }) {
  return (
    <div id="banner" style={{backgroundImage: `url(${image})`}}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}