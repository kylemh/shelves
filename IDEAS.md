# Ideas

A collection of thoughts on the application in its "finished" state and what it would look like going forward.

## What would I do to improve the codebase given time?

- Conditionally render drag indicator on <ReleaseItem>
- Refactor styles within ReleasesList, Shelf, and ReleaseItem such that height is handled in a uniform manner (with one source of truth)

## What about things outside the scope of business requirements?

- Save shelves in localStorage or in a database
- Allow the Discogs user being inspected to be edited
- Elastic search of rack items
- Come up with way to dynamically grab album arts for <ReleaseItem>
- Use Cypress to test DND logic + anything relying on window/document
- Improve the loadin indicator
- Use CSS-in-JS library to have faster and consistent DnD-related stylings/animations. Currently, transititions aren't respected at the start of DnD animations.
