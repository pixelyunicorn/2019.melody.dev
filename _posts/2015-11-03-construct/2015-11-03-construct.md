---
title: Build your first game
tags: guides
accent: red
tile:
  order: -1
  width: 6
  height: 6
  image: ../codeday/tile.png
feature:
  width: 16
  height: 10
  image: ../codeday/feature.png
image: ../codeday/meta-preview.png
assets: "https://cdn.glitch.com/2d246102-8341-4166-a220-b39d607c9218/"
---

This is a tutorial for people who want to learn to program, and have absolutely
no experience.

We’re going to start off, however, not by talking about programming, but rather
about one of the people responsible for popularizing it, and his… interesting
skills. Here’s a video of Bill Gates jumping over a chair:

<iframe src="https://www.youtube.com/embed/8TCxE0bWQeQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" style="width:100%; height: 400px" allowfullscreen></iframe>

And just how is this relevant? We’re going to start out our exploration of
programming by making *Bill Gates Chair Jumper Simulator 2015*.

### How do you tell your game what to do? Commands!

Before we start, let’s talk a little about how this whole game making thing is
going to work. Despite how terrifying you might think it is, programming a game
is actually like giving driving directions to someone new to the area: just a
series of really specific English commands.

See if you can put together a list of “directions” you’ll need to give the
computer in order to make the chair jumping game. Here are two to get you
started:

* When the right arrow key is being pressed, move the character to the right
* When Bill Gates touches a chair, restart the game

Got your list? A lot of the job of programmers is just to translate all those
commands from plain English into the version of English that computers
understand (the “programming language”). Construct is one of those languages.

### Loading Up Construct

