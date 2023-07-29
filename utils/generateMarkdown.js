// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Deployed Application URL
  ${data.link}

  ## Screenshot
  ![alt-text](${data.screenshot})

  ## Features
  ${data.features}

  ## Future Plans
  ${data.plans} 

  ## Languages & Dependencies
  ${data.require}

  ## Built With:
  ${data.usage}

  ## Contributors:
  ${data.contributors}

  ## Questions - Contact Me
    - [My GitHub Profile](https://github.com/${github})
    - Email: ${email}

`;
}

module.exports = generateMarkdown;
