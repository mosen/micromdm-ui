# MicroMDM UI

**MicroMDM UI** Is a Web UI front end for [MicroMDM](https://micromdm.io), [Source](https://github.com/micromdm/micromdm)

Overview
--------

This project is under heavy development, more information and screenshots will be posted when theres something to look at.

Getting Started
---------------

*NOTE*: It's assumed that you are running these commands from the cloned git repository folder.

### Prerequisites

* Make sure you have [Docker](https://www.docker.com/) installed. You may also need to install `docker-compose` separately
on a linux platform.
* Check your version to make sure it's relatively recent. Run these commands in your terminal application:


    $ docker -v

The docker version should be at least 1.10.0.

    $ docker-compose -v

The docker-compose version should be at least 1.6.0 to support docker-compose v2 files.

* Initialise the SCEP service so the MDM can hand out certificates to all the devices that enroll:


    $ ./.docker/scepinit.sh
 
If that step was successful, you should see `ca.key` and `ca.pem` in `.docker/scep/depot`.

### Certificates

MicroMDM requires quite a few certificates, as outlined in the [Getting Started Guide](https://micromdm.io/getting-started/#certificates).

If the server, CA, or push certificates are missing from `./.docker/micromdm`, it simply won't start. I'll elaborate on this
later, but you should read the referenced url.

### Start the services

* Run `docker-compose up`

All of the dependencies will be pulled down as containers and started up in order.



Building
--------

This project uses a fairly typical webpack/babel/react toolchain to produce the main application bundle.
You can simply run `npm install` to install all of the dependencies, then `webpack` to build the production bundle.

There is an npm script for running the hot reload server which can be started with `npm run dev`.

The UI will expect that the `webpack-dev-server` is running on port **4000** by default.