Ok, let’s get started making our game. To get started, just launch Construct 3:
[https://editor.construct.net/](https://editor.construct.net/)

Once you’re signed up, let’s create a new project. Just give it a name, and
leave everything else as default.

![](https://cdn-images-1.medium.com/max/800/1*BHDNzaUU_5VvHqFBgEvezQ.png)

FYI, you don’t need to create an account on Construct to use it. However, you DO
need to have an account with Dropbox, OneDrive, or another online storage
provider to save your game.

When you actually start working on your game, you should save as soon as
possible so you don’t accidentally lose your work.

### The World

Let’s quickly break down some of the parts of Construct.

The largest area with the big white space is the World Map. This is where we’re
going to be designing our Chair Jumping obstacle course:

![]({{ page.assets }}gamedev-1-world-map.png)

### Concepts of Chairs

On the right side of the screen, you’ll also see an “Project” section. This is
where we’re going to store our concepts of objects, so I’ll actually be
referring to it as the Concepts section:

![]({{ page.assets }}gamedev-2-sidebar.png)

Note that I said concepts. If you look around you, you’ll see that, despite the
fact that there are a bunch of chairs in various places, they all look and act
the same. We only need to tell Construct what the concept of a chair looks like
and acts like, and then we can create multiple *instances* of the chair in the
real world. (Neat, that’ll save us a lot of time if we make a big world!)

It’s worth mentioning: even if there’s only one of a thing in the world, it’ll
still need to be created in the Concepts section. Let’s list some concepts
you’ll need for this game:

* Chair
* Bill Gates (the player)
* The Ground

### Properties

Finally, on the far left hand of the screen, you’ll see the Properties section:

![]({{ page.assets }}gamedev-3-properties.png)

We won’t need this right now, but you might eventually find that you’ll want to,
say, change something about just one instance on the World Map. (For example,
maybe one section of the ground should be slippery).

You can select an instance in the World Map section, and then edit some things
about it in the Properties section.

### Making the Game

Okay, so let’s go ahead and get started with making our game. We’ll start by
making some of the concepts we listed earlier.

Right-click anywhere on the white part within the world map, and click “New”, then select “Sprite” (the
little image of the space invader). Almost everything in our game will be a
Sprite. Give the sprite a name (“Chair”), and hit Create.

![]({{ page.assets }}gamedev-4-insert.png)

![]({{ page.assets }}gamedev-5-sprite.png)

Click somewhere in the World Map to place the first instance of the chair. We
can create more later by just dragging them from the Concepts section into the
World Map section.

It’ll open up an image editor where you can design your chair’s image. Paint
your chair!

![]({{ page.assets }}gamedev-6-h.png)

When you’re done, hit the “Crop” button, which has an icon like this:

![](https://cdn-images-1.medium.com/max/800/0*iOq_pwoNPboILCxO.png)

(This will remove the transparent border from the sides of the chair, otherwise
the air surrounding the chair will also be considered part of the chair!)

![]({{ page.assets }}gamedev-7-h-done.png)

**Go ahead and make two more concepts: one Sprite for Bill Gates (name it
“BillGates”), and one Sprite for the ground (it can just be a black
rectangle).** When you’re done, lay out your starting level in the World Map so
Bill and a chair are both above a platform.

Now’s a good time to save your work! Construct 2 does not have an auto-save
feature, so it’s important to save frequently. Hit Ctrl+S to save.

### Behaviors

We can run our game by clicking the “play” button at the very top-left of the
Construct 3 window, but our game isn’t going to do much yet. We’ve told
Construct 3 what our game looks like, but not how anything acts!

![](https://cdn-images-1.medium.com/max/800/1*3PU0vT6dWk5gdd1GyH47mA.png)

There are two ways to tell Construct how the game acts. We’re going to talk
about the second one much later, but for right now, we’ll learn about something
called “Behaviors” — which, well, describes how things generally behave.

Right click on the concept of Bill Gates (in the “Object Types” section, **not**
in the World Map section) and click Behaviors. Add the following two behaviors
by clicking on the “+” button and then the name of each:

* “Platforming” (the little icon of the jumping guy) — tells Construct that our
character can run and jump, and should fall to the ground.
* “Scroll To” — tells Construct to make sure the camera follows our guy.

![]({{ page.assets }}gamedev-8-behavior.png)

![]({{ page.assets }}gamedev-9-behavior-window.png)

Great, let’s click that play button again and see how things go:

![](https://cdn-images-1.medium.com/max/800/1*9q215ArGWmG4vOI-JV20xw.gif)

Okay, *not great*, our guy falls through the ground!

It looks like we need to tell Construct that the ground is solid. Add the
behavior called “Solid” to the concept of the ground, and re-run the game:

![]({{ page.assets }}gamedev-10-ground-behaviors.png)

Great, it works!

### The Event Sheet

The Event Sheet is the part of Construct which most professional programmers
would really recognize as programming. In order to learn how to use it, though,
we need to understand something, first: what’s an event?

So what is an event? Well, I listed two of them back in the “Commands” section:

* When the right arrow key is being pressed…
* When Bill Gates touches a chair…

If I create an event in the Event Sheet for “When Bill Gates touches a chair…”,
the computer will start looking for that to happen on the screen. Any time it
does, it’s going to execute whatever actions I tell it to. Let’s go ahead and
create that event now (instead of “touches”, Construct 2 uses “On collision with
another object”):

![](https://cdn-images-1.medium.com/max/800/1*IGJlmFVzl4NT4ODhKsvgWA.gif)

And, let’s add an action to that event to tell the System to restart the level.
Go to System, and then select Restart Layout.

![](https://cdn-images-1.medium.com/max/800/1*1OnDnDKjgcNrIm-IbNW3Lw.gif)

It’s not the most fun thing in the world, but it is a game!

### Be Creative

Now that you know the basics, it’s time for you to be creative! Lay out your
level however you want! Add more chairs, new enemies, etc.

This game is a great start, but it’s not the only game you can make. Feel free
to start completely from scratch so you can customize your game to your liking.
(For example, want to make a top-down game? Choose the “8-direction” behavior
instead of Platformer.)

FYI — the free version has some limits. You’ll get higher limits for creating a
free account.

> If you're atttending CodeDay and still hitting the limits, just post a message on
chat.srnd.org in #helpdesk and we’ll get you login information for one of our
accounts.

---

### About SRND

Increasing Computer Science enrollment nationwide. [srnd.org](https://srnd.org/){: .uno}