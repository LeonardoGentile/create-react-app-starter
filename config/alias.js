const path = require('path');
const appSrc = require("./paths").appSrc;

// const appSrc = paths.appSrc;

module.exports = {
  // Support React Native Web
  // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
  'react-native': 'react-native-web',
  '_app': path.resolve(appSrc),
  '_reducers': path.resolve(appSrc, 'reducers')
};


