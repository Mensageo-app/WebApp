## Available Scripts

In the project directory, you can run:

### `npm install`

Install all the updates.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
  
### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!


### Using Translations
1: Add the tag for formatted message:
`<FormattedMessage id="app.text" defaultMessage="Mensageo"/>`
and the following import:
`import { FormattedMessage } from 'react-intl';`

2: Add the json reference in the all translations file:
`src/translations/en.json`
with the proper keys:
`"app.text": "your text here""`

You can find more options and information: https://github.com/formatjs/react-intl

### Using the mock server
Clone https://github.com/Mensageo-app/mock_api_server, run `npm install` and `npm start` to have a json server serving mock data for mensageo app.

### Docker
1: Make sure your Docker engine with Kubernetes support is enabled (check the kubernetes tab in the docker-desktop settings)

2: Build the React app with `npm run-script build`

3: Dockerize the application with `docker build -t web-app .`

4: Create a local Docker registry with `docker run -d -p 5000:5000 --restart=always --name registry registry:2`

5: Tag the Docker image with `docker tag web-app localhost:5000/web-app`

6: Push the Docker image with `docker push localhost:5000/web-app`

7: Create the Kubernetes service and deployment with `kubectl apply -f deployment.yaml`

8: Visit http://localhost:31000 to see the application

