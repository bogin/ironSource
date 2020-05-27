'use strict';

import helper from './helper.js';
export default function main(vid) {
  const {
    setEnventsOnVideo,
    setOnClickForSec4button,
    setOnClickForSec21button,
  } = helper(vid);
  setEnventsOnVideo();
  setOnClickForSec4button();
  setOnClickForSec21button();
}
