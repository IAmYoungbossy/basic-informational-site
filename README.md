# Basic Info Site

## Introduction

This project is a full-stack web application built with Node.js and TypeScript, using Node's core modules without any framework. It serves as a basic informational site that listens to incoming requests and serves web pages according to the requested URL. This project demonstrates the use of Node.js for server-side development and TypeScript for a statically typed and structured codebase.

## Learning Objectives

Throughout the development of this project, I have achieved the following learning objectives:

- Setting up a web server: I have learned how to create a web server that listens to incoming requests and serves appropriate web pages based on the requested URL.

- Handling stylesheets: I have implemented the logic to add stylesheets for requested pages by looking for requests sent by the rendered HTML files with CSS file extensions, thereby demonstrating how to manage client-side styling.

- Using TypeScript with Node.js: I have learned how to use TypeScript on the server-side with Node.js, including installing Node types and configuring TypeScript to compile all TypeScript files into JavaScript.

## Installation Instructions

To set up this project on your local machine, follow the steps below:

- 1. Clone the project: You can either download the project as a zip file and extract it, or use the terminal to clone the project using the following command:

```bash
git clone https://github.com/IAmYoungbossy/basic-informational-site.git
```

- 2. Install dependencies: Navigate to the project directory in your text editor or terminal and install all the dependencies used in this project by running the following command:

```bash
npm install
```

- 3. Build TypeScript files: After successfully installing all the dependencies, run the following command to compile all the TypeScript files into JavaScript files in the `/dist` folder, which will be used in the production environment:

```bash
npm run build
```

- 4. Set up development environment: To set up a development environment, run the following command to enable watch mode using the nodemon module, which will automatically restart the web server whenever there's a change in the code:

```bash
npm run dev
```

- 5. Run in production environment: To run the project in a production environment, use the following command:

```bash
npm run start
```

## Conclusion

By completing this project, I have gained practical experience in building a full-stack web application using Node.js and TypeScript, adhering to best practices for setting up a web server, handling client-side stylesheets, and using TypeScript on the server-side. This project serves as a solid foundation for further learning and development in Node.js and web application development.
