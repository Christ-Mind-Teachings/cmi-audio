/*!
 * MediaElement.js
 * http://www.mediaelementjs.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 */(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';

mejs.i18n.en['mejs.prevp'] = 'Previous Paragraph';

Object.assign(mejs.MepDefaults, {
  prevpText: null
});

Object.assign(MediaElementPlayer.prototype, {
  buildprevp: function buildprevp(player, controls, layers, media) {
    var t = this,
        prevpTitle = mejs.Utils.isString(t.options.prevpText) ? t.options.prevpText : mejs.i18n.t('mejs.prevp'),
        button = document.createElement('div');

    button.className = t.options.classPrefix + 'button ' + t.options.classPrefix + 'prevp-button ' + t.options.classPrefix + 'prevp';
    button.innerHTML = '<button type="button" aria-controls="' + t.id + '" title="' + prevpTitle + '" aria-label="' + prevpTitle + '" tabindex="0"></button>';

    t.addControlElement(button, 'prevp');

    button.addEventListener('click', function () {
      if (player.paused) {
        return;
      }
      var event = mejs.Utils.createEvent('prevp', media);
      media.dispatchEvent(event);
    });
  }
});

},{}]},{},[1]);
