## Hello 👋 Please find instructions below


- Start by downloading the repo. You will need to have git connected to your terminal or GUI. 
- In your terminal; Composer installing & npm install. (Please make sure you have php and composer installed)
- Copy the .env.example and create .env
- Set up your database (I use TablePlus). I named my connection laravel_react_app
- Php artisan migrate. To migrate the database.
- Next, you want to spin up your local servers.
- If using valet you can use your laravel app name & add .test on the end. If not php artisan serve will work. You should see port 8000, unless already in use.
- Secondly you'll want to start your React server.
- In your terminal, cd into react. Type npm run dev and this should start the server on port 3000, or in my case today, 5174.
- The seeders should be ready to use so one your database is connected you can run db:seed

## Things I would do differently if I had more time.

- Considering I haven't worked with react & Laravel before or API's this was interesting for me to learn how to start this process. Although, I admit, given the time constraints i didn't ge very far!
- I think most of my time was spent reading & learning how to build a React & laravel project. Either way I still very much enjoyed this challenge & have learnt a lot along the way!
- 
## Client.
- Well there are lots of things I would have changed! The whole design to begin with!
- Getting data to show in the front end. I understand to use axios however, I believe from my reading Redux is often used
- Validation on the front end to show and to make sure end date is after the start date
- I did try to get tailwind set up in React so i didn't spend as much time on basic css, but I didn't want to spend too much time trying to figure out why it wasn't working so stuck to basic css. In future i'd use tailwind.
- I would have made sure the site is responsive
- Ensured the create, update and delete buttons were working. The latter two would be icons.
- Pagination

## Server.
- Ensured the data was being passed as a json into the api. 
- In the index there the Location model would be queried to help with the front-end sorting & pagination.
- More secure back end validation
- added tests and got them to work
- pest tests.
- Added middleware so only authenticated users can create, update or delete. 
- Used Laravel Sanctum or passport for authentication
- moved validation to own request.
