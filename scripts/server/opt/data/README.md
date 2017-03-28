1. Run the following command to start the mongodb.

`bash start.sh`


2. You may need to run the following command to enter the admin mode of mongodb.

`sudo docker exec -it mongodb mongo admin`

3. You may need to add a new user

`db.createUser({user:'admin',pwd:'admin',roles:['readWrite',{role:'dbAdmin',db:'sendmore'}]})`
