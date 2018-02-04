/*
 * This file is part of the moment-strftime2 npm package. Copyright (C) 2016 and above Shogun <shogun@cowtech.it>.
 * Licensed under the MIT license, which can be found at https://choosealicense.com/licenses/mit.
 */

/* eslint-disable quote-props */

/**
 * @namespace moment-strftime2
 */
const strftime2 = {
  /**
   * The character used to recognize special sequences
   * @memberOf moment-strftime2
   */
  separator: "%",

  /**
   * The default set of recognized modifiers. A reduction of the modifiers listed [here](http://man7.org/linux/man-pages/man3/strftime.3.html).
   * @memberOf moment-strftime2
   */
  modifiers: {
    a: "ddd",
    A: "dddd",
    b: "MMM",
    B: "MMMM",
    d: "DD",
    D: "MM/DD/YYYY",
    e: "D",
    F: "YYYY-MM-DD",
    g: "WW",
    h: "MMM",
    H: "HH",
    I: "hh",
    j: "DDDD",
    k: "H",
    L: "SSS",
    l: "h",
    m: "MM",
    M: "mm",
    p: "A",
    P: "a",
    r: "hh:mm:ss A",
    R: "HH:MM",
    s: "x",
    S: "ss",
    T: "HH:mm:ss",
    u: "E",
    V: "WW",
    w: "d",
    W: "WW",
    y: "YY",
    Y: "YYYY",
    z: "ZZ",
    Z: "z",
    "%": "%"
  },

  /**
   * Adds `strftime` to the supplied moment module.
   *
   * @param {Object} moment The module where to install to.
   * @memberOf moment-strftime2
   */
  installTo(moment){
    moment.fn.strftime = function(format){
      const matcher = new RegExp(`(${strftime2.separator}[${Object.keys(strftime2.modifiers).join("")}])`, "g");

      return format.replace(matcher, t => {
        const replacement = strftime2.modifiers[t[1]];
        return replacement ? this.format(replacement) : t;
      });
    };
  }
};

module.exports = strftime2;

/* eslint-enable quote-props */
