# Setup

Run the locations migration to create the `locations` table and seed data: 

`php artisan migrate --path=/database/migrations/2023_03_24_103029_locations.php`

`php artisan db:seed --class=LocationSeeder`

### React

Some explanations of what I would do in React can be found in `resources/js/app.js`

#### Tests
Unfortunately tests are *not* passing currently. I am working on getting them to pass correctly

## laravel-react-assessment

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
