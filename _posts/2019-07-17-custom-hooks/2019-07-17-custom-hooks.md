---
title: Visual Intro to Custom React Hooks
excerpt: "Here's a lightning talk I gave at Reactadelphia on when, why, and how to use custom react hooks (without showing a single line of code!)"
tags: dev reactjs
accent: blue
tile:
  order: 2
  width: 5
  height: 10
  top: 2
  image: tile.svg
feature:
  width: 17
  height: 14
  image: feature.svg
image: meta-preview.png
---

Here's a lightning talk I gave at **Reactadelphia July 2019** about when, why, and how to use custom react hooks (without showing a single line of code!)

<script async class="speakerdeck-embed" data-id="64cb3c0a70754bb9970226d940088e12" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

## Links & Resources

- [Slides on speakerdeck](https://speakerdeck.com/pixely/visual-intro-to-custom-react-hooks)
- [ReactJS docs on custom hooks](https://reactjs.org/docs/hooks-custom.html)
- [useHooks](https://usehooks.com/)

---

## (DRAFT) Text version w/ image descriptions

> Heya! I am currently working on a more detailed post w/ text descriptions, hang tight! In the meantime, you can find my progress below:

### Slide 1

today, i'll be doing a lightning talk where i'll be explaining custom react hooks without a single lone of code :)

### Slide 2

hey hi y'all, i'm melody

my pronouns are they / them

- i love tacos, tea, sometimes i'm a unicorn
- and i'm trans for transit

### Slide 3

of course, the reason i'm here and all of us are here, is because we all have an interest in web development. i make websites myself, and you can find our website online at melody.dev

### Slide 4

so let's talk about hooks. chances are, if you're not yet familiar with it, (read quote)

### Slide 5

so let's say you want to build a blog.

### Slide 6

where can hooks be used? you can asked yourself, where is stateful logic involved? in other words where are states needed across components, and bonus points if you can reuse this logic

### Slide 7

you may not be able to see it from a distance, but i included a few examples of where custom hooks can be used

- navigation
- a dark theme switcher

### Slide 9

they're just functions, but they have to follow conventions

### Slide 10

here are examples of hooks you can write that can be reused across components. since the naviagation links and read indicators rely on say, page history, you can use a single hook to handle the history for both of these components. this reduces duplication by moving your logic outside of higher order components and into its own function.

### Slide 11

the beauty of custom hooks is that they're reusable across components, which means you can share them on the net for other people to use! there's this website called usehooks.com that has some custom hooks based on common use cases

(show website)

here's a hook i can import, and implement in just a single line of code!

### Slide 12

...and with just a single line of code i can toggle between light theme and dark themes on this blog

### Slide 14

useYourImagiation() - the official react docs do a gr8 job