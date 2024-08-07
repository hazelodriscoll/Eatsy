# Eatsy

Welcome to **Eatsy**. This project was built using Astro and Svelte, and leveraging Bootstrap for a responsive design. Eatsy offers a variety of features to simplify your meal planning and recipie discovery process which are laid out below.

## 🚀 Getting Started

To get started with Eatsy, make sure you are in root project folder, if not - cd Eatsy then:

1. **Install the project dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

   This will start the server at [http://localhost:4321](http://localhost:4321).

3. **Build the project for production:**
   ```bash
   npm run build
   ```

## 🌐 Visit Hosted GitHub Pages Site

You can find the live version of the site here:

[**Eatsy**](https://hazelodriscoll.github.io/Eatsy)

## 🚀 Project Structure

Inside the Eatsy project, you'll find the following folders and files:

```text
/
├── public/
│   ├── assets/
│   └── images/
├── src/
│   ├── components/          # Reusable components
│   │   ├── BackToTopButton.astro
│   │   ├── DisplayRecipie.svelte
│   │   ├── FavouritesList.svelte
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── ModalRecipie.svelte
│   │   ├── RandomItem.svelte
│   │   ├── RecipieCard.svelte
│   │   ├── RecipiePagination.svelte
│   │   └── SearchResult.svelte
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/               # Pages of the site
│   │   ├── aboutUs.astro
│   │   ├── browse.astro
│   │   ├── displayRecipie.astro
│   │   ├── favourites.astro
│   │   ├── index.astro
│   │   └── recipies.astro
│   │   └── searchResults.astro
│   ├── services/            # Services for handling data
│   │   ├── favourite.js
│   │   ├── fetchSearchResults.js
│   │   ├── recipieService.js
│   │   ├── selectedOption.js
│   │   └── store.js
│   ├── styles/              # Custom CSS styles
│   │   └── custom.css
├── package.json
└── README.md
```

## 🌟 Features

- **API Integration:** Integrated two requests to Spoonacular API for randomised results and search by query.
- **Recipie Discovery:** Browse a wide variety of recipies by meal type, diet, or browse all.
- **View Recipie:** See full detailed ingredients and instructions for every recipie.
- **Randomizer Button:** Get random dinner suggestions with a single click and keep rolling until you find one you like.
- **Favourites:** Save your favourite recipies using local storage so you can always come back to them.
- **Favourite Management:** Add or remove recipies from your favourites list with real-time updates.
- **Search and Filter:** Search recipies using any query and filter results by diet and meal type.
- **Custom Imagery and Designs:** Enjoy a visually appealing interface with custom images and responsive designs.
- **Back to Top Button:** Easily navigate to the top of the page with a single click.
- **Modal Recipie View:** View random recipie suggestions in a modal for quick access without having to leave the current page.
- **Paginated Recipie List:** Browse through recipies with pagination to enhance user experience and avoid duplication.
- **Dynamic Recipie Display:** Recipies are dynamically fetched and displayed, ensuring up-to-date content and refresh on changes to selected options.
- **Responsive Design:** Fully responsive design ensuring optimal viewing experience across devices.
- **Store Management:** Centralized state management using Svelte stores, local storage and session storage for efficient data handling.
- **Contact Form:** Functional contact form that emails the owner using Formspree.

## ♻️ Reusability

- **Reusable Components:** All components are made to be easily reused across the website.
- **Modular Pages:** Each page is self-contained, making it easy to maintain and extend the project in future.

## How I Managed the Project

For this project, I used GitHub to handle everything, including code, documentation, and task management. I used the following:

- **Feature and Bug Fix Branches**: I created separate branches for adding new features and fixing bugs. When ready, then merged these branches to main.

- **Regular Commits**: I made regular updates to the code with clear messages explaining what I changed.

- **GitHub Issues and Projects**: I used GitHub’s “Issues” to keep track of tasks and “Projects” to setup a Kanban board and manage them.

These practices helped me keep the project on track and organized throughout its development.

## Reports 📊

Lighthouse and Accessibility reports can be found in the `docs` folder.

## 📞 Contact

For any inquiries, please contact me via the contact form on the Contact page.

## 📑 Credits

- All imagery created by Hazel O Driscoll by putting together designs on [Canva Premium](https://www.canva.com/)
- Favorite icon created by [Lagot Design](https://www.flaticon.com/free-icons/favorite) from [Flaticon](https://www.flaticon.com/)
- Wishlist icon created by [sonnycandra](https://www.flaticon.com/free-icons/wishlist) from [Flaticon](https://www.flaticon.com/)
- Smile icon created by [Illosalz](https://www.flaticon.com/free-icons/smile) from [Flaticon](https://www.flaticon.com/)
- Sad icon created by [Illosalz](https://www.flaticon.com/free-icons/sad) from [Flaticon](https://www.flaticon.com/)
- Thought Bubble icon by [Icons8](https://icons8.com/icon/0Pd8BYFOcvVH/thought-balloon) from [Icons8](https://icons8.com)
- Dice icons created by [bearicons](https://www.flaticon.com/free-icons/dice) from [Flaticon](https://www.flaticon.com/)
- Contact form API from [Formspree](https://formspree.io) - Used for handling form submissions easily and securely.
- Recipie API: [Spoonacular Food API](https://spoonacular.com/food-api/docs) - All recipie data from random and search API paths with custom parameters.

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for more details.
