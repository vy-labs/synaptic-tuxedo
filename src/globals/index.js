import { injectGlobal } from 'styled-components';
import { themeGet } from 'styled-system';
import IcoMoonTTF from '../assets/font-icons/fonts/icomoon.ttf';
import IcoMoonEOT from '../assets/font-icons/fonts/icomoon.eot';
import IcoMoonWOFF from '../assets/font-icons/fonts/icomoon.woff';

import Theme from '../../theme';
import '../assets/font-icons/style.css';

export default props =>
  injectGlobal`
    @font-face {
      font-family: 'icomoon';
      src:  url('${IcoMoonEOT}');
      src:  url('${IcoMoonEOT}') format('embedded-opentype'),
          url('${IcoMoonTTF}') format('truetype'),
          url('${IcoMoonWOFF}') format('woff');
      font-weight: normal;
      font-style: normal;
    }

    [class^="icon-"], [class*=" icon-"] {
      /* use !important to prevent issues with browser extensions that change fonts */
      font-family: 'icomoon' !important;
      speak: none;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;

      /* Better Font Rendering =========== */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Dropdown global styles */
    ul.ant-select-dropdown-menu {
      padding: ${themeGet('space.2')(props)}px;

      li {
        padding: ${themeGet('space.1')(props)}px ${themeGet('space.2')(
    props
  )}px;
        border-radius: ${themeGet('radii.1')(props)}px !important;
        font-weight: ${themeGet('fontWeights.semibold')(props)};

        &.ant-select-dropdown-menu-item-active {
          background-color: ${themeGet('colors.grey.2')(props)};
        }
        &.ant-select-dropdown-menu-item {
          line-height: initial;
          &.lg {
            padding: ${themeGet('space.2')(props)}px;
          }
        }
      }
    }

    /* Tooltip global styles */
    .ant-tooltip-inner {
      background-color: ${themeGet('colors.black.7')(props)};
      font-size: ${themeGet('fontSizes.1')(props)}px;
      color: ${themeGet('colors.text.white')(props)};
      padding: ${themeGet('space.2')(props)}px;
      min-height: auto;
      box-shadow: ${themeGet('shadows.2')(props)};
    }

    .ant-tooltip-placement-right .ant-tooltip-arrow, .ant-tooltip-placement-rightTop .ant-tooltip-arrow, .ant-tooltip-placement-rightBottom .ant-tooltip-arrow {
      border-right-color: ${themeGet('colors.black.7')(props)};
    }

    .ant-tooltip-placement-left .ant-tooltip-arrow, .ant-tooltip-placement-leftTop .ant-tooltip-arrow, .ant-tooltip-placement-leftBottom .ant-tooltip-arrow {
      border-right-color: ${themeGet('colors.black.7')(props)};
    }

    /* Carousel global overrides */
    .ant-carousel {
      width: 100%;
    }

    .tabbed-view-container {
      .active-tab-only {
        visibility: hidden;
      }
      &.active {
        .active-tab-only {
          visibility: visible;
        }
      }
    }
  `;
