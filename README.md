# CampusFind – Campus Lost & Found Portal

## 1. Project Overview

CampusFind is a web application designed to help students and staff at Ontario Tech University report and locate lost items on campus.

Users can submit reports for items they have lost or found. The application provides a central place to browse these reports instead of relying on scattered social media posts or word of mouth.

Each report contains information such as the item name, category, description, location, date, report type, and status.

## 2. Features

- **Homepage:** Displays recently submitted lost and found reports.
- **Submit a Report:** Allows users to submit details about lost or found items.
- **Report Categories:** Organizes items into categories such as Electronics, Clothing, Keys, and Other.
- **Report Types:** Identifies whether an item was Lost or Found.
- **Report Status:** Tracks whether an item is Available or Claimed.
- **Database Storage:** Stores submitted reports in MongoDB Atlas.
- **Dynamic Content:** Retrieves reports from the database and displays them on the homepage.

## 3. Technologies Used

| Technology     | Purpose                                            |
| -------------- | -------------------------------------------------- |
| Node.js        | JavaScript runtime for the server                  |
| Express.js     | Handles server routes and requests                 |
| EJS            | Generates dynamic HTML pages                       |
| MongoDB Atlas  | Stores lost and found reports                      |
| Mongoose       | Defines database models and interacts with MongoDB |
| Bootstrap      | Helps style the user interface                     |
| dotenv         | Loads environment variables                        |
| Git and GitHub | Version control and source code hosting            |
| Render         | Hosts the deployed application                     |

## 4. Project Structure

```text
CampusFind/
├── app.js
├── bin/
├── config/
│   └── db.js
├── models/
│   └── Report.js
├── routes/
│   ├── index.js
│   ├── reports.js
│   └── users.js
├── views/
│   ├── index.ejs
│   ├── add-report.ejs
│   └── partials/
├── public/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
├── .env
├── .gitignore
├── package.json
└── package-lock.json
```

## 5. Installation and Setup

To run CampusFind locally:

1. Clone the repository:

```bash
git clone https://github.com/Abdalrahman-Abubakr/INFR3120-Fall26-Project.git
```

2. Navigate into the project directory:

```bash
cd INFR3120-Fall26-Project
```

3. Install the required dependencies:

```bash
npm install
```

4. Create a `.env` file in the project root and add your MongoDB connection string:

```env
MONGO_URI=your_mongodb_connection_string
```

5. Start the application:

```bash
npm start
```

6. Open the application in your browser:

```text
http://localhost:3000
```

**Note:** The `.env` file contains private database credentials and must not be uploaded to GitHub.

## 6. Database

CampusFind uses MongoDB Atlas to store submitted reports.

The Report model includes the following fields:

- `itemName`
- `category`
- `description`
- `location`
- `date`
- `reportType`
- `status`

New reports are saved to the database and retrieved when the homepage loads.

## 7. Live Application

The application is deployed using Render.

**Live Website:** https://campusfind-ffqh.onrender.com/

**GitHub Repository:** https://github.com/Abdalrahman-Abubakr/INFR3120-Fall26-Project

## 8. Project Scope and Future Improvements

The first release focuses on submitting lost and found reports, storing them in MongoDB, and displaying them on the homepage.

Possible future improvements include:

- Searching and filtering reports.
- User accounts and authentication.
- A more complete item-claiming process.
- Additional report management features.

## 9. sources used for thie web site

- Bootstrap 5.3 (Navbar, Form layouts, Tables, Badges, and Grid system): https://getbootstrap.com/docs/5.3/
- Express.js (Application framework and GET/POST routing logic): https://expressjs.com/
- EJS (Embedded JavaScript templating syntax and partial includes): https://ejs.co/
- Node.js (Runtime environment): https://nodejs.org/
