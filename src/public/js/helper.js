export default function helper(vid) {
  const END_PIXEL_KEY =
    'http://www.mocky.io/v2/5be098d03200004d006496f6';
  const START_PIXEL_KEY =
    'http://www.mocky.io/v2/5be098b232000072006496f5';

  const GOOGLE_PLAY_LINK =
    'https://play.google.com/store/apps/details?id=com.huuuge.casino.texas&hl=en';
  const APP_STORE_LINK =
    'https://apps.apple.com/us/app/billionaire-casino-slots-777/id1098617974';

  function addPixelToBody() {
    const isVideoJustStarted =
      vid.currentTime > 0 && vid.currentTime < 1;
    if (isVideoJustStarted) {
      window.document.body.appendChild(startPixel);
    }
  }

  const setEnventsOnVideo = () => {
    const { startPixel, endPixel } = createPixels();
    vid.addEventListener('timeupdate', setTimeListenrs);
    vid.addEventListener('play', addPixelToBody(startPixel), false);
    vid.addEventListener('ended', addPixelToBody(endPixel), false);
  };

  const jumpForNoUserAction = () => {
    !sec4Button.hasBeenClicked ? jumpTo21Sec(sec4Button) : undefined;
  };

  const setListenerForSecond21 = () => {
    vid.pause();
    vid.removeEventListener('timeupdate', setTimeListenrs);
    vid.addEventListener('timeupdate', showSec21Button);
  };

  const setTimeListenrs = () => {
    if (vid.currentTime > 4) {
      const sec4Button = document.getElementById('sec4Button');
      sec4Button.style = 'display: block';

      setListenerForSecond21();
      setTimeout(jumpForNoUserAction, 10000);
    }
  };

  const showSec21Button = () => {
    if (vid.currentTime > 21) {
      const sec21Button = document.getElementById('sec21Button');
      sec21Button.style = 'display: block';
      vid.removeEventListener('timeupdate', showSec21Button);
    }
  };

  const jumpTo21Sec = (sec4Button) => {
    sec4Button.style = 'display: none';
    vid.currentTime = 21;
    vid.play();
  };

  const setOnClickForSec4button = () => {
    const sec4Button = document.getElementById('sec4Button');
    sec4Button.hasBeenClicked = false;
    sec4Button.addEventListener('click', () => {
      sec4Button.hasBeenClicked = true;
      vid.play();
      sec4Button.style = 'display: none';
    });
  };

  const setOnClickForSec21button = () => {
    const sec21Button = document.getElementById('sec21Button');
    sec21Button.addEventListener('click', () => {
      const isIphone = /iphone/i.test(navigator.userAgent);
      if (isIphone) {
        window.open(APP_STORE_LINK, window);
        return;
      }
      window.open(GOOGLE_PLAY_LINK, window);
    });
  };

  const createPixels = () => {
    const startPixel = document.createElement('img');
    const endPixel = document.createElement('img');

    startPixel.setAttribute('src', START_PIXEL_KEY);
    endPixel.setAttribute('src', END_PIXEL_KEY);

    startPixel.style = 'display: none';
    endPixel.style = 'display: none';

    return { startPixel, endPixel };
  };

  return {
    setOnClickForSec21button,
    setOnClickForSec4button,
    setEnventsOnVideo,
  };
}
