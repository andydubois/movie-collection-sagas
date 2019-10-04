## Movie Gallery

Movie gallery is a static movie database that shows details (synopsis and genres) for each of the listed movies.

## Installation

1. Create a database named "saga_movies_weekend"
2. The queries in the tables.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly.
3. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
4. Open up your editor of choice and run an npm install
5. Run npm run server in your terminal
6. Run npm run client in your terminal
7. The npm run client command will open up a new browser tab for you!

## Usage

1. View all movies listed from the home screen
2. Click on the "i" under each movies image to get further details on the plot of the movie as well as the genres the movies is classified under
3. From the details screen users can also edit details if they see fit and commit those changes to the database
4. Users can edit the title and the synopsis of the movie independently.

## Built With
React, Redux, Redux Sagas, Express, Node.js, PostgreSQL

## Acknowledgement
Thanks to Prime Digital Academy in Minneapolis who equipped and helped me to make this application a reality.