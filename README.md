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

1. Install all dependencies

```bash
npm run install:all
```

2. Start development server

```bash
npm run dev
```
