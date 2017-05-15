## Problems with jQuery getJSON using local files in Chrome

[Solved via](http://stackoverflow.com/questions/2541949/problems-with-jquery-getjson-using-local-files-in-chrome)
Another way to do it is to start a local HTTP server on your directory. On Ubuntu and MacOs with Python installed, it's a one-liner.

Go to the directory containing your web files, and :

python -m SimpleHTTPServer


## Canvas resize bug
- trial 1
- if you create a pokemon instance everytime on resize, then any pokemon function called will be instantiated 'x' many times

- THINGS TO TRY
  1. put document.addEventListener("resize", resizeCanvas) inside pokemon instance

5.11.17 - I believe I fixed the resizing issue
Changed const to let, since variables will need to be reassigned
Created resizeCanvas function that would reassigned canvas, ctx, pokemon...all variables that will need to be rerendered

## Keydown event listener
Event listener will also trigger when typing in input tag/field
BUT using
```js
  if (document.activeElement.nodeName != "BODY") { return; }
```
User clicking anywhere on the webpage the activeElement would be the BODY unless they click input tag, which will draw the activeElement

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

## Text Input rendering placeholder when empty
```html
<input id="search-bar-input" class="search-bar-input" placeholder="type in a name" autofocus="true" type="text"></input>
```
by setting input tag's type property to "text"...
 - "type='text'"
...it will then render placeholder when empty

# Slow loading of images

  do images load faster, after cloudinary is ping'ed

  test to see if http images run load faster than https

# add media kit, dynamic css


## pokemon name, font size
Tried to make logic to render pokemon name font size based on window.innerWidth, but there was a bug I couldn't understand

#### Minor things I need to fix
- Metapod, fearow, geodude images are very long horizontally
- vulpix name color
- poliwag primaryColor is #000


## Notes
- http://wesbos.com/times-html-entity-close-button/
- &times;
