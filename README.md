# CSS to the rescue

<kbd>![The soups part of the restaurant menu website](https://raw.githubusercontent.com/DanielvandeVelde/css-to-the-rescue-1920/master/public/img/readme.png "The soups part of the restaurant menu website")</kbd>

## Demo

I've got a [demo](https://danielvandevelde.github.io/css-to-the-rescue-1920/) running on GitHub Pages.

## Table of contents

1. [Goal](#1-Goal)
2. [Installation](#2-Installation)
3. [Context](#3-Context)
4. [Restrictions](#4-Restrictions)
5. [Lessons](#5-Lessons)

## 1. Goal

This is an experiment to see how cool and amazing creating stuff with pure CSS can be.  
This is a restautant menu but most important of all, it's art!

## 2. Installation

It doesn't need any installing you can just:

```bash
git clone https://github.com/DanielvandeVelde/css-to-the-rescue-1920.git
```

And run `index.html` :-)

## 3. Context

- [x] Dark-mode

Let's start with the best of the worst.  
The dark-mode restriction seemed like it would be a lot of fun and something I could do a ton with.  
Spoiler-alert: It was actually quite difficult to implement once I created the page the way I did.  
You see; dark-mode tries to make the background a black colored and the text-color a white.
This means that Chrome itself overrides my `@media (prefers-color-scheme: dark)` so no white text-color will get to be black.  
Luckily I figured out a work-around with my travels through the [CSS Almanac](https://css-tricks.com/almanac/) so I already had a solution lined up.  
Sadly working that out would mean many wasted minutes on something silly that I already made a button for which I why I created a little Codepen which you can find at the bottom of this paragraph so you can see the genius at work.  
But I have added a little easter-egg for the people using dark-mode of which I also created a small image that I got linked at the bottom of this paragraph.
I have also removed the dark-mode easteregg for everyone on the phone

Check out my "not black" black text in the [Codepen I made](https://codepen.io/Danielvandevelde/pen/eYNWvJP).

Check out an image of the dark-mode [easter-egg](https://raw.githubusercontent.com/DanielvandeVelde/css-to-the-rescue-1920/master/public/img/dark-mode-easter-egg.png).

## 4. Restrictions

- [x] Two colors

The two colors was actually really fun!  
There's so much you can (and can't) do with two colors.  
I tried my best not to make it too boring and combine those two colors the best I could by using: patterns, opacity, animations and switching the dominant color frequently.
This two color system also switches for the dark-mode where the white color gets replaced by a black.  
This makes the whole feel of the menu websites much more stylish in my opinion.

- [x] Responsive without media queries

This one was a lot harder.
While learning new things (such as grid) and creating something that's responsive without using media queries is very difficult.
I tried using mostly viewport-relative values like `vw` and `vh` as well as some `%` values inside of that and `em` when I really had to create something that had to be 'pixel perfect'.

## 5. Lessons

I've learned a ton.  
I'll try to put some things here I'm proud of or that took some work to get right.
However, I can't get everything in here since I'm a little over 1,000 lines of just CSS.

### Svg

`<svg>`'s looked quite easy but are really difficult to master.  
I've made my own `<svg>`'s by creating ellipses and also by drawing some in Illustrator (not my strong suit).
I managed to continue this journey by creating some `<text>` and `<tspan>` elements. Rotating them and eventually animating them with CSS properties.
I also found a way to make the `<text>` properties into links so the `<svg>` could be used as a menu.

I continued this journey by diving deeper into `<svg>` by using `<animateMotion` and `<mpath>` for motion animation on a path. This can be viewed on the [#desserts 'route' of the demo](https://danielvandevelde.github.io/css-to-the-rescue-1920/#desserts).
On this page you can also find an `<svg>` rectangle morphing into a circle as well as many more `<div>`'s morphing from rectangles into circles on the background.

One more thing that was fun to figure out was the `<animate>` with a start on click going along a route. I switched out the starting circle with a new one so it couldnt get clicked on anymore once the animation started. This small animation can be tested out on the demo page by clicking the center circle of the eye.

### CSS Selectors & pseudo's

I started working with the :target pseudo class in the hope I could make multiple pages I could work with.
This was one of the first things I did and something that worked out in my favor later when I wanted to experiment with multiple different CSS properties.

At the very end I added a checkbox to create a better looking dark-mode to the website with the :checked pseudo-class.
This also had the pseudo-elements ::before and ::after which I have added in multiple locations on the restaurant menu to create some stuff I find awesome.

I also used the :root, :hover, :first-child, :nth-of-type and many other different selectors although those weren't quite new to me. The :not selector however was but I haven't used that in a great way that I can write about.

I couldn't find any great use for the attribute selectors even though they seemed great to get specific elements with. It basically feels like you can use RegEx with those things. The exact same with the class selector and universal selector.

Sibling selectors saved my life with on this project. That way I could move the navigation every time I used :target to select a new page. Child Selectors made sure the cascade of CSS didn't go too far and the use of the `,` made it so I almost stayed under a 1,000 lines of CSS.

### Other small things

#### Variable

CSS variables rule! I only used one at the very end but it saved me so much trouble in not creating a hundred more lines for the dark-mode switch by being able to redefine the variable.

#### Cursor

The cursor is a pretty cool thing as well. Apparently you can't really style it or animate it. What you can do is set a Keyframe animation on it. Which means that I could set and re-set it multiple times using this animation. I created a 24 frame a second animation of a rotating cursor so that it would look like it was spinning. The point to click I could luckily place myself so you can still 'normally' click by aiming where the cursor is pointed.

#### Appetizer

The [#appetizers 'route' of the demo](https://danielvandevelde.github.io/css-to-the-rescue-1920/#appetizers) has a pretty cool swipe animation to get on the page and by setting the background-size it feels like the dots are actually spreading all over the page. Something small but what I find really cool. Also the little blocks are made up with a grid-area and when hovering over them they will disappear 'forever' thanks to a different animation-delay on the element and the :hover.

#### Soups

At the [#soups 'route' of the demo](https://danielvandevelde.github.io/css-to-the-rescue-1920/#soups) there's a lot going on.
It's a 3D room by manipulating 5 `<div>`'s to be a room and then putting different elements inside it. I'm also animating the perspective in two different ways.
The sides have a :hover on it to show and make it feel even more like a 3D room.  
The sides were just me not finding the right style of pattern on the sides so I just went with them all.
