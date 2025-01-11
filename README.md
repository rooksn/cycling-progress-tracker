# 🚴‍♂️ Progress Tracker

Welcome to the Progress Tracker app! This application helps you track your cycling progress and set yearly goals using data from Strava. Connect your Strava account and start tracking your rides today! 

## Features

- 📈 Track your total kilometers cycled for the year
- 🎯 Set and edit your yearly cycling goal
- 📅 View your progress and expected progress
- 🔄 Project your year-end distance based on current progress
- 🗓️ Calculate the required daily distance to meet your goal

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- A Strava account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/progress-tracker.git
   cd progress-tracker
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your Strava API credentials:

   ```env
   REACT_APP_STRAVA_CLIENT_ID=your_client_id
   REACT_APP_STRAVA_CLIENT_SECRET=your_client_secret
   ```

### Running the App

Start the development server:

```bash
npm start
# or
yarn start
```

Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Click the "Connect with Strava" button to authenticate with your Strava account.
2. Set your yearly cycling goal.
3. Track your progress and view detailed statistics.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

🚴‍♂️ Happy cycling and tracking!
