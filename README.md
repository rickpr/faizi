# Faizi Opendaylight application

This application assumes you already have OpenDaylight running on your local
machine. If it is elswhere, edit `config/initializers/odl.rb` to the correct
URL.

This application has only been tested to work properly with OpenDaylight Helium.
Its authentication method is not tested to be secure and is probably not secure,
it is just for demonstration purposes.

In addition, you must set up Mininet running within screen to use the ping flood
feature. The application will work fine without it, but to run the packet flood
test I have set up, you must first install screen:

Ubuntu/Debian:
```
$ sudo apt-get install screen
```

Red Hat/Fedora
```
$ sudo yum install screen
```

Then, run a screen named Mininet and run mininet within it:
```
$ screen -S mininet
$ sudo mn --controller remote
```
To detach from screen, press Ctrl+A, release and press D.

Then start the rails applications:

```
$ bundle install
$ rake db:migrate
$ rails s
```
If you would like the proverbs feature to work, visit the rails server (normally
starts at [http://localhost:3000](http://localhost:3000) and visit `/proverbs`.
Then you will see funny little sayings at the bottom of the screen!

>> Ricardo Piro-Rael

This application is for sample and test purposes only. Anyone is free to use it
for any reason, but it is not guaranteed to work or do anything at all.
