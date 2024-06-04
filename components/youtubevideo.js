function YoutubeVideo(props) {
  return <iframe width="560" height="315" src={props.url} title={props.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
}

export default YoutubeVideo;