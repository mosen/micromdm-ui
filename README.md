# MicroMDM UI

[![Build Status](https://travis-ci.org/micromdm/micromdm-ui.svg?branch=master)](https://travis-ci.org/micromdm/micromdm-ui)

**MicroMDM UI** Is a Web UI front end for [MicroMDM](https://micromdm.io), [Source](https://github.com/micromdm/micromdm)

Overview
--------

This project is under heavy development, more information and screenshots will be posted when theres something to look at.
The UI may be provided in an optional bundle with micromdm at a later stage.

Standalone Installation
-----------------------

- Install [NodeJS](https://nodejs.org/en/download/).
- Clone this repository.
- `NODE_ENV=production npm install` to install non-testing dependencies only.
- `NODE_ENV=production npm run build` to build the assets into the `public` directory.
- Serve the contents of the public directory using nginx or apache.

## Example nginx configuration ##

The most important part is rewriting missing URLs back to index.html.
This allows browser reload to work when HTML5 History states are pushed.

    server {
      listen       <port goes here>;
      server_name  <hostname here>;
    
      root         /path/to/public;
      index        index.html;
    
      location / {
        try_files $uri @missing;
      }
    
      location @missing {
        rewrite ^ /index.html break;
      }
    }

Developer Setup
---------------

- Install [NodeJS](https://nodejs.org/en/download/). 
- Clone this repository.
- `npm install` in the cloned directory to install dependencies.
- `npm run dev` to start the [webpack-dev-server](http://webpack.github.io/docs/webpack-dev-server.html) on port **4000**.
    - You can modify the port number by editing the `devServer.js` and replacing the server.listen argument.
    - The dev server allows you to modify and see code changes in real time.
    - Navigate to `localhost:4000` and click the connect icon to get started. MicroMDM must be running at the same time
    but you may connect to a different host using the UI.
- `npm run start-storybook` to view individual React components within the [Storybook sandbox](https://getstorybook.io)
    - This is very helpful to see a UI component in isolation either for manual testing or styling.
- `npm run test` to run the unit tests via [mocha](http://mochajs.org)
        
