{
  "name": "tuxedo",
  "version": "1.0.0",
  "description": "Component library by Synaptic",
  "keywords": ["React", "styled", "styled-components", "components", "UI", "library"],
  "main": "src/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": {
    "name" : "Ankur Mittal",
    "email" : "ankurmittal092@gmail.com"
  },
  "license": "ISC",
  "dependencies": {
    "@babel/polyfill": "^7.0.0",
    "@babel/runtime": "^7.1.2",
    "@sentry/browser": "^4.2.4",
    "@storybook/addon-info": "^5.0.0",
    "ant-design-palettes": "^1.1.2",
    "antd": "3.10.1",
    "classlist-polyfill": "1.2.0",
    "classnames": "2.2.5",
    "clean-tag": "^2.0.0",
    "dotenv": "^6.2.0",
    "fast-deep-equal": "^2.0.1",
    "hoist-non-react-statics": "3.2.1",
    "lodash": "^4.17.11",
    "moment": "2.20.x",
    "numeral": "1.5.3",
    "object-hash": "1.2.0",
    "object-path": "^0.11.4",
    "polished": "^1.9.3",
    "postcss-scss": "1.0.4",
    "promise": "7.0.4",
    "prop-types": "15.5.10",
    "query-string": "6.1.0",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-dom-factories": "^1.0.2",
    "react-pure-render": "1.0.2",
    "react-redux": "5.0.7",
    "react-transition-group": "^2.4.0",
    "styled-components": "^3.3.3",
    "styled-system": "^3.0.1",
    "svg-inline-react": "3.0.0",
    "system-components": "^3.0.0",
    "webpack-cli": "^3.1.2"
  },
  "devDependencies": {},
  "browserslist": [
    ">0.35%",
    "not op_mini >= 0",
    "not and_chr > 0",
    "not and_uc > 0",
    "not android > 0",
    "not opera > 0",
    "not samsung > 0",
    "not op_mini > 0",
    "not op_mob > 0",
    "not ie 11"
  ],
  "jest": {
    "testURL": "http://localhost/",
    "moduleDirectories": [
      "node_modules",
      "client"
    ],
    "roots": [
      "<rootDir>/client/"
    ],
    "modulePaths": [
      "<rootDir>/client/"
    ],
    "moduleNameMapper": {
      "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js",
      "svg-inline-react": "<rootDir>/__mocks__/styleMock.js",
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "(.*)componentBuildConfig-BUILDSYSTEM(.*)": "<rootDir>/client/modules/home/services/componentBuildConfig/componentBuildConfig-main.js"
    },
    "setupTestFrameworkScriptFile": "<rootDir>/enzymeSetupFile.js",
    "testPathIgnorePatterns": [
      "<rootDir>/node_modules/(?:.+?)",
      "<rootDir>/tests/",
      "<rootDir>/build/",
      "<rootDir>/(?:.+?)/stubs/(?:.+?)"
    ],
    "globals": {
      "__TEST__": true,
      "__SLACK_BOT_TOKEN__": true,
      "__PROD__": false,
      "__DEV__": false,
      "__DESIGN_STAGING__": false,
      "__STAGING__": false,
      "__CRYPTO__": false,
      "__TRACK_URL__": false
    }
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "yarn test"
    }
  },
  "lint-staged": {
    "linters": {
      "*.{js,jsx}": [
        "prettier --write",
        "git add"
      ]
    }
  }
}
