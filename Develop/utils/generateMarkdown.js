// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log('Calling renderLicenseBadge function');

  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'GNU') {
    return '![License: GNU](https://img.shields.io/badge/License-GPL-blue.svg)';
  } else {
    return '';
  }   
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log('Calling renderLicenseSection function');

  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === 'GNU') {
    return '[GNU General Public License](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    return '';
  }  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `

This project is licensed under the terms of the ${renderLicenseLink(license)}. See the [LICENSE](LICENSE) file for details.

${renderLicenseBadge(license)}
`;
  } else {
    return '';
  }  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseSection(data.license)}

`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown
};
