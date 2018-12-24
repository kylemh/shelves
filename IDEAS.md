# Ideas

A collection of thoughts on the application in its "finished" state and what it would look like going forward. This section is getting "UX" thoughts on the table that are a bit over the top for a take-home...

- Refactor styles within ReleasesList, Shelf, and ReleaseItem such that height is handled in a uniform manner (with one source of truth)
- Save shelves in localStorage or in a database
- Come up with way to dynamically grab album arts for <ReleaseItem>
- Use Cypress to test DND logic + anything relying on window/document
- Improve the loading indicator
- Use CSS-in-JS library to have faster and consistent DnD-related stylings/animations. Currently, transititions aren't respected at the start of DnD animations.
- Allow for customization of shelf color
- Highlight droppable areas onDragStart (I can easily do this, but could not pick a design I was happy with)

- Requirement: "Get ALL releases"

  While my app does have the ability for a user to eventually see every release in blacklight's collection, I'd rather...

  - A user be allowed to choose the Discogs user being fetched from
  - A user be able to elastisearch of a user's collection
  - Infinite scroll pagination (horizontal scroll direction makes this non-trivial)
