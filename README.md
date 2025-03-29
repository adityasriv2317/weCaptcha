# weCaptcha

A simple React application to test and validate Google reCAPTCHA v2 implementation. Perfect for backend developers who need to test reCAPTCHA integration without setting up a full frontend.

## Features

- Test reCAPTCHA with custom site keys
- Dark theme interface
- Copy token with one click
- Responsive design
- Default test key included

## Steps to Use

1. Visit [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Register a new site
3. Select reCAPTCHA v2 "I'm not a robot" Checkbox
4. Add your domains (include localhost for testing)
5. Copy your site key
6. Paste the key in weCaptcha
7. Test the CAPTCHA and copy the generated token

## Running Locally

1. Clone the repository:
```git clone https://github.com/adityasriv2317/wecaptcha.git```
2. Navigate to the project directory:
```cd wecaptcha```
3. Install the dependencies:
```npm install```
4. Start the development server:
```npm start```
5. Open your browser and visit: ```http://localhost:5173```

## Tech Stack

- React
- Vite
- TailwindCSS
- react-google-recaptch

## Credits

- Created by Aditya Srivastava
- Icons by Lucide React
- Built with ReactJs and Vite

## License

This project is licensed under the MIT License. Feel free to use and modify it as per your needs.
