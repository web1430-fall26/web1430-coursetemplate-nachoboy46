### Elements found (5)

| Tag | Semantic? | Purpose |
|-----|-----------|---------|
| Div|	No |        It advertises the websites patreon to the user |
| Footer |  Yes	| It adds footer at the bottom of the page with some info |
| Header | Yes |	It adds the header at the top of the page that has some tabs and links and stuff in it  |
| Main |  Yes	|	It contains the brunt of all elements on the webage and a bunch of subtags, almost everything you can see on the page is in main. |
| Div |  No | This one is a little bit more clear than the previous div, because it has 'class="deckheader-wrapper"' and the previous one was just giberish, but div in nature is still non-semantic. |
### Live text edit
[Describe what you changed and paste a screenshot reference here]
I changed the text in the patreon link from "" to "Support us on Patreon to summon
 convince wizards of the coast to unban grizzlebrand and put it on the gamechangers list instead"

### Page structure
- `<main>` present?
yes, the bulk of the divs are in this.
- `<h1>` present?
no.
- `<nav>` present?
no.
- Images with `alt` attributes?
Yes. One example is the moxfield logo which has the alt of "Moxfield logo"

### Console results

| Expression | Result | What it tells you |
|-----------|--------|------------------|
| `document.title` | 'Captain America Vehicle // Commander (Captain America, Living Legend) deck list mtg // Moxfield — MTG Deck Builder' | This tells me the title of the tab
| `document.querySelectorAll('a').length` | 312  | It gives the total number of links in the webpages document |
| `document.querySelectorAll('img[alt=""]').length` | 0  | This says how many images on the webpage has an empty alt attribute |

### Network: first request

- URL:
https://assets.moxfield.net/cards/card-J7Wgg-normal.webp?327587961

- HTTP method:
GET
- Status code:
200 OK
- Content-Type:
image/webp
- Total page requests (approx):
82
- Total page weight:
3.2 MB

---

## Site 2: https://en.wikipedia.org/wiki/Egg_(disambiguation)

### Elements found (5)

| Tag | Semantic? | Purpose |
|-----|-----------|---------|
|Head |Yes |This tag contains some important metadata for the website |
|Div |No |This is a divider for the header of the webiste. they didn't use a traditional header tag like the previous site. |
|body |Yes |This contains the bulk of the websites content and other tags |
|div |No |This is the pag container, it contains all the text and stuff from the page and the other link tags |
|a |yes |This is a link to a magezine on eggs |

### Console results

| Expression | Result | What it tells you |
|-----------|--------|------------------|
| `document.title` |'Egg (disambiguation) - Wikipedia' | what's in the title bar|
| `document.querySelectorAll('a').length` |202 |It gives the total number of links on the page |
| `document.querySelectorAll('img[alt=""]').length` |1 | It gives the amount of links without and alt tag or an empty one|

### Network: first request

- URL:
https://intake-analytics.wikimedia.org/v1/events?hasty=true

- HTTP method:
POST
- Status code:
202 Accepted
- Content-Type:

---

## My page (lab00/index.html)

- `document.querySelector('h1').textContent` returned: document.querySelector('h1').textContent
- TypeError produced by: `document.querySelector('p').foo.bar`
- Error message text: VM641:1 Uncaught TypeError: Cannot read properties of undefined (reading 'bar')
    at <anonymous>:1:32
- What the error message tells you: reading bar is undefined

---

## Reflection

What surprised you? What does DevTools tell you that you couldn't learn by just looking at the page?

I thought it was really cool. I was able to mess around with all kind of text and headers and stuff. It's really interesting
how it all interacts with everything. I think it's cool how different tags can do similar things, like div and header.
