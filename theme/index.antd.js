require('@babel/register');
import { rgba } from 'polished';
import DefaultTheme from './';

module.exports = Theme => {
  const { colors, radii, fontSizes, fonts, space, shadows, iconSizes } =
    Theme || DefaultTheme;
  const themeColors = {
    'primary-color': colors.blue[6],
    'info-color': colors.blue[6],
    'success-color': colors.green[6],
    'processing-color': colors.blue[6],
    'error-color': colors.red[6],
    'highlight-color': colors.red[6],
    'warning-color': colors.yellow[6],
    'normal-color': colors.grey[6]
  };

  const primaryColors = {
    'primary-1': colors.blue[1],
    'primary-2': colors.blue[2],
    'primary-3': colors.blue[3],
    'primary-4': colors.blue[4],
    'primary-5': colors.blue[5],
    'primary-6': colors.blue[6],
    'primary-7': colors.blue[7],
    'primary-8': colors.blue[8],
    'primary-9': colors.blue[9]
  };

  const scaffolding = {
    'body-background': colors.black[7],
    'component-background': colors.white,
    'font-family-no-number': `${fonts[0]}, ${fonts.roboto}`,
    'font-family': `${fonts[0]}, ${fonts.roboto}`,
    'heading-color': colors.text.dark,
    'text-color': colors.text.dark,
    'text-color-secondary': colors.text.medium,
    'font-size-base': `${fontSizes[2]}px`,
    'font-size-lg': `${fontSizes[3]}px`,
    'font-size-sm': `${fontSizes[1]}px`,
    'line-height-base': 1.5,
    'border-radius-base': `${radii[1]}px`,
    'border-radius-sm': `${radii[0]}px`
  };

  // // LINK
  // @link-color             : @primary-color;
  // @link-hover-color       : color(~`colorPalette("@{link-color}", 5)`);
  // @link-active-color      : color(~`colorPalette("@{link-color}", 7)`);
  // @link-decoration        : none;
  // @link-hover-decoration  : none;
  const links = {
    'link-color': colors.blue[7],
    'link-hover-color': colors.blue[7],
    'link-active-color': colors.blue[7],
    'link-hover-decoration': 'underline'
  };

  // vertical paddings
  const padding = {
    'padding-lg': `${space[6]}px`, // containers
    'padding-md': `${space[4]}px`, // small containers and buttons
    'padding-sm': `${space[3]}px`, // Form controls and items
    'padding-xs': `${space[2]}px` // small items
  };

  // The background colors for active and hover states for things like
  // list items or table cells.
  const itemStates = {
    'item-active-bg': colors.grey[1],
    'item-hover-bg': colors.grey[2]
  };

  // Borders, Outline and backgrounds
  const bordersAndBg = {
    'border-color-base': colors.border.input,
    'border-color-split': colors.border.hover,
    'background-color-light': colors.grey[0],
    'background-color-base': colors.grey[2]
  };

  // Disabled states
  const disabledStates = {
    'disabled-color': colors.text.disabled
  };

  // // Shadow
  // @shadow-color           : rgba(0, 0, 0, .15);
  // @box-shadow-base        : @shadow-1-down;
  // @shadow-1-up            : 0 2px 8px @shadow-color;
  // @shadow-1-down          : 0 2px 8px @shadow-color;
  // @shadow-1-left          : -2px 0 8px @shadow-color;
  // @shadow-1-right         : 2px 0 8px @shadow-color;
  // @shadow-2               : 0 4px 12px @shadow-color;

  const themeShadows = {
    'shadow-color': rgba(colors.shadow, 0.08),
    'box-shadow-base': shadows[3],
    'shadow-2': shadows[4]
  };

  // // Input
  // // ---
  // @input-height-base           : 32px;
  // @input-height-lg             : 40px;
  // @input-height-sm             : 24px;
  // @input-padding-horizontal    : @control-padding-horizontal - 1px;
  // @input-padding-horizontal-base: @input-padding-horizontal;
  // @input-padding-horizontal-sm : @control-padding-horizontal-sm - 1px;
  // @input-padding-horizontal-lg : @input-padding-horizontal;
  // @input-padding-vertical-base : 4px;
  // @input-padding-vertical-sm   : 1px;
  // @input-padding-vertical-lg   : 6px;
  // @input-placeholder-color     : hsv(0, 0, 75%);
  // @input-color                 : @text-color;
  // @input-border-color          : @border-color-base;
  // @input-bg                    : #fff;
  // @input-addon-bg              : @background-color-light;
  // @input-hover-border-color    : @primary-color;
  // @input-disabled-bg           : @disabled-bg;
  // @input-outline-offset        : 0 0;
  // // Outline
  // @outline-blur-size      : 0;
  // @outline-width          : 2px;
  // @outline-color          : @primary-color;
  const inputs = {
    'outline-width': 0,
    'outline-color': colors.border.hover, // For focus state
    'input-color': colors.text.dark,
    'input-border-color': colors.border.input,
    'input-hover-border-color': colors.border.hover
  };

  // // Buttons
  // @btn-font-weight        : 400;
  // @btn-border-radius-base : @border-radius-base;
  // @btn-border-radius-sm   : @border-radius-base;
  //
  // @btn-primary-color      : #fff;
  // @btn-primary-bg         : @primary-color;
  //
  // @btn-default-color      : @text-color;
  // @btn-default-bg         : #fff;
  // @btn-default-border     : @border-color-base;
  //
  // @btn-danger-color       : @error-color;
  // @btn-danger-bg          : @background-color-base;
  // @btn-danger-border      : @border-color-base;
  //
  // @btn-disable-color      : @disabled-color;
  // @btn-disable-bg         : @disabled-bg;
  // @btn-disable-border     : @border-color-base;
  //
  // @btn-padding-base       : 0 @padding-md - 1px;
  // @btn-font-size-lg       : @font-size-lg;
  // @btn-font-size-sm       : @font-size-base;
  // @btn-padding-lg         : @btn-padding-base;
  // @btn-padding-sm         : 0 @padding-xs - 1px;
  const buttons = {
    'btn-default-border': colors.border.input
  };

  // // Table
  // // --
  // @table-header-bg: @background-color-light;
  // @table-header-sort-bg: @background-color-base;
  // @table-row-hover-bg: @primary-1;
  // @table-selected-row-bg: #fafafa;
  // @table-expanded-row-bg: #fbfbfb;
  // @table-padding-vertical: 16px;
  // @table-padding-horizontal: 16px;
  const table = {
    'table-header-bg': bordersAndBg['background-color-light'],
    'table-row-hover-bg': colors.grey[1]
  };

  // // Checkbox
  // @checkbox-size          : 16px;
  // @checkbox-color         : @primary-color;
  // @checkbox-check-color   : #fff;

  const checkbox = {
    // 'checkbox-size': `${iconSizes[1]}px`,
    'checkbox-color': colors.blue[6]
  };

  // // Slider
  // // ---
  // @slider-rail-background-color:        @background-color-base;
  // @slider-rail-background-color-hover:  #e1e1e1;
  // @slider-track-background-color:       @primary-3;
  // @slider-track-background-color-hover: @primary-4;
  // @slider-handle-color:                 @primary-3;
  // @slider-handle-color-hover:           @primary-4;
  // @slider-handle-color-focus:           tint(@primary-color, 20%);
  // @slider-handle-color-focus-shadow:    tint(@primary-color, 50%);
  // @slider-handle-color-tooltip-open:    @primary-color;
  // @slider-dot-border-color:             @border-color-split;
  // @slider-dot-border-color-active:      tint(@primary-color, 50%);
  // @slider-disabled-color:               @disabled-color;
  // @slider-disabled-background-color:    @component-background;

  const slider = {
    'slider-rail-background-color': colors.blue[3],
    'slider-rail-background-color-hover': colors.blue[3],
    'slider-track-background-color': primaryColors['primary-6'],
    'slider-track-background-color-hover': primaryColors['primary-6'],
    'slider-handle-color': primaryColors['primary-6'],
    'slider-handle-color-hover': primaryColors['primary-6']
  };

  // @carousel-dot-width: 16px;
  // @carousel-dot-height: 3px;
  // @carousel-dot-active-width: 24px;
  //
  // const carousel = {
  //   'carousel-dot-width': `${space[2]}px`,
  //   'carousel-dot-height': `${space[2]}px`,
  //   'carousel-dot-active-width': `${space[2]}px`
  // };

  return {
    ...themeColors,
    ...primaryColors,
    ...scaffolding,
    ...padding,
    ...itemStates,
    ...bordersAndBg,
    ...disabledStates,
    ...themeShadows,
    ...inputs,
    ...buttons,
    ...table,
    ...checkbox,
    ...links,
    ...slider,
    'input-placeholder-color': colors.text.light,
    'card-shadow': shadows[3]
  };
};

