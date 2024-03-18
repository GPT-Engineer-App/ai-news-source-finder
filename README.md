# ai-news-source-finder

Identify News Sources: Find reliable AI news sources that offer RSS feeds or APIs for accessing their news articles.

Set Up Your Project:

Use a backend framework like Flask (Python) for simplicity and speed in setting up the server-side logic.
Prepare a basic frontend using HTML and CSS for displaying the news articles.
Fetch AI News:

Use Python libraries such as feedparser for RSS feeds or requests for APIs to fetch new AI news articles.
Schedule this task to run every four hours using a scheduling library like APScheduler or the schedule module.
Store News Articles:

Temporarily store the fetched news data in a simple format, like a list or dictionary in Python. For a more persistent solution, consider using a lightweight database like SQLite.
Update the Webpage:

Use Flask to render the stored news articles on your webpage. Flask can dynamically update the HTML content based on the stored news data.
Ensure the webpage automatically refreshes or provides a mechanism to refresh the content to display the latest news.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/ai-news-source-finder.git
cd ai-news-source-finder
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
