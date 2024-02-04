# React Users Listing

The app using https://randomuser.me API to fetch random users and displaying details.

## Technology

- 🟦 [TypeScript](https://www.typescriptlang.org/)
- ⚛️ [React](https://reactjs.org/)
- ↔ [Axios](https://github.com/axios/axios)

## Project Setup

Clone the Repo and execute the following commands on terminal:
```bash
git clone https://github.com/Awais914/react-random-users.git
cd react-random-users
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Search Functionality Method: filterAndSearch()
filterAndSearch() method takes an array of user objects that need to be filtered and searched. The users array is filtered using the filter method, and only users that meet certain criteria are included in the result. The user is included in the result if the gender matches the selected filter or at least one of the specified search parameters contains the search term.
