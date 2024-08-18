# Generate self signed key and certificate
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/apache-selfsigned.key -out /etc/ssl/certs/apache-selfsigned.crt
# Enable SSL
sudo a2ensite default-ssl
sudo a2enmod ssl
# Restart apache2
sudo systemctl restart apache2
