module.exports = {
    "extends": "airbnb-base",
    "env": {
      "mocha": true
    },
    "overrides": [
      {
          "files": "*.spec.js",
          "rules": {
              "no-unused-expressions": "off"
          }
      }
  ]
};
