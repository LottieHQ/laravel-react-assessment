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
    2. Use the command `git clone this-branch-name here`
    3. TODO::Add correct link/branch above

# Setup server instructions
1. Navigate to `/server` and copy `.env.example` into a filed named `.env`
2. If you are a windows user please ensure you have XAMPP running, with the `MySQL` instance running.
3. Navigate into the `/server` directory
4. Run `php artisan migrate`
    1. If you are prompted to created the database 'locations' please accept
5. Run `php artisan serve`
6. Run `php artisan db:seed`

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


Please take as much time as you need to take the test, we understand that you may be busy or just not finding time. Also, we think people should not invest much time in assessments as there are better things to do in life.

We expect you to spend 3 or 4 hours on this technical task, which we think is reasonable.

This assessment is intentionally bare on specifics as we want to give you some freedom, so feel free to focus on your strength, whether that’s code cleanliness, front-end design, one of the bonus features, etc. We are aware that given the time spent one can only provide certain builtin quality

## Instructions

Please follow these instructions carefully, please note that following the instructions thoroughly is part of the assessment.

- Fork this repo.
- Work on your own copy of the repo.
- Your work should be easily deployable either locally in a laptop, or in a cloud provider service, such as Vercel, etc.
- Please update the README so that it includes instructions on how to run, or deploy, and how to test the submitted code.
- Please make sure that we can easily run and test the code, please do not assume that we have already setup any specific database or dependency.
- Once you've finished please subbmit a Pull Request (PR) to this original repo.
- We may ask you to comment on some implementations or even suggest some code changes, please react to them as you would normally do with any PR.
- Once we're done reviewing we will contact you via email or phone.

## Tasks

### Laravel

Please use the Laravel framework for this task.

- Create a Laravel Application that connects to MySQL.
- Create an API endpoint that receives: `Date Start`, `Date End`, `Status` (open or closed), `Location Name` and `Location Description` (mandatory fields) and returns location data.
- Include the below PHPUnit test for your API and ensure that it passes:
```
public function api_can_store_location_data()
{
$this->withoutExceptionHandling();
$location = factory(Location::class)->create(); $this->requestData[‘location_name'] = $location->location_name; $this->requestData[‘location_description'] = $location->location_description; $this->requestData[‘date_start’] = $location->date_start; $this->requestData[‘date_end’] = $location->date_end;
$this->json('POST', route('api.location.store'), $this->requestData) ->assertSuccessful();
$this->assertLocationCreated($location); }
```
```
protected function assertLocationCreated($location, $data = [ ])
{
$this->assertDatabaseHas('location', array_merge([
'location_name' => $this->requestData['location_name'], 'location_description' => $this->requestData['location_description'], 'date_start' => $this->requestData['date_start'],
'date_end' => $this->requestData['date_end'],
'location_id' => $location->id,
], $data)); }
```

#### Bonus points

- Data submitted via the API should be validated and appropriate error messages returned for things like incorrectly formatted dates.

### React

Please use React and Node for this task.

- Create a simple list page that displays all the data that has been added to the database through the Laravel API.
- Create a form on the above list page that will enable you to run a Query in the Laravel backend to filter the results that are displayed via Date Range, Status and Location Name fields.

#### Bonus points

- The frontend should be simple but any additional work put into the presentation will be included in the evaluation.
- Pagination.
