
## Git Webhooks 

#### Use git webhook to trigger execution of a script

1. Config webhook service for your git repository

2. Once someone commit and push to this repository, gogs will initiate a post request, if the signature is correct, webhook service will execute a shell script

![](/img/1.jpg)