# Indigov-Take-Home
Take home project for Indigov interview. This repo is organized as a Yarn 3 monorepo. The individual projects and packages are written in TypeScript and can be interacted with individually. Some of them import others using Yarn workspaces.

# Setup
Since this is using Yarn 2+, you'll first need to run the following command in your terminal to enable the features that yarn relies on. 

```
corepack enable
```

Ensure Node 18 is installed by running

```
node -v
```

If the version displayed is not 18 (or is lower than 18.20), use nvm or your version manager of choice to install the correct version.

```
nvm install 18.20
```

Because the dependencies are included in the source code with Yarn's local cache feature, you probably won't have to install them. But if you want to run it anyways (or need to for any reason), you can run the following command from the root directory

```
yarn install
```

## VsCode
If opening the project in VsCode, it's recommended to install the extensions in `.vscode/extensions`. You'll also probably have to set the TypeScript version to the workspace by:
- opening any .ts file
- Press ctrl+shift+p (cmd+shift+p on mac), search for `TypeScript: Select TypeScript version...`
- Chose the "Use workspace version" option

# Top-Level Commands
This monorepo uses `nx` to run similar commands across multiple apps and packages. The root level `package.json` file contains the following scripts:

- test
- build
- format

# Running the api
First, you'll have to setup the database. Change into the `packages/crm-models` directory and run the following commands:

```
yarn build
yarn db:deploy-migrations
```

This will create a local `dev.db` file that Prisma will interact with.

The REST api that's the main part of the take-home project is located in `apps/crm-api`. To spin the api up and make it available, change into that directory and run the following

```
yarn start-local
```

This will start the api on localhost:3000. Further documentation on the api can be found in the README in that directory. This project is using `sqlite` for a database, so there's no need to spin up additional resources to run anything.

# Notes
A section for things I want to mention for the reader's sake or I want to talk about during the interview.

## Foreword
I took the opportunity to make this take home project into a learning experience as well by delving into a couple of things that were new to me. While I have a lot of experience with ExpressJS REST apis and was able to pretty quickly stand up the endpoints and services I needed to accomplish the requirements of the project, this is my first time doing the following:
- standing up a Yarn 3 monorepo from scratch
- using Prisma as an ORM
- Using something like Prisma in a monorepo
- Using sqlite in a Node project

I had a lot of fun getting all this set up and figuring out how to make the pieces work together, but there may be some weird stuff that I haven't caught yet or a "work on my machine" situation. I've tried to catch any problems like that and solve them, but there's always a chance that I've missed something.

## What Would I do Different in a Production Setting
There are a handful of things that I would change or add if I was doing this for real and not just a take home project. The only reason I didn't do them here is because I wanted to focus my time on the parts that mattered and there's a lot of setup and assumptions involved in creating a production ready feature.

Notably, there's nothing in this monorepo for handling deployments. Under normal circumstances, I would be using Docker to create a container for local testing and then creating an image that could be uploaded to AWS or deployed normally using Kubernetes (or something similar) for the api to run in.

I also chose to use `sqlite` as a database because it gives a more realistic setting than keeping data in memory or saved to a regular file or something while not requiring anybody accessing this to have Docker or Postgres installed and potentially having to deal with configuring a connection to the database; Prisma also works with `sqlite` and I briefly toyed with the idea of trying to have both a "local" `sqlite` version of the `models` package *and* a Postgres version, but that felt like it would take too much time and accomplish little, so I abandoned the idea.

I also chose not to spend the time setting up CI/CD stufff like Github Actions.

## Notes about decisions
I only added a handful of unit tests. Most of the code I wouldn't consider to be well-suited for unit tests anyways and normally I would set up integration tests to handle things like testing the api endpoints directly and anything that touched the database.

The linting and prettier configs are pretty basic and I'm not even sure they work all that well, but they worked well enough and are more similar to what a real project would contain at least.

I chose to use this monorepo format because it's similar to what I've been using most recently at work, but I've never set up one from scratch so it was interesting to do that for the first time and see what went into that and what tools were available.

It took awhile to get Prisma working in a way that I was happy with.

I initially wanted to create an `sdk` package that could be used by a frontend or other services to interact with this api because I think it makes for a much nicer user experience to have something like that available. However, after starting and restarting that idea several times I scrapped it. I would have to sit down and think about and plan how to build that out.

For the api I also wanted to build some Swagger/OpenAPI documentation but didn't have the time for it.
