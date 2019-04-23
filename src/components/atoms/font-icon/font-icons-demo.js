/**
 * Relays Icomoon demo.htnl file to the story
 * html-loader is used to load demo html into this file
 * Using 'eval' as html-loader returns a string containing 'module.exports="..."'
 */
eval(require('html-loader?attrs[]=body!../../../assets/font-icons/demo.html'));
