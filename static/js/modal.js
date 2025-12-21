function setFullscreenPicture(element, target, copyright) {
  $('#modal-fullscreen-image').on('load', () => {
    $('#fullscreen-image')
      .modal('toggle');
    $('#modal-footer-text').text('© ' + copyright);
  }).attr('src', target);
}
