# codcsclub

<h2>Visit now: <a href="https://www.codcsclub.com/">codcsclub.com</a></h2>

This website is a hub for all things related to the College of Dupage Computer Science Club. The site hosts information about all our projects, team members, and other related details.

## Installation

This project is made with [Next.js 12.2+](https://nextjs.org/) and requires [Node.js 16+](https://nodejs.org/en/). To get started, run `npm install` to install all dependencies, then run `npm run dev` to start the development server. Open [http://localhost:3000](http://localhost:3000) with your browser to view the site.

Important configuration settings can be changed in the `config.json` file.

## Other Technologies

This project uses the following notable technologies/packages:

- `SASS`
- `SQLite3`
- `Cookie`

## Content Management

Administrators can manage all club members, projects, and other information through the admin panel, accessed in the `/admin` page.

All data is stored in the `database.db` file, located in the root folder.

## Public & Private API

You can access the following data using these API routes:

### Public API
Can be accessed at any time
- `/api/getProjects` Returns all club projects.
- `/api/getProjectsFull` Returns all club projects with full contributors and tags info.
- `/api/getPeople` Returns all club members.
- `/api/getPersonFull/<ID>` Return full info on club member.
- `/api/login` Login to the admin panel.
- `/api/logout` Logout as admin.

### Private API
Can only be accessed if the request contains the correct admin password in the `cs-password` cookie.
- `/api/createProject`, `/api/deleteProject`, `/api/editProject`, `/api/createPerson`, `/api/deletePerson`, `/api/editPerson`
