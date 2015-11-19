/*
---
Description: This Code shows how to keep your javascript code properly
so that its is self explanatory code structure 

license: MIT-style
authors:
- Siddharth Deshpande (dsiddharth2@gmail.com)

...
* Version 1.0
* Copyright (c) 2014 Siddharth Deshpande
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*
*/

var JavascriptModule = function() {

    /* Default Options required to code */
    this.defaultOptions = {
        default1 : "VALUE 1",
        default2 : "VALUE 2"
    };

    /**
     * First Function to be called
     */
    this.init = function (options) {
        console.log("INIT : CONSTRUCTOR CALLED");
        this.defaultOptions.default1 = options.default1;        
        
        console.log("Values of Default options after resetting them");
        console.log(this.defaultOptions);
        this.build();
        this.attach();
    };

    /**
     * If you want to build any html using javascript you can do it here.
     */    
    this.build = function() {
        console.log("BUILD CALLED : BUILD DOM HERE");
        // Biuld code for the HTML DOM
    };

    /**
     * All the events done in that module should be attached here
     */
    this.attach = function() {
        console.log("ATTACH CALLED : ATTACH YOUR EVENTS IN THE PAGE HERE");        
    };

    /**
     * Some Common Function
     */
    this.commonfunction1 = function(data) {
        // Do Something
    };

    /**
     * Some Common Function
     */
    this.commonfunction2 = function(element) {
        // Do Something
    };
};