function YoutubeVideo(props) {
  return <iframe width="560" height="315" src={props.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
}
export default YoutubeVideo;