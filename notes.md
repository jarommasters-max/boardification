# CS 260 Notes

[Example startup - Simon](https://simon.cs260.click)
[My actual startup](http://boardification.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 3.229.125.231
I had a hard time at first getting my IP address to work with the domain since I forgot to update the saved IP address after adding the elastic IP address. It works now, though.

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

This is a very interesting section. I feel like a lot of what I did was perhaps too simple, but I suspect that it will all become clearer later (like how to add tables associated with user data to specific users). The Simon example was very helpful for reminding me how to format things.

## CSS

This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

There are a lot of things to remember about react.

One thing is React.useState().
- React.useState() returns an array containing two variables:
  - The item to which it's state is set
  - A function that updates its state.
    - When it updates the item, it schedules a re-render for all components that the item is a part of.

An object/array in local storage
- Objects and arrays can't be stored in local storage as objects and arrays. They must be passed into JSON.stringify() to save it as a JSON file. To convert back, pass it through JSON.parse()

.map:
- .map() is a very useful function that takes all the objects in an array and applies the same function to all of them and returns them again in an array. For my project, I will be passing an array of allBoards.values through it, and I will create an array of leaderboards and buttons. This will allow for my page to take all the boards, assemble them into tables, and then print them all out onto the page.


TO DO:
- [ ] create logout page for login page.
- [ ] add ability to create leaderboard
- [ ] add ability to add information to leaderboard
- [ ] add quote-changing functionality to about page
My thoughts at the moment are that I want to use the createboard page to create a board object, containing the category, score type, the list of allowed users, and lastly the list of scores. This will then be passed out of the createboard page and be added to a global map of leaderboards (which can be unpacked based on the users list of leaderboards they are a part of).
Something I will need to do is also add more functionality to leaderboards (such as the owner of a board being able to delete the board). I will also need to 

