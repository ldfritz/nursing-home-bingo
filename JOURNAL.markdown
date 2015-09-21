# Bingo Web App

## 2015-05-29 10:45

Melissa wants my bingo app.
Or at least she wants the other activities staff to be able to have as impressive a bingo as I run.

I am revising.
I removed the old code, markup, and styling.
I have it all in the old version, if I need it.

I added a bunch of documentation today.
I didn't really have a format, but I am trying to create one.
I am doing single line comments, mostly because it's what I am familiar with from Ruby.
I am including a summary of the function, property, or object.
I am including arguments and their defaults and returns.
I am also including a todo list for the areas that need work.

A couple ideas came up while I was cleaning up the code.

The function that generates the initial lists of numbers could possibly be included in the number container object.
Would it add too much clutter to that object?

I should remove the magic numbers.
I am thinking that I should move them into an object that defines the parameters of the bingo game.
Maybe every game could be build off those parameters.
And I would just need to adjust those parameters based on the URL or a configuration screen when I want to limit the number of columns.

I still can't decide whether to allow the caller to cheat and pull numbers at will.

I keep getting caught up with the idea of whether I should randomize all the numbers when the game is created or if I should pull numbers randomly.
It doesn't really matter.
It will be hidden behind the function call anyway, so it won't matter.

I ran into some trouble implementing a way to push numbers to the number container.
The issue is if I push in numbers from an array, other number container, or simply just a number object.
I tossed in a shift method and renamed count to length, but it doesn't feel right.

I need to rethink the number container.

Maybe I should prototype it in Ruby before translating the algorithms to Javascript.