// export default antdTheme;

/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */
// @import "../color/colors";
//
// // The prefix to use on all css classes from ant.
// @ant-prefix             : ant;
// // Background color for `<body>`
// @body-background        : #fff;
// // Base background color for most components
// @component-background   : #fff;
// @code-family            : Consolas, Menlo, Courier, monospace;
// @heading-color-dark     : fade(#fff, 100%);
// @text-color-dark        : fade(#fff, 85%);
// @text-color-secondary-dark: fade(#fff, 65%);
//
// // vertical padding for all form controls
// @control-padding-horizontal: @padding-sm;
// @control-padding-horizontal-sm: @padding-xs;
//
// // ICONFONT
// @iconfont-css-prefix    : anticon;
// @icon-url               : "https://at.alicdn.com/t/font_148784_v4ggb6wrjmkotj4i";
//
// // LINK
// @link-color             : @primary-color;
// @link-hover-color       : color(~`colorPalette("@{link-color}", 5)`);
// @link-active-color      : color(~`colorPalette("@{link-color}", 7)`);
// @link-decoration        : none;
// @link-hover-decoration  : none;
//
// // Animation
// @ease-out            : cubic-bezier(0.215, 0.61, 0.355, 1);
// @ease-in             : cubic-bezier(0.55, 0.055, 0.675, 0.19);
// @ease-in-out         : cubic-bezier(0.645, 0.045, 0.355, 1);
// @ease-out-back       : cubic-bezier(0.12, 0.4, 0.29, 1.46);
// @ease-in-back        : cubic-bezier(0.71, -0.46, 0.88, 0.6);
// @ease-in-out-back    : cubic-bezier(0.71, -0.46, 0.29, 1.46);
// @ease-out-circ       : cubic-bezier(0.08, 0.82, 0.17, 1);
// @ease-in-circ        : cubic-bezier(0.6, 0.04, 0.98, 0.34);
// @ease-in-out-circ    : cubic-bezier(0.78, 0.14, 0.15, 0.86);
// @ease-out-quint      : cubic-bezier(0.23, 1, 0.32, 1);
// @ease-in-quint       : cubic-bezier(0.755, 0.05, 0.855, 0.06);
// @ease-in-out-quint   : cubic-bezier(0.86, 0, 0.07, 1);
//
// // Border color
// @border-width-base      : 1px;            // width of the border for a component
// @border-style-base      : solid;          // style of a components border
//
// // Outline
// @outline-blur-size      : 0;
// @outline-width          : 2px;
// @outline-color          : @primary-color;
//
// // Disabled states
// @disabled-bg            : @background-color-base;
// @disabled-color-dark    : fade(#fff, 35%);
//
// // Shadow
// @shadow-color           : rgba(0, 0, 0, .15);
// @box-shadow-base        : @shadow-1-down;
// @shadow-1-up            : 0 2px 8px @shadow-color;
// @shadow-1-down          : 0 2px 8px @shadow-color;
// @shadow-1-left          : -2px 0 8px @shadow-color;
// @shadow-1-right         : 2px 0 8px @shadow-color;
// @shadow-2               : 0 4px 12px @shadow-color;
//
// // Buttons
// @btn-font-weight        : 400;
// @btn-border-radius-base : @border-radius-base;
// @btn-border-radius-sm   : @border-radius-base;
//
// @btn-primary-color      : #fff;
// @btn-primary-bg         : @primary-color;
//
// @btn-default-color      : @text-color;
// @btn-default-bg         : #fff;
// @btn-default-border     : @border-color-base;
//
// @btn-danger-color       : @error-color;
// @btn-danger-bg          : @background-color-base;
// @btn-danger-border      : @border-color-base;
//
// @btn-disable-color      : @disabled-color;
// @btn-disable-bg         : @disabled-bg;
// @btn-disable-border     : @border-color-base;
//
// @btn-padding-base       : 0 @padding-md - 1px;
// @btn-font-size-lg       : @font-size-lg;
// @btn-font-size-sm       : @font-size-base;
// @btn-padding-lg         : @btn-padding-base;
// @btn-padding-sm         : 0 @padding-xs - 1px;
//
// @btn-height-base        : 32px;
// @btn-height-lg          : 40px;
// @btn-height-sm          : 24px;
//
// @btn-circle-size        : @btn-height-base;
// @btn-circle-size-lg     : @btn-height-lg;
// @btn-circle-size-sm     : @btn-height-sm;
//
// @btn-group-border       : @primary-5;
//
// // Checkbox
// @checkbox-size          : 16px;
// @checkbox-color         : @primary-color;
// @checkbox-check-color   : #fff;
//
// // Radio
// @radio-size             : 16px;
// @radio-dot-color        : @primary-color;
//
// // Radio buttons
// @radio-button-bg           : @btn-default-bg;
// @radio-button-color        : @btn-default-color;
// @radio-button-hover-color  : @primary-5;
// @radio-button-active-color : @primary-7;
//
// // Media queries breakpoints
// // Extra small screen / phone
// @screen-xs              : 480px;
// @screen-xs-min          : @screen-xs;
//
// // Small screen / tablet
// @screen-sm              : 576px;
// @screen-sm-min          : @screen-sm;
//
// // Medium screen / desktop
// @screen-md              : 768px;
// @screen-md-min          : @screen-md;
//
// // Large screen / wide desktop
// @screen-lg              : 992px;
// @screen-lg-min          : @screen-lg;
//
// // Extra large screen / full hd
// @screen-xl              : 1200px;
// @screen-xl-min          : @screen-xl;
//
// // Extra extra large screen / large descktop
// @screen-xxl              : 1600px;
// @screen-xxl-min          : @screen-xxl;
//
// // provide a maximum
// @screen-xs-max          : (@screen-sm-min - 1px);
// @screen-sm-max          : (@screen-md-min - 1px);
// @screen-md-max          : (@screen-lg-min - 1px);
// @screen-lg-max          : (@screen-xl-min - 1px);
// @screen-xl-max          : (@screen-xxl-min - 1px);
//
// // Grid system
// @grid-columns           : 24;
// @grid-gutter-width      : 0;
//
// // Layout
// @layout-body-background         : #f0f2f5;
// @layout-header-background       : #001529;
// @layout-footer-background       : @layout-body-background;
// @layout-header-height           : 64px;
// @layout-header-padding          : 0 50px;
// @layout-footer-padding          : 24px 50px;
// @layout-sider-background        : @layout-header-background;
// @layout-trigger-height          : 48px;
// @layout-trigger-background      : #002140;
// @layout-trigger-color           : #fff;
// @layout-zero-trigger-width      : 36px;
// @layout-zero-trigger-height     : 42px;
// // Layout light theme
// @layout-sider-background-light  : #fff;
// @layout-trigger-background-light: #fff;
// @layout-trigger-color-light     : @text-color;
//
// // z-index list
// @zindex-affix           : 10;
// @zindex-back-top        : 10;
// @zindex-modal-mask      : 1000;
// @zindex-modal           : 1000;
// @zindex-notification    : 1010;
// @zindex-message         : 1010;
// @zindex-popover         : 1030;
// @zindex-picker          : 1050;
// @zindex-dropdown        : 1050;
// @zindex-tooltip         : 1060;
//
// // Animation
// @animation-duration-slow: .3s; // Modal
// @animation-duration-base: .2s;
// @animation-duration-fast: .1s; // Tooltip
//
// // Form
// // ---
// @label-required-color        : @highlight-color;
// @label-color                 : @heading-color;
// @form-item-margin-bottom     : 24px;
// @form-item-trailing-colon    : true;
// @form-vertical-label-padding : 0 0 8px;
// @form-vertical-label-margin  : 0;
//
// // Input
// // ---
// @input-height-base           : 32px;
// @input-height-lg             : 40px;
// @input-height-sm             : 24px;
// @input-padding-horizontal    : @control-padding-horizontal - 1px;
// @input-padding-horizontal-base: @input-padding-horizontal;
// @input-padding-horizontal-sm : @control-padding-horizontal-sm - 1px;
// @input-padding-horizontal-lg : @input-padding-horizontal;
// @input-padding-vertical-base : 4px;
// @input-padding-vertical-sm   : 1px;
// @input-padding-vertical-lg   : 6px;
// @input-placeholder-color     : hsv(0, 0, 75%);
// @input-color                 : @text-color;
// @input-border-color          : @border-color-base;
// @input-bg                    : #fff;
// @input-addon-bg              : @background-color-light;
// @input-hover-border-color    : @primary-color;
// @input-disabled-bg           : @disabled-bg;
// @input-outline-offset        : 0 0;
//
// // Tooltip
// // ---
// //* Tooltip max width
// @tooltip-max-width: 250px;
// //** Tooltip text color
// @tooltip-color: #fff;
// //** Tooltip background color
// @tooltip-bg: rgba(0, 0, 0, .75);
// //** Tooltip arrow width
// @tooltip-arrow-width: 5px;
// //** Tooltip distance with trigger
// @tooltip-distance: @tooltip-arrow-width - 1px + 4px;
// //** Tooltip arrow color
// @tooltip-arrow-color: @tooltip-bg;
//
// // Popover
// // ---
// //** Popover body background color
// @popover-bg: #fff;
// //** Popover text color
// @popover-color: @text-color;
// //** Popover maximum width
// @popover-min-width: 177px;
// //** Popover arrow width
// @popover-arrow-width: 6px;
// //** Popover arrow color
// @popover-arrow-color: @popover-bg;
// //** Popover outer arrow width
// //** Popover outer arrow color
// @popover-arrow-outer-color: @popover-bg;
// //** Popover distance with trigger
// @popover-distance: @popover-arrow-width + 4px;
//
// // Modal
// // --
// @modal-mask-bg: rgba(0, 0, 0, 0.65);
//
// // Progress
// // --
// @progress-default-color: @processing-color;
// @progress-remaining-color: @background-color-base;
//
// // Menu
// // ---
// @menu-inline-toplevel-item-height: 40px;
// @menu-item-height: 40px;
// @menu-collapsed-width: 80px;
// @menu-bg: @component-background;
// @menu-item-color: @text-color;
// @menu-highlight-color: @primary-color;
// @menu-item-active-bg: @item-active-bg;
// @menu-item-group-title-color: @text-color-secondary;
// // dark theme
// @menu-dark-color: @text-color-secondary-dark;
// @menu-dark-bg: @layout-header-background;
// @menu-dark-arrow-color: #fff;
// @menu-dark-submenu-bg: #000c17;
// @menu-dark-highlight-color: #fff;
// @menu-dark-item-active-bg: @primary-color;
//
// // Spin
// // ---
// @spin-dot-size-sm: 14px;
// @spin-dot-size: 20px;
// @spin-dot-size-lg: 32px;
//
// // Table
// // --
// @table-header-bg: @background-color-light;
// @table-header-sort-bg: @background-color-base;
// @table-row-hover-bg: @primary-1;
// @table-selected-row-bg: #fafafa;
// @table-expanded-row-bg: #fbfbfb;
// @table-padding-vertical: 16px;
// @table-padding-horizontal: 16px;
//
// // Tag
// // --
// @tag-default-bg: @background-color-light;
// @tag-default-color: @text-color;
// @tag-font-size: @font-size-sm;
//
// // TimePicker
// // ---
// @time-picker-panel-column-width: 56px;
// @time-picker-panel-width: @time-picker-panel-column-width * 3;
// @time-picker-selected-bg: @background-color-base;
//
// // Carousel
// // ---
// @carousel-dot-width: 16px;
// @carousel-dot-height: 3px;
// @carousel-dot-active-width: 24px;
//
// // Badge
// // ---
// @badge-height: 20px;
// @badge-dot-size: 6px;
// @badge-font-size: @font-size-sm;
// @badge-font-weight: normal;
// @badge-status-size: 6px;
//
// // Rate
// // ---
// @rate-star-color: @yellow-6;
// @rate-star-bg: @border-color-split;
//
// // Card
// // ---
// @card-head-color: @heading-color;
// @card-head-background: transparent;
// @card-head-padding: 16px;
// @card-inner-head-padding: 12px;
// @card-padding-base: 24px;
// @card-padding-wider: 32px;
// @card-actions-background: @background-color-light;
// @card-shadow: 0 2px 8px rgba(0, 0, 0, .09);
//
// // Tabs
// // ---
// @tabs-card-head-background: @background-color-light;
// @tabs-card-height: 40px;
// @tabs-card-active-color: @primary-color;
// @tabs-title-font-size: @font-size-base;
// @tabs-title-font-size-lg: @font-size-lg;
// @tabs-title-font-size-sm: @font-size-base;
// @tabs-ink-bar-color: @primary-color;
// @tabs-bar-margin: 0 0 16px 0;
// @tabs-horizontal-margin: 0 32px 0 0;
// @tabs-horizontal-padding: 12px 16px;
// @tabs-vertical-padding: 8px 24px;
// @tabs-vertical-margin: 0 0 16px 0;
// @tabs-scrolling-size: 32px;
// @tabs-highlight-color: @primary-color;
// @tabs-hover-color: @primary-5;
// @tabs-active-color: @primary-7;
//
// // BackTop
// // ---
// @back-top-color: #fff;
// @back-top-bg: @text-color-secondary;
// @back-top-hover-bg: @text-color;
//
// // Avatar
// // ---
// @avatar-size-base: 32px;
// @avatar-size-lg: 40px;
// @avatar-size-sm: 24px;
// @avatar-font-size-base: 18px;
// @avatar-font-size-lg: 24px;
// @avatar-font-size-sm: 14px;
// @avatar-bg: #ccc;
// @avatar-color: #fff;
// @avatar-border-radius: @border-radius-base;
//
// // Switch
// // ---
// @switch-height: 22px;
// @switch-sm-height: 16px;
// @switch-sm-checked-margin-left: -(@switch-sm-height - 3px);
// @switch-disabled-opacity: 0.4;
// @switch-color: @primary-color;
//
// // Pagination
// // ---
// @pagination-item-size: 32px;
// @pagination-item-size-sm: 24px;
// @pagination-font-family: Arial;
// @pagination-font-weight-active: 500;
//
// // Breadcrumb
// // ---
// @breadcrumb-base-color:        @text-color-secondary;
// @breadcrumb-last-item-color:   @text-color;
// @breadcrumb-font-size:         @font-size-base;
// @breadcrumb-icon-font-size:    @font-size-sm;
// @breadcrumb-link-color:        @text-color-secondary;
// @breadcrumb-link-color-hover:  @primary-5;
// @breadcrumb-separator-color:   @text-color-secondary;
// @breadcrumb-separator-margin:  0 @padding-xs;
//
// // Slider
// // ---
// @slider-margin:                       14px 6px 10px;
// @slider-rail-background-color:        @background-color-base;
// @slider-rail-background-color-hover:  #e1e1e1;
// @slider-track-background-color:       @primary-3;
// @slider-track-background-color-hover: @primary-4;
// @slider-handle-color:                 @primary-3;
// @slider-handle-color-hover:           @primary-4;
// @slider-handle-color-focus:           tint(@primary-color, 20%);
// @slider-handle-color-focus-shadow:    tint(@primary-color, 50%);
// @slider-handle-color-tooltip-open:    @primary-color;
// @slider-dot-border-color:             @border-color-split;
// @slider-dot-border-color-active:      tint(@primary-color, 50%);
// @slider-disabled-color:               @disabled-color;
// @slider-disabled-background-color:    @component-background;
//
// // Tree
// // ---
// @tree-title-height:                   24px;
// @tree-child-padding:                  18px;
// @tree-directory-selected-color:       #fff;
// @tree-directory-selected-bg:          @primary-color;
//
// // Collapse
// // ---
// @collapse-header-padding:             12px 0 12px 40px;
// @collapse-header-bg:                  @background-color-light;
// @collapse-content-padding:            @padding-md;
// @collapse-content-bg:                 @component-background;
//
// // Message
// // ---
// @message-notice-content-padding:      10px 16px;
//
// @import "./default.deperated.less";
