# Laravel React Assessment

This repository hosts the assessment code for the Laravel React Assessment.

## Requirements

- Docker
- A local version of PHP 8.1 installed for initial setup
- A local version of Composer installed for initial setup

**IMPORTANT NOTE:**
This project uses port 3307 for MySQL instead of the standard 3306,
this is to prevent port conflicts if you have an existing MySQL instance running locally.

## Versions

- PHP 8.1
- Laravel 10.x

## Installation

NOTE: Before getting started with the setup, I'd recommend setting up a shell alias for Sail. This will allow you to run `sail` instead of `./vendor/bin/sail`.

```bash
alias sail='[ -f sail ] && sh sail || sh vendor/bin/sail'
```

For brevity, the following commands assume you have the shell alias set up. If this isn't the case then simply replace use `./vendor/bin/sail` instead of `sail`.

Clone the project:
```bash
git clone git@github.com:bradsi/laravel-react-assessment.git
```

Generate the `.env` file:
```bash
cp .env.example .env
```

Generate an application key:
```bash
sail artisan key:generate
```

Install composer dependencies (including Sail):
```bash
composer install
```

Start the Docker container:
```bash
sail up -d
```

Migrate the database:
```bash
sail artisan migrate
```

Install frontend dependencies
```bash
sail npm install
```

Run the frontend development server
```bash
sail npm run dev

# Project will now be accessible at http://localhost
```

Seed the database:
```bash
sail artisan db:seed

# Will create 25 Location records
```

Run the tests:
```bash
sail artisan test
```

## Helpful Commands

Stop the container:
```bash
sail stop
```

Delete the container:
```bash
sail down
```

## Notes:
I've tried to keep this as simple as possible due to time constraints.  
Below are some changes I would make given more time or just to make this more production ready.  
I've also included some notes on my process.

- **API Authentication** - I would use Laravel Sanctum for API authentication
- **Remove Inertia** - I decided to use Inertia with React for the frontend as I've heard some good things and hoped it would help streamline the frontend process.
I found that Inertia wasn't too bad to work with, but overall made things a bit more awkward compared to having the frontend as a separate project. In a production application I would
decouple the frontend and API, with the frontend being built in something like Next.js
- **Responsiveness** - I've not paid too much attention to the responsiveness of the frontend due to time constraints, so this could definitely be improved.
- **Testing** - I used Pest for PHP tests, this is a wrapper around PHPUnit and provides some additional functionality, I also prefer the syntax. If moving to production I would add tests for the frontend using something like Jest.
- **API Tooling** - To make this more production ready I'd add various dependencies for the API such as the following:
  - Parallel Testing Tool for Pest
  - Code Coverage with Pcov
  - GitHub Action workflow
  - Static Analysis (PHPStan and Larastan)
- **Service Classes** - I like to keep my search functionality under the `index` endpoint. However, this bloats the Controller especially if you can search against many fields. I would extract this logic to a service class to keep the Controller clean.
- **Eloquent API Resources** - I would also create an API Resource class, so I could customise the JSON response. In this case I didn't bother since the only thing I didn't like was the date formatting on the frontend.
