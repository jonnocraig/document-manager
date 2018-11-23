# Document Manager

## Getting Started
To run this app you'll need Laravel, NodeJS. 
The client app has been built using `React` and the API using `Laravel`.

Versions used for this project:
- NodeJS v10.11.0
- Laravel 5.7.*
- React v16.5.2
- TypeScript v3.1.1

## Run in dev mode

### React frontend
The FE code is separately packaged into a folder `frontend`. ReactStrap was used to help speed up the build of simple components (https://reactstrap.github.io/components/alerts/).

In this folder:
1. `npm install`
2. `npm start`

The App will now be served on `localhost:3000`.

#### Testing the frontend
The project uses Jest, with Snapshots for testing, as well as several other libraries e.g. EnzymeJS.

To run unit tests: `npm run test`. For test coverage: `npm run test:coverage`.

### Laravel API setup
- Copy and rename the .env.example file to .env
- Copy and rename the .env.testing.example file to .env.testing
- Create two sqlite DB files in the "database" folder e.g. touch 'db.sqlite', touch 'test.sqlite'
- Update the database values in both .env files above e.g.
```
DB_CONNECTION=sqlite
DB_DATABASE=/absolute/path/to/your/database/db.sqlite
```
- Then install dependencies and migrate e.g.
1. `composer install`
2. `php artisan migrate`
3. `php artisan migrate --seed --env=testing`
4. `php artisan serve`

The API will be running on `localhost:8000`.

#### Testing the API
In the root of the project:
- ./vendor/bin/phpunit

## Notes
This FE code is using TypeScript and was generated using Create-React-App. Redux is being used for state management. Although I'm familiar with back-end technologies (NodeJS in particular),  this is my first time using Laravel. 

## Roadmap
Things that I would add given more time.
- Add Docker container
- Error handling
- Modal confirmation for delete
