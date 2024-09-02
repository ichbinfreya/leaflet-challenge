# Earthquake Data Visualization

## Overview
**Earthquake Data Visualization** is a dynamic and interactive web application that visualizes real-time earthquake data from around the world. Using **Leaflet** and **D3.js**, it allows users to explore seismic activities visually. Each earthquake is represented as a marker on the map, with marker size reflecting its magnitude and color indicating its depth.

## Features
- **Interactive Map**: Displays a world map with earthquake markers updated in near real-time.
- **Magnitude-Based Marker Size**: Larger markers indicate stronger earthquakes.
- **Depth-Based Marker Color**: Color-coded markers (green to red) represent the depth of each earthquake.
- **Information Popups**: Clicking a marker shows details about the earthquake's location, magnitude, and depth.
- **Legend**: A legend explains the color coding of markers based on depth.

## Background
The **United States Geological Survey (USGS)** collects extensive data on earthquakes worldwide. This project makes this data accessible through a web-based visualization tool, helping educate the public, inform government organizations, and raise awareness about seismic activities.

## File Structure
The project follows a simple directory structure:
project-directory/
├── index.html
├── static/
│   ├── css/
│   │   ├── style.css
│   ├── js/
│   │   ├── logic.js


- **index.html**: Sets up the webpage, including references to libraries, CSS, and JavaScript files.
- **style.css**: Custom styles for the map and legend.
- **logic.js**: Contains the JavaScript code to fetch earthquake data, create map markers, and add interactivity.

## Getting Started

### Prerequisites
- Basic knowledge of **HTML**, **CSS**, and **JavaScript**.
- An active internet connection to fetch libraries and real-time earthquake data.

### Installation Steps
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/leaflet-challenge.git
    ```
2. **Ensure Correct File Structure**: Make sure your project files match the structure shown above.
3. **Open index.html**: Open [index.html](https://ichbinfreya.github.io/leaflet-challenge/) in any modern web browser to view the map.

## Usage
1. **View the Map**: The webpage displays a world map with markers representing recent earthquakes.
2. **Interact with Markers**: Click on any marker to see details about the earthquake.
3. **Understand the Legend**: Refer to the legend to interpret the color coding based on earthquake depth.
