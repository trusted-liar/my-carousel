# my-carousel
This is a basic carousel build using `jquery`. It is fluid. You can set a few options. Hope it helps you out. You can comment and I'll help you out as much as I could :)

Your comments are appreciated.

<h1>Tutorial</h1>
Here I'll guide you about how to setup the carousel.
<h2>Setup</h2>
Include the my-carousel.css and my-carousel.js files in your HTML page.<br>
In your HTML page, create a div with class `my-carousel-slider`. Give it an id.
```html
<div class='my-carousel-slider' id="your-id">
</div>
```
   
Inside that div, create div with id `carousel-card`. Each div will become a card in the carousel. Minimum 3 cards are required. Anything you want to display on the card has to be given inside this div.
```html
<div class='my-carousel-slider' id="your-id">
    <div class="carousel-card">
    </div>
    <div class="carousel-card">
    </div>
    <div class="carousel-card">
    </div>
    .
    .
    .
</div>
```

Also, you need to have 2 more divs in the outer div.
These are empty div with classes as `left-click` and `right-click`.
```html
<div class='my-carousel-slider' id="your-id">
    .
    .
    <div class="left-click"></div>
    <div class="right-click"></div>
</div>

Your whole structure would finally look something like this.
```html
<div class='my-carousel-slider' id="your-id">
    <div class="carousel-card">
    </div>
    <div class="carousel-card">
    </div>
    <div class="carousel-card">
    </div>
    <div class="carousel-card">
    </div>
    <div class="carousel-card">
    </div>
    <div class="carousel-card">
    </div>
    <div class="left-click"></div>
    <div class="right-click"></div>
</div>
```

You can start the carousel by using following line in your javascript file.
```javascript
$('your-id').carousel();
```

This will pretty much get you started.

<h2>Customization</h2>

There are a few options that you can choose to customize if you want to.

<h4>Circular</h4>
You can have a carousel which just shows all the cards in linear manner. There is a beginning and an end. No continuous circulation.
For this you need to set the value of `continuous` as `false` in `my-carousel.js` file line no `5`.
```javascript
    continuous: false,
```
If you want the cards to come in a circular/cyclic manner, you have to set it as `true`.
```javascript
    continuous: true,
```
By default it is set as `true`.

<h4>Auto</h4>
You can set the carousel to auto rotate after a set time period. Set `auto` as `true` in `my-carousel.js` file, line no `6`. `false` would disable it. By default it is `false`.
```javascript
    auto: true,
```

You can also set the timing of auto change in line `7`. The timing is given in ms. Default is `5000`.

> You can only have auto rotate if you set *continuous* as *true*
