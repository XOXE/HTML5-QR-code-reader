# HTML5 - QR code reader
Using the cross platform HTML5 QR code reader by https://github.com/dwa012
###Description
--------------

Modifying the code adding:
- sound beep
- svg chekmark for the QR Code
- stop when make the scan Input to show the result.  

All the change for the jquery is in the qr_code.js

###Important
--------------

I tried it in Firefox 47 and Chrome 51.


###Usage
----------------------

This is where display de value of the read (qr_code.js):
 
```
 $('input[name=qr]').val(data);
 
```


###MIT LICENSE
--------------

Copyright &copy; 2016 José J. Vázquez

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
