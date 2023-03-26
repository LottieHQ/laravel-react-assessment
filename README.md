<h1>Lottie: Laravel React Assessment</h1>

<h2>Instructions</h2>

To set this project up locally on your machine, you will require Composer and Docker installed. If on Mac, you can easily install composer with Homebrew: `brew install composer`. Otherwise, instructions can be found [here](https://www.geeksforgeeks.org/how-to-install-php-composer-on-windows/). Docker can be downloaded from the website [here](https://www.docker.com/).

<h3>Laravel backend setup</h3>

1. Clone this repo from Github. Once cloned, `cd` into `laravel-react-assessment/laravel-api` and run `composer install`.
2. Copy your `.env.example` file into a new `.env` file and configure any passwords needed to access your mysql databases.
3. Run the `./vendor/bin/sail up` command (make sure the Docker application is up and running on your machine first). To save time, it is worth creating a shell alias for `sail` so you can execute these commands more easily:

```
alias sail='[ -f sail ] && sh sail || sh vendor/bin/sail'
```

4. Run the following commands:

```
sail artisan key:generate
composer update
sail artisan storage:link
sail artisan migrate --seed
```

5. If you check Docker, you should see that the Docker container is now up and running

<h3>React frontend setup</h3>

1. `cd` into `laravel-react-assessment/webapp`
2. Run `npm install`
3. Run `npm run start`
4. You should now be able to access the site in your browser at http://localhost:3000/

<h3>Factory seed</h3>

Once you have the app up and running, there won't be any initial Location data in the database. You can either manually add some items using Postman (see blow), or if you're feeling lazy we can populate the database with some dummy data using the Location factory and seeder:

1. `cd` into `laravel-react-assessment/laravel-api`
2. Run `sail artisan db:seed --class=LocationsTableSeeder`
3. Voila! There are now 20 Locations available 🥳

<h3>API endpoint</h3>

The locations api endpoint will be `http://127.0.0.1/api/locations`

<h3>Authentication</h3>

In order to make a `POST`, `PUT` or `DELETE` request to the api, you will need to be authenticated. In order to get yourself set up as an authenticated user, please follow these steps:

1. `cd` into `laravel-react-assessment/laravel-api`
2. Run `sail artisan passport:install`
3. Make a note of the password grant Client ID and Client Secret that are returned.
4. Create a User for yourself using `sail artisan tinker`:

```
User::create([
    'name' => 'A user',
    'email' => 'some.guy@gmail.com',
    'password' => Hash::make('password'),
]);
```

1. You should now be able to make a `POST` request in Postman to http://127.0.0.1/oauth/token with the body (sent as form data):

```
{
    "grant_type": "password",
    "client_id": "<your_client_id>",
    "client_secret": "<your_client_secret>",
    "username": "an.author@gmail.com",
    "password": "password"
}
```

1. If everything is setup correctly, you should get back a Bearer token that can use to make `POST`, `PUT` and `DELETE` requests

<h2>Possible improvements</h2>

Below are some things that I didn't have time for but would have liked to have added:

1. Pagination on backend and frontend - I wasn't able to do this purely because of time constraints, but if I'd had more time to work on this then this would have been the next bit of functionality I would have added.
2. I would have liked to have built the frontend in Typescript, however I have not previously used Redux and Typescript together. I did some reading around this but decided in the interests of time to go with what I know rather than spending too much time figuring that out. However, if I'd had more time I would have liked to have gone down this route.
3. I used `redux`'s `createStore` to create my store, however I believe Redux now recommends using the `configureStore` function from `@reduxjs/toolkit` instead as it simplifies things. I again decided to go with what I know in the interests of time, but if I'd had more time I would have liked to investigate this option more.
4. I've set up validation in Laravel, however one thing I wasn't sure of how to do was to improve the error message for the `status` field - if you try and send a value that isn't `open` or `closed` the error message says the given value is invalid, but it would be nice to also specify what the accepted values are in the error message.
