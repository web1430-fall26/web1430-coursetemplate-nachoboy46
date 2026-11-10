# rationale

When I tried to store the data without stringify, the preference state wasn't saved inbetween page reloads. This is likely because how javascript saves in localstorage, that being as a string. So when it's not properly formatted before hand, this leads to weird behaviour.

In order to get another "first visit", you have to wipe local storage completely. There are a few ways to do this, I just tested it by opening an incognito window, because that doesn't share the same storage as my standard windows.

Unlike local storage, session storage ends when you end the current session (like by ending the window), so it's not as useful so saving data long term, like with preferences. It does have its uses though. Like in an earlier project I had, I had to save the data for the next api request url to request the next page of cards. I ended up using a custom data attribute in an html element and reading from and saving to that, but now that I know about session storage, I would just use that, because it's just so much simpler and more intutitive. 