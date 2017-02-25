# weather-report
Client App for use with [weather-api](https://github.com/jstiehl/weather-api).  This app fetches weather data from the server and displays the results in tabular form.  Some analysis/transformation of the data received from the API is performed in the application. 

NOTE: weather-api server must be running for Client App to work (Error notifications still need to be added to client to notify users if weather-api server is not running).  

This app is built off of the [Create React App](https://github.com/facebookincubator/create-react-app) package.

#Running App
To run the app

1. Clone this repo locally.
2. Navigate to the root directory of the project on your local machine.
3. Run `npm install` to install dependencies
4. Assuming that weather-api server is running (instructions for that setup are provided in the [weather-api](https://github.com/jstiehl/weather-api) repo), you can run the app locally by running the `npm start` command in the root directory of this project.
