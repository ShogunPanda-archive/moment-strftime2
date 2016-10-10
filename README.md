# moment-strftime2

[![Package Version](https://badge.fury.io/js/moment-strftime2.png)](http://badge.fury.io/js/moment-strftime2)
[![Dependency Status](https://gemnasium.com/ShogunPanda/moment-strftime2.png?travis)](https://gemnasium.com/ShogunPanda/moment-strftime2)
[![Build Status](https://secure.travis-ci.org/ShogunPanda/moment-strftime2.png?branch=master)](http://travis-ci.org/ShogunPanda/moment-strftime2)
[![Coverage Status](https://coveralls.io/repos/github/ShogunPanda/moment-strftime2/badge.svg?branch=master)](https://coveralls.io/github/ShogunPanda/moment-strftime2?branch=master)

strftime support for [Moment.js](http://momentjs.com/)

https://github.com/ShogunPanda/moment-strftime2

## Introduction

Moment.js is a great, lightweight date-manipulation library, with a very approachable date format syntax that makes it a breeze to work with dates and times in the Javascript world.

Unfortunately, the library doesn't support (and [won't do it]()) one of the most common approaches to format strings: the Unix-Style strftime syntax.
 
This plugin (any many others) aims to fill the gap.

## Installation (NPM)

Simply do:

```
npm install moment-strftime2
```

## Installation (Bower)

Simply do:

```
bower install moment-strftime2
```

### Usage

```
const moment = require("moment");
require("moment-strftime2").installTo(moment);

moment().strftime("%m/%d/%y %I:%M %p %Z"); // => "16/09/11 09:22 AM CET"
```

### Supported modifiers

This plugin supports all modifiers [listed here](http://man7.org/linux/man-pages/man3/strftime.3.html) with the exception of the following:
 
* `%c`
* `%C`
* `%E`
* `%G`
* `%n`
* `%O`
* `%t`
* `%U`
* `%x`
* `%X`
* `%+`

And with the addition of the following modifiers:

* `%L`: The milliseconds as decimal-number (range 000 to 999).

TODO@PI: HOWTO EXTEND

## Supported implementations.

moment-strftime2 supports and has been tested on [NodeJS](http://nodejs.org) 6.0+.

## API Documentation

The API documentation can be found [here](https://shogunpanda.github.io/moment-strftime2).

## Contributing to moment-strftime2

* Check out the latest master to make sure the feature hasn't been implemented or the bug hasn't been fixed yet.
* Check out the issue tracker to make sure someone already hasn't requested it and/or contributed it.
* Fork the project.
* Start a feature/bugfix branch.
* Commit and push until you are happy with your contribution.
* Make sure to add tests for it. This is important so I don't break it in a future version unintentionally.

## Copyright

Copyright (C) 2016 and above Shogun <shogun@cowtech.it>.

Licensed under the MIT license, which can be found at http://opensource.org/licenses/MIT.
