Website Deployment  

Task:  

Deploy 3 different websites on an Ubuntu server using only the server IP.  

http://10.70.2.25:8081/  

http://10.70.2.25:8082/  

http://10.70.2.25:8083/  



Step-1 :  

Update your server  


sudo apt update && sudo apt upgrade -y


 
Step-2 :  

Install Nginx  

sudo apt install nginx -y  
sudo systemctl start nginx
sudo systemctl enable nginx

 http://10.2.70.25        //nginx home page

Step-3 :
Create folders for each website
sudo mkdir -p /var/www/site1
sudo mkdir -p /var/www/site2
sudo mkdir -p /var/www/site3

add website file on respective folder 

sudo chown -R www-data:www-data /var/www/site*
sudo chmod -R 755 /var/www/site*                                                     //set permission

Step-4 :
Create Nginx configuration files

sudo nano /etc/nginx/sites-available/site1

  
  server {
    listen 8081;
    server_name _;
    root /var/www/site1;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}

sudo nano /etc/nginx/sites-available/site2  

server {
    listen 8082;
    server_name _;
    root /var/www/site2;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}

sudo nano /etc/nginx/sites-available/site3

  
  server {
    listen 8083;
    server_name _;
    root /var/www/site3;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}

Step-5 :
Enable the sites
sudo ln -s /etc/nginx/sites-available/site1 /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/site2 /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/site3 /etc/nginx/sites-enabled/

sudo nginx -t
sudo systemctl reload nginx

