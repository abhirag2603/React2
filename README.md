MemeGenerator App
This MemeGenerator app allows users to create customized memes by adding top and bottom text to images sourced from the ImageFlip API. Users can instantly preview their meme with the added text and download the finalized meme for sharing.

![Screenshot 2](/memegenss.png)

Features
Fetches meme images from the ImageFlip API.
Allows users to add custom text to the top and bottom of the selected meme image.
Real-time preview of the meme with the added text.
Provides the option to download the generated meme.
Usage
Select Meme Image: Browse through available meme images fetched from the ImageFlip API.
Add Text: Enter custom text for the top and bottom of the meme.
Preview: Instantly preview the meme with the added text.
Download: Download the finalized meme with the text added.
Setup

To set up the MemeGenerator app locally, follow these steps:

Clone this repository:
```bash
git clone https://github.com/abhirag2603/meme-generator.git
```

Navigate into the project directory:
```bash
cd meme-generator
```

Install dependencies:
```bash
npm install
```

Obtain API credentials for the ImageFlip API and replace them in the config.js file.

Start the application:
```bash
npm start
```

Access the app in your browser at http://localhost:3000.

Dependencies
React: JavaScript library for building user interfaces.
Axios: Promise-based HTTP client for making requests to the ImageFlip API.
Bootstrap: Front-end framework for building responsive and mobile-first websites.
Reactstrap: React components for Bootstrap.
HTML2Canvas: JavaScript library for capturing screenshots of web pages.
FileSaver.js: JavaScript library for saving files on the client-side.
Contributing
Contributions are welcome! If you encounter any bugs or have suggestions for improvements, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.
