# Introduction to GraphQL

Project is made pretty simple to get fundamentals about `GraphQL`, by using Schemas and Types.

Additional topics like Queries and Mutations.

Then its connected to `React` with `Apollo/Client`.

No database implemented, at this momemt.

Apollo port = `localhost:4000`

## Using Apollo GraphQL

Apollo Server GraphQL Playground.
An interactive environment to explore and test GraphQL API.

### Basic operations

1. Running a Query

```graphql
query Beers {
  beers {
    id
    name
    abv
    ibu
  }
}
```

2. Selecting Fields

```graphql
query Beers {
  beers {
    id
    name
    description
    abv
    ibu
    style {
      name
      origin
    }
  }
}
```

3. Querying with Arguments

```graphql
query Beers {
  beers {
    id
    name
    description
    abv
    ibu
    style {
      name
      origin
    }
  }
}
```

## Installation

1. Clone repository

```bash
git@github.com:mariusrundereim/first-graphql-1.git
```

2. Install dependencies

```bash
npm i
```

3. Install Server

```bash
npm run server
```

4. Install Client

```bash
npm run client
```

5. Install Server & Client

```bash
npm run dev
```
