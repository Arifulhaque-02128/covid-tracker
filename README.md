# COVID-19 Tracker

A real-time COVID-19 tracking application built with React.js that provides comprehensive statistics and visualizations for global pandemic data.

## 🌟 Features

- **Interactive World Map**: Visual representation of COVID-19 cases with clickable circles showing country-specific data
- **Real-time Statistics**: Live COVID-19 data including cases, deaths, and recoveries
- **Country Selection**: Dropdown menu to view specific country statistics or worldwide data
- **Data Visualization**: Line charts showing trends over the last 90 days
- **Responsive Cards**: Interactive cards displaying today's and total statistics
- **Country Rankings**: Sortable table showing cases by country

## 🛠️ Tech Stack

- **Frontend**: React.js with Hooks (useState, useEffect, useContext)
- **Mapping**: React Leaflet for interactive maps
- **Charts**: Chart.js with react-chartjs-2 for data visualization
- **UI Components**: Material-UI for consistent design
- **API**: Disease.sh COVID-19 API for real-time data
- **Styling**: CSS with responsive design

## 📋 Prerequisites

- Node.js (v12 or higher)
- npm or yarn package manager

## 🚀 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd covid-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application



## 🔧 Key Components

### Left Container
- Country selection dropdown
- Interactive statistics cards
- Interactive world map with country-specific popups

### Right Container
- Country rankings table sorted by total cases
- Historical data visualization (90-day trends)

## 🌐 API Integration

The application uses the [Disease.sh API](https://disease.sh/) for COVID-19 data:

- **Global Data**: `https://disease.sh/v3/covid-19/all`
- **Countries Data**: `https://disease.sh/v3/covid-19/countries`
- **Country Specific**: `https://disease.sh/v3/covid-19/countries/{country}`
- **Historical Data**: `https://disease.sh/v3/covid-19/historical/all?lastdays=90`

## 🎨 Features in Detail

### Interactive Map
- Circles sized based on case numbers
- Color-coded by case type (red for cases/deaths, green for recoveries)
- Clickable popups with country flags and detailed statistics
- Dynamic zoom and positioning based on country selection

### Data Cards
- Real-time updates for cases, recoveries, and deaths
- Today's statistics prominently displayed
- Interactive selection affects map and chart visualizations

### Historical Charts
- 90-day trend analysis
- Separate configurations for different case types
- Responsive design with custom styling

## 🔄 State Management

The application uses React Context API for state management:
- Global state for country information
- Shared case type selection across components
- Efficient data flow between left and right containers

## 📱 Responsive Design

- Mobile-friendly interface
- Responsive map and chart components
- Adaptive layout for different screen sizes

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Removes create-react-app dependency

## 🙏 Acknowledgments

- [Disease.sh](https://disease.sh/) for providing the COVID-19 API
- [React Leaflet](https://react-leaflet.js.org/) for mapping functionality
- [Chart.js](https://www.chartjs.org/) for data visualization
- [Material-UI](https://mui.com/) for UI components
