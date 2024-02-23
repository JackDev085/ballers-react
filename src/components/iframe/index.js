function Iframe({ id }) {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${id}?si=mZA32W6nkXoM9b8m`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  )
}
export default Iframe