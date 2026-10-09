# Determine Boys All Star — Website

A static, responsive football club website ready to publish with GitHub Pages.

## Pages

- `index.html` — home page
- `about.html` — club purpose and values
- `team.html` — editable player roster
- `fixtures.html` — editable match schedule
- `gallery.html` — club photo gallery with a photo viewer
- `join.html` — player-interest form
- `contact.html` — general contact form

## Publish on GitHub Pages

1. Upload the files and folders in this project to the root of a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, choose the default branch and `/ (root)`, then save.
4. GitHub Pages will show the published site URL in the same Pages settings area.

No build step is required. The site uses relative links and works from a repository subpath.

## Replace the placeholder club crest

The official club logo is in `assets/logo.png`. To change it later, replace that file and keep the same filename and PNG format.

## Add gallery photos

Save the image in `assets/gallery/` (about 1600 px wide keeps pages fast), then copy a `<figure>` block in `gallery.html` and update the file name, caption and description. Styles live in `css/gallery.css` and the photo viewer in `js/gallery.js`.

## Update team and fixture information

Open `team.html` to edit player cards. The names, numbers and positions are placeholders and should be replaced only with confirmed roster details. Open `fixtures.html` to update opponents, dates, venues and results after the club confirms the schedule. The home page includes editable club update cards.

## Contact form delivery

The join and contact forms submit to FormSubmit at `determinaneboysallstar@gmail.com`. On the first submission, FormSubmit may send an activation message to that inbox; confirm it to enable delivery. The forms require a live website connection and do not submit from a local file preview. FormSubmit is a third-party service, so its availability and privacy terms apply.

## Design notes

- Dark green and black visual identity with responsive layouts
- Semantic page landmarks, skip link, form labels and keyboard-focus styles
- Reduced-motion preference support
- Google Fonts and Unsplash hero/card photography load from external services; the site remains usable if those assets are unavailable
