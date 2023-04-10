# Requirements
1. PHP: Please ensure you have PHP installed:
    1. Mac users can use Homebrew to install php: `brew install php`
    2. To install on windows follow instructions [here](https://www.php.net/manual/en/install.windows.php) 
    3. All other OS's or platforms have installation instructions [here](https://www.php.net/manual/en/install.php) 
2. Composer: Please you have composer installed:
    1. Mac users can use Homebrew to install `brew install composer`
    2. Windows users can find step by step installation instructions [here](https://www.geeksforgeeks.org/how-to-install-php-composer-on-windows/) or direct composer website steps [here](https://getcomposer.org/doc/00-intro.md#installation-windows)
    3. For all other OS's platforms please find setup instructions [here](https://getcomposer.org/doc/00-intro.md) 
3. Git: Please ensure you have Git installed:
    1. Download Git for your OS/platform from [here](https://git-scm.com/downloads)
    2. Use the command `git clone branch-name-here`

# Setup server instructions
1. Navigate to `/server` and copy `.env.example` into a filed named `.env`
2. If you are a windows user please ensure you have XAMPP running, with the `MySQL` instance running.
3. Navigate into the `/server` directory
4. Run `php artisan migrate`
    1. If you are prompted to created the database 'locations' please accept
5. Run `php artisan db:seed`
6. Run `php artisan serve`

# Setup client instructions
1. Navigate into the `/client` directory in your terminal
2. Run `npm install`
3. Run `npm run dev`
4. A URL should be presented to you, please visit it:
    1. http://127.0.0.1:5173/

---

### This concludes the setup steps, happy reviewing!

---

# Testing 
1. Navigate to `/server`
2. Run `php artisan test`
3. Test output will be visible in your terminal

---

# How would I do this differently given more time?

## Client
- I would have used TypeScript instead of vanilla JS for extra confidence and safety. As well as better developer quality of life.
- I would have used a third party state management library such as Redux or Zustand
  - ContextProvider would be a native solution
  - Redux would have allowed me to write much more maintable and readable React code
  - Most importantly remove all the prop drilling I have in this current app
- I would have used [Cypress](https://www.cypress.io/) to write end to end tests to bring confidence into the front end when changes are made, as well as further re-enforce the confidence with the existing back end tests.
  - Further to this I would use Cypress to unit test components.
- I would have used [styled-components](https://styled-components.com/) instead of using CSS files
- I would have been more mindful of responsiveness
- I would have been more mindful of accessibility and make the site more suitable for screen readers
- I would investigate the re-renders currently being triggered by form inputs and consider if the `useRef` hook would be useful to prevent re-renders each keystroke - unlikely but if the page where to become very busy it would be a possible solution
- Majority of the styling would have likely benefitted from being implemented in CSS grid, however I used flex box for the sake of time
- I would have used a library to display a toast for responses from the server
  - The current implementation below the 'create' button doesn't correctly draw the users attention
- Would have added missing CRUD functionality
  - Update
  - Delete

---

## Server
- I would have written a Service class to extract away searching/filter logic from `LocationController@index`
- I would dockerised the app using [laravel sail](https://laravel.com/docs/10.x/sail). Making deployment OS agnostic and possibly even being able to deploy this assessment on a hosting service such as Vercel.
- Similar to the point above, it might be appropriate for an app such as this to exist as a microservice in the cloud, connected to a large system via message broker such as [RabbitMQ](https://www.rabbitmq.com/)
- I would have implemented [laravel sail](https://laravel.com/docs/10.x/sanctum) to authentication, especially as its designed for environments where laravel is being used purely as a backend/server
- To extend the point above, once there is authentication it could be appropriate to create middleware that only lets users of certain permissions to access/create `Locations`
- I would have leveraged [laravel scopes](https://laravel.com/docs/10.x/eloquent#local-scopes) 
- Would have added missing CRUD functionality
  - Update
  - Delete

---

## Please note
Throught my work I have left comments prefixed with `EXTRA::` these are thoughts I had whilst dev'ing that supplement the above points about 'what I would have done differently'

---

## Final notes
There are some differences in my app that are worth noting such as column and tables names:
- column names are not prefixed with 'location'
- table is not called 'location' instead 'location'
- My feature test could not resolve `route('api.location.store')` correctly so I had to hard code the URL
