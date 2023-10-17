# Antenna 2D-Viewer React 1.0.0

![image](https://github.com/NeuralCortex/Antenna_2D_React/blob/main/app.png)

The Antenna 2D viewer is a Web-App based on React that enables the user to view a radio antenna in Polar-view and Cartesian-View at the same time.</br>

## How the web app works

To use the app, you need to execute following steps:
1. Install Node.js
2. Go to the project's main directory.
3. Type `npm install` - Wait for Completion
4. Type `npm start` for Development-Mode or
5. Or type `npm run build` for Production-Mode

## Structure of a file

The antenna to be imported must be available as a text file.

### Internal structure

The text file must contain following data:

<pre>
HORIZONTAL
0 0.000
1 0.001
2 0.004
3 0.009
4 0.018
...
357 0.014
358 0.007
359 0.002
VERTICAL
0 0.000
1 0.003
2 0.012
...
354 0.112
355 0.077
356 0.050
357 0.028
358 0.012
359 0.003
</pre>

The first value is the angle (0° - 359°).</br>
The second value is the attenuation (0dB - 40dB).

## Technology used

This web app was created with Create React App.

The following tools were used:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org)
- [Google Chrome](https://www.google.com/chrome/)


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
