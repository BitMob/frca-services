'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1526286450227_5355';

  // add your config here
  config.middleware = [ 'graphql' ];

  return config;
};
