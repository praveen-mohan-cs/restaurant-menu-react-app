# React Contentstack Starter App

## Description

This is a React starter app that integrates with Contentstack's Content Delivery API. It provides a foundation for building dynamic web applications that fetch and display content from Contentstack's headless CMS.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/praveen-mohan-cs/restaurant-menu-react-app.git
   ```

2. Navigate to the project directory:

   ```
   cd restaurant-menu-react-app
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Rename `.env.sample` as `.env` file in the root directory and add your Contentstack API keys:

   ```
   REACT_APP_CONTENTSTACK_API_KEY=your_stack_api_key
   REACT_APP_CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token
   REACT_APP_CONTENTSTACK_ENVIRONMENT=your_environment_name
   ```

5. Run the development server:
   ```
   npm start
   ```

## Configuration

To configure the app with your Contentstack account:

- Replace `your_stack_api_key`, `your_delivery_token`, and `your_environment_name` in the `.env` file with your Contentstack API key, delivery token, and environment name, respectively.

## Usage

1. Once the app is running, navigate to `http://localhost:3000` in your web browser.
2. Explore the app to see how it fetches and displays content from Contentstack.
3. Customize and extend the app as needed for your project requirements.

## Features

- Integration with Contentstack's Content Delivery API.
- Dynamic rendering of content fetched from Contentstack.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or feedback, feel free to [open an issue](https://github.com/praveen-mohan-cs/restaurant-menu-react-app/issues).
