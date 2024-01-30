# [MiniReddit](https://mini-reddit.aleksandra.lysachok.dev/all/top)

## Description
MiniReddit is a dynamic, single-page application developed using a modern technology stack, combining React and TypeScript. This minimalist version of Reddit enables users to browse Reddit posts just as they would normally, but without ads and excluding certain features.

This project was completed as the final project for the [Codecademy Front-end Engineer Course](https://www.codecademy.com/career-journey/front-end-engineer). It goes beyond the original scope by integrating advanced libraries and technologies, including TypeScript, RTK Query, and MUI components.

The purpose of this project was to apply my knowledge in creating a modern front-end application. The live version of the project is [here](https://mini-reddit.aleksandra.lysachok.dev/all/top).

## Features and Usage

### Home Page
- **Subreddit Navigation**: Easily switch between TOP, POPULAR, and NEW subreddits.
- **Subreddit Search**: Find subreddits using the search bar.
- **Post Interactions**: Open posts, visit author or subreddit pages, view comments, and share post links.

### Post Details
- Includes subreddit name, author, post time, title, comment count, and vote count.
- Content types vary from videos and images to text and external links.

### Subreddit Page
- Displays the subreddit's feed in the home page format.
- Detailed community information including member count.

### Author Page
- Showcases author's post feed and profile details like karma and creation date.

### Side Menu
- Dark and Light mode toggle.
- Links to the original Reddit site and the app's source code.

## Technologies Used

### Development
- React
- TypeScript
- React Router

### User Interface
- Material-UI Components

### Fetching Data
- Redux Toolkit Query (RTK Query) library
- Reddit JSON API

### API Endpoints for this App
- `getPostsBySubreddit`: Fetches posts from a specific subreddit.
- `getPostsByAuthor`: Retrieves posts made by a specific user.
- `getPostById`: Gets details for a specific post using its ID.
- `getComments`: Obtains comments for a given post within a subreddit.
- `getSubreddit`: Gathers information about a specific subreddit.
- `getAuthorInfo`: Collects data about a user's profile.

### Automated Testing
- Jest
- React Testing Library

### Version Control
- Git
- GitHub

### Hosting
- AWS

## Responsibility and Accessibility
- **Consistent Design**: Material-UI provides a uniform look-and-feel that aligns with modern design standards, ensuring consistency across different parts of the application.
- **Efficiency**: Utilizing pre-made Material-UI components accelerates the development process, allowing for rapid prototyping and implementation.
- **Customization**: While offering out-of-the-box usability, Material-UI components are also highly customizable, making it easy to adjust the aesthetics to fit the unique branding of the application.
- **Responsiveness**: The responsive nature of Material-UI components ensures that the application is accessible on a wide range of devices, from desktops to mobile phones.
- **Accessibility**: Material-UI components are built with accessibility in mind, ensuring that the application is usable by as many people as possible.
 short version


## Installation
To run Mini Reddit locally, follow these steps:

1. Clone the repository: `git clone https://github.com/alysachok/MiniReddit.git`
2. Navigate to the project directory: `cd [local-repository]`. Replace this with the actual name of the folder where the Mini Reddit repository has been cloned.
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`

## Contributing
Contributions to the Mini Reddit project are welcome. Please follow the standard fork-and-pull request workflow. If you have any suggestions or encounter issues, feel free to open an issue or submit a pull request. 

If you would like to connect with me you can reach me at:

Email: aleksandra@lysachok.dev

ePortfolio: [Aleksandra Lysachok](https://aleksandra.lysachok.dev/)

LinkedIn: [Aleksandra Lysachok](https://www.linkedin.com/in/aleksandra-lysachok-33897b1b9/)


