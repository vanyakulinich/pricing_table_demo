## Pricing Table Demo

### Desription

Tech Stack: NestJS server + ReactJS with Typescript for client<br/>
Purpose of this demo to output pricing table, created from csv. Csv is stored on server and is fetched by client to be shown as table.

### Installations

When launching first time, first dependencies need to be installed

```bash
  # will install dependencies both for server and client
  [sudo] bash install_dependencies.sh
  # or dependencies can be installed manually
  cd ./server && npm install # install dependencies for server
  cd ../client && npm install # next install dependencies for client
```

Next step is to create envs. Both server and client have its own envs. See .env.example files in client/ and server/<br/>
You can create default envs for client and server with one script launch:<br/>

```bash
  # will generate .env files out of .env.example files for client and server
  [sudo] bash create_default_envs.sh
  # or you can create .env files manually
  cd ./server && touch .env # check .env.example for server
  cd ./client && touch .env # check .env.example for client
```

### How to use

To run everything in development mode:<br/>

```bash
  # will run server and client in dev mode with defined envs from .env files
  [sudo] bash start_dev.sh
```

### Remarks

Due to limited time for prototyping and some conditions required, the chosen stack is:<br/>

- NestJS as server
- ReactJS + TypeScript as client
  NestJS looks a bit overwhelming, but it fits perfectly for this case due to TS support and built-in structure.<br/>
  Styling of the table is very simple</br>
  Table is sorted by its groups and also inside each group sorting between inner elements implemented.
