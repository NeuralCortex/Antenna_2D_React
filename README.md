# Antenna 2D Viewer React 1.0.0

![image](https://github.com/NeuralCortex/Antenna_2D_React/blob/main/app.png)

The Antenna 2D Viewer is a React-based web application that enables users to visualize radio antenna radiation patterns in both polar and Cartesian views simultaneously. This tool is designed for engineers, researchers, and enthusiasts working with antenna design and analysis.

## Features

- **Dual Visualization**: Displays antenna radiation patterns in both polar (radial) and Cartesian (rectangular) coordinate systems.
- **Horizontal and Vertical Patterns**: Supports visualization of antenna performance in both azimuthal (horizontal) and elevation (vertical) planes.
- **User-Friendly Interface**: Built with React for a responsive and interactive experience.
- **Custom Data Input**: Accepts antenna pattern data via a structured text file.

## Antenna Patterns Explained

Antenna radiation patterns illustrate how an antenna radiates or receives energy as a function of direction, which is critical for applications like wireless communications, radar, and broadcasting. The Antenna 2D Viewer provides two complementary views:

- **Polar View**: Plots signal strength (attenuation in dB) as a function of angle (0° to 359°) in a polar coordinate system. The radial distance from the center represents attenuation, and the angular position indicates direction. This view highlights:
  - **Main Lobe**: The direction of maximum radiation.
  - **Side Lobes**: Secondary radiation directions.
  - **Nulls**: Directions with minimal radiation.
  For example, a directional antenna shows a prominent main lobe, while an omnidirectional antenna displays a near-circular pattern.

- **Cartesian View**: Plots attenuation (y-axis) against angle (x-axis, 0° to 359°) in a rectangular coordinate system. This view is ideal for analyzing specific angular ranges and comparing signal strengths, offering a linear perspective on the same data.

The app supports both **horizontal** (azimuthal plane) and **vertical** (elevation plane) radiation patterns, enabling comprehensive analysis of an antenna's three-dimensional performance.

## Installation

To set up the Antenna 2D Viewer, follow these steps:

1. **Install Node.js**: Download and install [Node.js](https://nodejs.org) if not already installed.
2. **Clone or Download the Repository**: Obtain the project files from the repository.
3. **Navigate to the Project Directory**:
   ```bash
   cd path/to/antenna-2d-viewer
   ```
4. **Install Dependencies**:
   ```bash
   npm install
   ```
   Wait for the installation to complete.
5. **Run the Application**:
   - For development mode:
     ```bash
     npm start
     ```
     This starts a local development server, typically at `http://localhost:3000`.
   - For production mode:
     ```bash
     npm run build
     ```
     This creates an optimized build in the `build/` directory.

## Input File Structure

The app requires antenna pattern data in a text file with the following structure:

```plaintext
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
```

- **Format**:
  - Each line contains two values: the angle (0° to 359°) and the attenuation (0 dB to 40 dB).
  - **Angle**: Represents the direction in the horizontal or vertical plane.
  - **Attenuation**: Indicates signal strength, where lower dB values represent stronger signals and higher values indicate greater attenuation.
- **Sections**:
  - **HORIZONTAL**: Data for the azimuthal plane (360° around the antenna’s horizontal axis).
  - **VERTICAL**: Data for the elevation plane (360° relative to the antenna’s vertical axis).

## Technologies Used

- **Create React App**: Bootstrapped with [Create React App](https://github.com/facebook/create-react-app) for a robust development environment.
- **Node.js**: Powers the development server and dependency management.
- **Visual Studio Code**: Recommended for code editing.
- **Google Chrome**: Used for testing and debugging.

## Getting Started

This project was created using [Create React App](https://github.com/facebook/create-react-app). For additional details on available scripts and configuration options, refer to the [Create React App documentation](https://create-react-app.dev/docs/getting-started).