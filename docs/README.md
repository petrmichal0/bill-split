## Project Title and Description
Bill-Split is a web application designed to help users split bills and manage balances with friends. Users can add friends, track balances, and split bills with ease.

## Badges
![Static Badge](https://img.shields.io/badge/status-online-brightgreen)

## Quick Look
<img src="https://github.com/user-attachments/assets/47407524-c3c9-4148-82e9-7237ac184bbb" width="700" alt="Eat-Split App Demo">

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
- Node.js (v20 or higher)
- npm (v10 or higher)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/petrmichal0/bill-split.git
    ```

2. Navigate to the project directory:
    ```bash
    cd bill-split
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
    <th>Bill Split</th> 
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

```css
Eat-Split/
├── .github/
│   └── workflows/
│       └── main.yml
├── docs/
│   └── README.md
├── public/
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── FormAddFriend.tsx
│   │   ├── FormSplitBill.tsx
│   │   ├── Friend.tsx
│   │   └── FriendList.tsx
│   ├── App.tsx
│   ├── data.ts
│   ├── index.css
│   ├── index.html
│   └── main.tsx
├── tests/
│   ├── integration/
│   │   └── App.integration.test.tsx
│   └── unit/
│       ├── components/
│       │   ├── Button.test.tsx
│       │   ├── FormAddFriend.test.tsx
│       │   ├── FormSplitBill.test.tsx
│       │   ├── Friend.test.tsx
│       │   └── FriendList.test.tsx
│       └── App.test.tsx
├── .gitignore
├── README.md
├── jest.config.js
├── package-lock.json
├── package.json
├── tsconfig.json
└── vite.config.js
```

## Technologies Used

[![React Badge](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)](#)
[![Vite Badge](https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&labelColor=black&logo=vite&logoColor=646CFF)](#)
[![TypeScript Badge](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&labelColor=black&logo=typescript&logoColor=3178C6)](#)
[![Framer Motion Badge](https://img.shields.io/badge/-FramerMotion-BC4A97?style=for-the-badge&labelColor=black&logo=framer&logoColor=BC4A97)](#)
[![Jest Badge](https://img.shields.io/badge/-Jest-C21325?style=for-the-badge&labelColor=black&logo=jest&logoColor=C21325)](#)
[![React Testing Library Badge](https://img.shields.io/badge/-React%20Testing%20Library-E33332?style=for-the-badge&labelColor=black&logo=testing-library&logoColor=E33332)](#)

## Third-Party Libraries

- None

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the LICENSE file for details.

