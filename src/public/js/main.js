function addPixelToBody() {
  const isVideoJustStarted =
    vid.currentTime > 0 && vid.currentTime < 1;
  if (isVideoJustStarted) {
    window.document.body.appendChild(startPixel);
  }
}

const initVideoFunctionality = (startPixel, endPixel) => {
  vid.addEventListener('play', addPixelToBody(startPixel), false);
  vid.onended = function () {
    window.document.body.appendChild(endPixel);
  };
};

const pausing_function = () => {
  if (vid.currentTime > 4) {
    vid.pause();
    sec4Button.style = 'display: block';
    vid.removeEventListener('timeupdate', pausing_function);
    vid.addEventListener('timeupdate', displayGoToStoreButton);
    setTimeout(() => {
      !sec4Button.hasBeenClicked ? jumpTo21Sec(sec4Button) : undefined;
    }, 10000);
  }
};

const displayGoToStoreButton = () => {
  if (vid.currentTime > 21) {
    const sec21Button = document.getElementById('sec21Button');
    sec21Button.style = 'display: block';
    vid.removeEventListener('timeupdate', displayGoToStoreButton);
  }
};

const jumpTo21Sec = (sec4Button) => {
  sec4Button.style = 'display: none';
  vid.currentTime = 21;
  vid.play();
}

const initSec4ButtonFunctionality = (sec4Button) => {
  sec4Button.hasBeenClicked = false;
  vid.addEventListener('timeupdate', pausing_function);

  const resumeAndHide = () => {
    sec4Button.hasBeenClicked = true;
    vid.play();
    sec4Button.style = 'display: none';
  };

  return resumeAndHide;
};

const createPixels = () => {
  const startPixel = document.createElement('img');
  startPixel.setAttribute(
    'src',
    'http://www.mocky.io/v2/5be098b232000072006496f5',
  );
  startPixel.style = 'display: none';

  const endPixel = document.createElement('img');
  endPixel.setAttribute(
    'src',
    'http://www.mocky.io/v2/5be098d03200004d006496f6',
  );
  endPixel.style = 'display: none';

  return { startPixel, endPixel };
};

let vid; 
export default function main() {
  const { startPixel, endPixel } = createPixels();
  vid = document.getElementById('adVideo');
  initVideoFunctionality(startPixel, endPixel);

  const sec4Button = document.getElementById('sec4Button');
  const resumeAndHide = initSec4ButtonFunctionality(sec4Button);

  const openStore = () => {
    const isIphone = /iphone/i.test(navigator.userAgent);
    if (isIphone) {
      window.open(
        'https://apps.apple.com/us/app/billionaire-casino-slots-777/id1098617974',
        window,
      );
      return;
    }

    window.open(
      'https://play.google.com/store/apps/details?id=com.huuuge.casino.texas&hl=en',
      window,
    );
  };

  return { resumeAndHide, openStore };
}
