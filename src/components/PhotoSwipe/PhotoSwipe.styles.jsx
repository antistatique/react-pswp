import { css } from '@emotion/core';

import skin from '../../assets/skin';

const defaultTheme = {
  foreground: '#000',
  background: '#fff',
};

export default (theme = defaultTheme) => css`
  .pswp__bg {
    background: ${theme.background};
  }

  .pswp__container_transition {
    transition: transform 333ms cubic-bezier(0.4, 0, 0.22, 1);
  }

  /*
	1. Buttons
	2. Share modal and links
	3. Index indicator ("1 of X" counter)
	4. Caption
	5. Loading indicator
	6. Additional styles (root element, top bar, idle state, hidden state, etc.)
*/

  /* 1. Buttons */

  /* <button> css reset */
  .pswp__button {
    display: block;
    position: relative;
    float: right;
    width: 44px;
    height: 44px;
    margin: 0;
    padding: 0;
    background: none;
    border: 0;
    transition: opacity 0.2s;
    cursor: pointer;
    overflow: visible;
    opacity: 0.75;
    box-shadow: none;
  }

  .pswp__button:focus,
  .pswp__button:hover {
    opacity: 1;
  }

  .pswp__button:active {
    outline: none;
    opacity: 0.9;
  }

  /* pswp__ui--over-close class it added when mouse is over element that should close gallery */
  .pswp__ui--over-close .pswp__button--close {
    opacity: 1;
  }

  .pswp__button,
  .pswp__button--arrow--left:before,
  .pswp__button--arrow--right:before {
    width: 44px;
    height: 44px;
    background: url("data:image/svg+xml,${skin(
      theme.foreground,
    )}") 0 0 no-repeat;
    background-size: 264px 88px;
  }

  .pswp__button--close {
    background-position: 0 -44px;
  }

  .pswp__button--share {
    background-position: -44px -44px;
  }

  .pswp__button--fs {
    display: none;
  }

  .pswp--supports-fs .pswp__button--fs {
    display: block;
  }

  .pswp--fs .pswp__button--fs {
    background-position: -44px 0;
  }

  .pswp__button--zoom {
    display: none;
    background-position: -88px 0;
  }

  .pswp--zoom-allowed .pswp__button--zoom {
    display: block;
  }

  .pswp--zoomed-in .pswp__button--zoom {
    background-position: -132px 0;
  }

  /* no arrows on touch screens */
  .pswp--touch .pswp__button--arrow--left,
  .pswp--touch .pswp__button--arrow--right {
    visibility: hidden;
  }

  /*
	Arrow buttons hit area
	(icon is added to :before pseudo-element)
*/
  .pswp__button--arrow--left,
  .pswp__button--arrow--right {
    position: absolute;
    top: 50%;
    width: 70px;
    height: 100px;
    background: none;
    margin-top: -50px;
  }

  .pswp__button--arrow--left {
    left: 0;
  }

  .pswp__button--arrow--right {
    right: 0;
  }

  .pswp__button--arrow--left:before,
  .pswp__button--arrow--right:before {
    content: '';
    position: absolute;
    top: 35px;
    width: 32px;
    height: 30px;
    background-color: ${theme.background};
  }

  .pswp__button--arrow--left:before {
    left: 6px;
    background-position: -138px -44px;
  }

  .pswp__button--arrow--right:before {
    right: 6px;
    background-position: -94px -44px;
  }

  /* 2. Share modal/popup and links */
  .pswp__counter,
  .pswp__share-modal {
    user-select: none;
  }

  .pswp__share-modal {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 10px;
    background: ${theme.background};
    transition: opacity 0.25s ease-out;
    z-index: 1600;
    opacity: 0;
    will-change: opacity;
  }

  .pswp__share-modal--hidden {
    display: none;
  }

  .pswp__share-tooltip {
    display: block;
    position: absolute;
    top: 56px;
    right: 44px;
    width: auto;
    background: ${theme.background};
    transform: translateY(6px);
    transition: transform 0.25s;
    z-index: 1620;
    border-radius: 2px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
    will-change: transform;
  }

  .pswp__share-tooltip a {
    display: block;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 18px;
    color: ${theme.background};
    text-decoration: none;
  }

  .pswp__share-tooltip a:hover {
    text-decoration: none;
    color: ${theme.background};
  }

  .pswp__share-tooltip a:first-of-type {
    /* round corners on the first/last list item */
    border-radius: 2px 2px 0 0;
  }

  .pswp__share-tooltip a:last-child {
    border-radius: 0 0 2px 2px;
  }

  .pswp__share-modal--fade-in {
    opacity: 1;
  }

  .pswp__share-modal--fade-in .pswp__share-tooltip {
    transform: translateY(0);
  }

  /* increase size of share links on touch devices */
  .pswp--touch .pswp__share-tooltip a {
    padding: 16px 12px;
  }

  a.pswp__share--facebook:before {
    content: '';
    display: block;
    position: absolute;
    top: -12px;
    right: 15px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-bottom-color: ${theme.foreground};
    pointer-events: none;
  }

  a.pswp__share--download:hover {
    background: ${theme.foreground};
  }

  /* 3. Index indicator ("1 of X" counter) */
  .pswp__counter {
    position: absolute;
    top: 0;
    left: 0;
    height: 44px;
    padding: 0 10px;
    font-size: 13px;
    line-height: 44px;
    color: ${theme.foreground};
    opacity: 0.75;
  }

  /* 4. Caption */
  .pswp__caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 44px;
  }

  .pswp__caption small {
    font-size: 11px;
    color: ${theme.foreground};
  }

  .pswp__caption__center {
    margin: 0 auto;
    padding: 10px;
    font-size: 13px;
    line-height: 20px;
    color: ${theme.foreground};
    text-align: left;
    max-width: 420px;
    text-align: center;
  }

  .pswp__caption--empty {
    display: none;
  }

  /* Fake caption element, used to calculate height of next/prev image */
  .pswp__caption--fake {
    visibility: hidden;
  }

  /* 5. Loading indicator (preloader)	You can play with it here - http://codepen.io/dimsemenov/pen/yyBWoR

 */
  .pswp__preloader {
    position: absolute;
    top: 0;
    left: 50%;
    width: 44px;
    height: 44px;
    transition: opacity 0.25s ease-out;
    margin-left: -22px;
    opacity: 0;
    will-change: opacity;
    direction: ltr;
  }

  .pswp__preloader__icn {
    width: 20px;
    height: 20px;
    margin: 12px;
  }

  .pswp__preloader--active {
    opacity: 1;
  }

  .pswp--css_animation .pswp__preloader--active {
    opacity: 1;
  }

  .pswp--css_animation .pswp__preloader--active .pswp__preloader__icn {
    animation: clockwise 500ms linear infinite;
  }

  .pswp--css_animation .pswp__preloader--active .pswp__preloader__donut {
    animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite;
  }

  .pswp--css_animation .pswp__preloader__icn {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 14px;
    height: 14px;
    margin: 0;
    background: none;
    opacity: 0.75;
  }

  .pswp--css_animation .pswp__preloader__cut {
    /*
			The idea of animating inner circle is based on Polymer ("material") loading indicator
			 by Keanu Lee https://blog.keanulee.com/2014/10/20/the-tale-of-three-spinners.html
		*/
    position: relative;
    width: 7px;
    height: 14px;
    overflow: hidden;
  }

  .pswp--css_animation .pswp__preloader__donut {
    position: absolute;
    top: 0;
    left: 0;
    width: 14px;
    height: 14px;
    margin: 0;
    background: none;
    border: 2px solid ${theme.foreground};
    box-sizing: border-box;
    border-radius: 50%;
    border-left-color: transparent;
    border-bottom-color: transparent;
  }

  @media screen and (max-width: 1024px) {
    .pswp__preloader {
      position: relative;
      top: auto;
      left: auto;
      float: right;
      margin: 0;
    }
  }

  @keyframes clockwise {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes donut-rotate {
    0% {
      transform: rotate(0);
    }

    50% {
      transform: rotate(-140deg);
    }

    100% {
      transform: rotate(0);
    }
  }

  /* 6. Additional styles */

  /* root element of UI */
  .pswp__ui {
    visibility: visible;
    opacity: 1;
    z-index: 1550;
  }

  /* top background bar with buttons and "1 of X" indicator */
  .pswp__top-bar {
    background: ${theme.background} !important;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
  }

  .pswp__caption,
  .pswp__top-bar,
  .pswp--has_mouse .pswp__button--arrow--left,
  .pswp--has_mouse .pswp__button--arrow--right {
    will-change: opacity;
    transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);
  }

  /* pswp--has_mouse class is added only when two subsequent mousemove events occur */
  .pswp--has_mouse .pswp__button--arrow--left,
  .pswp--has_mouse .pswp__button--arrow--right {
    visibility: visible;
  }

  .pswp__top-bar,
  .pswp__caption {
    background-color: ${theme.background};
  }

  /* pswp__ui--fit class is added when main image "fits" between top bar and bottom bar (caption) */
  .pswp__ui--fit .pswp__top-bar,
  .pswp__ui--fit .pswp__caption {
    background-color: ${theme.background};
  }

  /* pswp__ui--idle class is added when mouse isn't moving for several seconds (JS option timeToIdle) */
  .pswp__ui--idle .pswp__top-bar {
    opacity: 0;
  }

  .pswp__ui--idle .pswp__button--arrow--left,
  .pswp__ui--idle .pswp__button--arrow--right {
    opacity: 0;
  }

  /*
	pswp__ui--hidden class is added when controls are hidden
	e.g. when user taps to toggle visibility of controls
*/
  .pswp__ui--hidden .pswp__top-bar,
  .pswp__ui--hidden .pswp__caption,
  .pswp__ui--hidden .pswp__button--arrow--left,
  .pswp__ui--hidden .pswp__button--arrow--right {
    /* Force paint & create composition layer for controls. */
    opacity: 0.001;
  }

  /* pswp__ui--one-slide class is added when there is just one item in gallery */
  .pswp__ui--one-slide .pswp__button--arrow--left,
  .pswp__ui--one-slide .pswp__button--arrow--right,
  .pswp__ui--one-slide .pswp__counter {
    display: none;
  }

  .pswp__element--disabled {
    display: none !important;
  }

  .pswp--minimal--dark .pswp__top-bar {
    background: none;
  }
`;
