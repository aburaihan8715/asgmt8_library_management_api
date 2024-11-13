# Project : asgmt8_library_management_api

## Live link server:

https://asgmt8-library-management-api.vercel.app

## Github link server:

https://github.com/aburaihan8715/asgmt8_library_management_api

## Technologies used:

1. Typescript
2. Node js
3. Express js
4. PostgreSQL
5. Prisma ORM

## Packages used:

1. cors
2. mongoose
3. eslint
4. http-status

## API Endpoints

## Member:

- /api/members(POST)
- /api/members(GET)
- /api/members/:id(GET)
- /api/members/:id(PATCH)
- /api/members/:id(DELETE)

## Book:

- /api/books(POST)
- /api/books(GET)
- /api/books/:id(GET)
- /api/books/:id(PATCH)
- /api/books/:id(DELETE)

## BorrowRecord:

- /api/borrow(POST)
- /api/borrow/overdue(GET)
- /api/return(POST)

## Deploy on:

- supabase

## Scripts

```js
    "postinstall": "prisma generate",
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "prod": "NODE_ENV=production node ./dist/server.js",
    "build": "tsc"
```

<p>======end=======</p>
