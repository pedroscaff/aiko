function handleVideoPlay(target) {
  const container = target.getElementsByClassName('video-iframe')[0];
  const iframe = container.getElementsByTagName('iframe')[0];
  iframe.setAttribute('src', `${iframe.src}?autoplay=1`);
  container.classList.remove('video-disabled');
  const imgPreview = target.getElementsByClassName('video-preview-container')[0];
  imgPreview.classList.add('video-disabled');
}
