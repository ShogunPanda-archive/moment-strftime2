/*
 * This file is part of the moment-strftime2 npm package. Copyright (C) 2016 and above Shogun <shogun@cowtech.it>.
 * Licensed under the MIT license, which can be found at http://www.opensource.org/licenses/mit-license.php.
 */

/* globals describe, it */
/* eslint-disable no-unused-expressions */

const expect = require("chai").expect;
const moment = require("moment");
const strftime2 = require("./main");
strftime2.installTo(moment);

describe("moment.strftime", function(){
  beforeEach(function(){
    this.subject = moment("2016-10-10 12:34:56.135 +02:00");
    this.alternativeSubject = moment("2018-09-02 03:04:05.678 UTC");
  });
  
  describe("it supports standard modifiers", function(){
    for(let modifier of Object.keys(strftime2.modifiers)){
      it(`- %${modifier}`, function(){
        expect(this.subject.strftime(`%${modifier}`)).to.eql(this.subject.format(strftime2.modifiers[modifier]));
        expect(this.alternativeSubject.strftime(`%${modifier}`)).to.eql(this.alternativeSubject.format(strftime2.modifiers[modifier]));
      });
    }
  });
  
  describe("customizations", function(){
    it("should allow modifying the modifiers", function(){
      expect(this.subject.strftime("%w %o")).to.eql("1 %o");
      expect(this.alternativeSubject.strftime("%w %o")).to.eql("0 %o");
      
      strftime2.modifiers.w = "YY";
      strftime2.modifiers.o = "DD";
      expect(this.subject.strftime("%w %o")).to.eql("16 10");
      expect(this.alternativeSubject.strftime("%w %o")).to.eql("18 02");
  
      strftime2.modifiers.w = "d";
      strftime2.modifiers.o = null;
      expect(this.subject.strftime("%w %o")).to.eql("1 %o");
      expect(this.alternativeSubject.strftime("%w %o")).to.eql("0 %o");
    });
  
    it("should allow modifying the separator", function(){
      expect(this.subject.strftime("%w %% #w #%")).to.eql("1 % #w #%");
    
      strftime2.separator = "#";
      expect(this.subject.strftime("%w %% #w #%")).to.eql("%w %% 1 %");
  
      strftime2.separator = "%";
      expect(this.subject.strftime("%w %% #w #%")).to.eql("1 % #w #%");
    });
  });

  it("shouldn't replace unrecognized modifiers or the rest of the text", function(){
    expect(this.subject.strftime("DDD dd [ [[] %d")).to.eql("DDD dd [ [[] 10");
    expect(this.alternativeSubject.strftime("DDD dd [ [[] %d")).to.eql("DDD dd [ [[] 02");
  });
});

/* eslint-enable no-unused-expressions */
