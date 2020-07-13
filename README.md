# heroku-node-worker-playground

example of running a long lived worker process on heroku that is not a web app/server

## Prerequisites

* [heroku](https://heroku.com) account
* [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

## Running 

```sh
# clone
git clone https://github.com/pfeilbr/heroku-node-worker-playground.git

# change to root directory
cd heroku-node-worker-playground

# create heroku app
heroku create

# >>> make changes to `worker.js`, install packages, etc.

# commit changes
git commit -a -m "my awesome changes"

# deploy / push changes to heroku
git push heroku master # if worker is already running, this push will kill it and start the new one

# run worker only / stop web dyno
heroku ps:scale web=0 worker=1

# verify running
heroku ps

# view logs
heroku logs -t

# stop worker
heroku ps:scale worker=0

# start worker
heroku ps:scale worker=1
```

## Resources

* [Background Jobs in Node.js with Redis](https://devcenter.heroku.com/articles/node-redis-workers)
* [Run Non-web Java Dynos on Heroku](https://devcenter.heroku.com/articles/run-non-web-java-processes-on-heroku)