## Project Title and Description
Eat-Split is a web application designed to help users split bills and manage balances with friends. Users can add friends, track balances, and split bills with ease.

## Badges
![Static Badge](https://img.shields.io/badge/status-online-brightgreen)

## Quick Look
<img src="https://github.com/user-attachments/assets/2337423c-56e5-42fc-ac80-511d7d41fadd" width="700" alt="Eat-Split App Demo">

## Table of Content
- [Project Title and Description](#project-title-and-description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Demo (link)](#demo-link)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Third-Party Libraries](#third-party-libraries)
- [License](#license)

## Features
- Add friends with name and image
- Split bills between friends
- Track and manage balances between friends
- Simple and intuitive user interface

## Installation

### Prerequisites
- Node.js (v12 or higher)
- npm (v6 or higher)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/petrmichal0/eat-split.git
    ```

2. Navigate to the project directory:
    ```bash
    cd eat-split
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
To start the application, run the following command:
```bash
npm start
```

After starting, go to [http://localhost:3000](http://localhost:3000) in your web browser.

## Screenshots

<table> 
  <tr> 
    <th>Homepage</th> 
    <th>Add Friend</th> 
    <th>Split Bill</th> 
  </tr> 
  <tr> 
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;"> 
      <a href="https://github.com/user-attachments/assets/84213283-7e7a-422c-8754-d464998fdc1d" target="_blank" rel="noopener noreferrer"> 
        <img src="https://github.com/user-attachments/assets/84213283-7e7a-422c-8754-d464998fdc1d" width="300" height="300" alt="Homepage"> 
      </a> 
    </td> 
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;"> 
      <a href="https://github.com/user-attachments/assets/87695a11-2d28-4de2-8453-9fa211d4809a" target="_blank" rel="noopener noreferrer"> 
        <img src="https://github.com/user-attachments/assets/87695a11-2d28-4de2-8453-9fa211d4809a" width="300" height="300" alt="Add Friend"> 
      </a> 
    </td> 
    <td style="border: 1px solid black; width: 310px; height: 310px; text-align: center;"> 
      <a href="https://github.com/user-attachments/assets/c694c4bf-6f08-46f7-9308-591b0465798d" target="_blank" rel="noopener noreferrer"> 
        <img src="https://github.com/user-attachments/assets/c694c4bf-6f08-46f7-9308-591b0465798d" width="300" height="300" alt="Split Bill"> 
      </a> 
    </td> 
  </tr> 
</table>

## Demo (link)

Check out the live demo of the application [here](https://billsplitfriends.netlify.app/).

## Project Structure

```bash
Eat-Split/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
├── src/
│   ├── components/
│   │   ├── Button.js
│   │   ├── FormAddFriend.js
│   │   ├── FormSplitBill.js
│   │   ├── Friend.js
│   │   ├── FriendList.js
│   ├── App.js
│   ├── data.js
│   ├── index.css
│   ├── index.js
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
```

## Technologies Used

[![React Badge](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)](#)

## Third-Party Libraries

- **ESLint**: For identifying and fixing problems in JavaScript code.
- **Prettier**: For ensuring consistent code formatting.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
