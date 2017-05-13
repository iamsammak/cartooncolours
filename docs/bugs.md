## Problems with jQuery getJSON using local files in Chrome

[Solved via](http://stackoverflow.com/questions/2541949/problems-with-jquery-getjson-using-local-files-in-chrome)
Another way to do it is to start a local HTTP server on your directory. On Ubuntu and MacOs with Python installed, it's a one-liner.

Go to the directory containing your web files, and :

python -m SimpleHTTPServer


## Canvas resize bug


## Hiding Scrollbar
For Google chrome
```css
::-webkit-scrollbar {
    display: none;
}
```
Using ```position: absolute```
```css
#parent{
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
}

#child{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -17px; /* Increase/Decrease this value for cross-browser compatibility */
    overflow-y: scroll;
}
```

http://stackoverflow.com/questions/16670931/hide-scroll-bar-but-still-being-able-to-scroll
http://jsfiddle.net/5GCsJ/4713/


## Removing and element with plain javascript
```js
document.getElementById("main-color").remove();
```


https://www.w3schools.com/jsref/met_select_remove.asp
http://red-team-design.com/removing-an-element-with-plain-javascript-remove-method/


## Ideas CSS Transitions for Hexcode display
http://jsfiddle.net/ankitladhania/Qa7Aa/
