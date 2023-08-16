// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please name your Project."
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
        type: "input",
        name: "description",
        message: "Please describe the purpose and functionality of this project.",
    },
    {
        type: "input",
        name: "link",
        message: "Please provide a URL where a user can access your deployed application."
    },
    {
        type: "input",
        name: "screenshot",
        message: "Please provide the relative path to the image you want to use as the screenshot."
    },
    {
        type: "input",
        name: "features",
        message: "List some cool features about this project here.",
    },
    {
        type: "input",
        name: "plans",
        message: "List some cool features you want to include later on in the project.",
    },
    {
        type: "input",
        name: "usage",
        message: "State the languages or technologies associated with this project.",
    },
    {
        type: "input",
        name: "require",
        message: "List any project dependencies here.",
    },
    {
        type: "input",
        name: "contributors",
        message: "Please list any contributors. (Use GitHub usernames)",
        default: "",
    },
    {
        type: "input",
        name: "github",
        message: "Write your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Provide a valid email address.",
    },
];

//Function that writes README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function (err) {
      if (err) {
        throw err;
      }
      console.log("Huzzah! Your README is ready for you to check out!");
    });
  }
  
  //Function that initializes the app
  function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile("GENERATEREADME.md", markdown);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  //Function call to initialize app
  init();
