// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Check if the license is MIT
  if (license === 'MIT') {
    // Return MIT license badge
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'GNU') {
    // Check if the license is GNU
    // Return GNU license badge
    return '![License: GNU](https://img.shields.io/badge/License-GPL-blue.svg)';
  } else {
    // Return an empty string if no license specified
    return '';
  }   
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Check if the license is MIT
  if (license === 'MIT') {
    // Return MIT license link
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === 'GNU') {
    // Check if the license is GNU
    // Return GNU license link
    return '[GNU General Public License](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    // Return an empty string if no license specified
    return '';
  }  
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Check if a license is provided
  if (license) {
    // Return license section with link and badge
    return `
This project is licensed under the terms of the ${renderLicenseLink(license)}. See the [LICENSE](LICENSE) file for details.

${renderLicenseBadge(license)}
`;
  } else {
    // Return an empty string if no license specified
    return '';
  }  
}

// A function to generate markdown for README
function generateMarkdown(data) {
  // Return markdown content for the README
  return `# ${data.title}

${renderLicenseSection(data.license)}

`;
}

// Export the functions for external use
module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown
};
