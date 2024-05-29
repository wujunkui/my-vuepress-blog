---
date: 2024-05-29
category:
    - 服务器
tag:
    - 技术
    - 运维
---

# 服务器安装HTTPS证书-免费版

Now let’s install Certbot, the free, open source tool for managing Let’s Encrypt certificates:
```
sudo apt install software-properties-common
sudo add-apt-repository universe
sudo apt update
sudo apt install certbot python3-certbot-nginx

```
To obtain a certificate, you can now use the Nginx Certbot plugin, by issuing the following command. The certificate can cover multiple domains (100 maximum) by appending additional `d` flags.
```
sudo certbot --nginx certonly -d YOURDOMAIN -d www.YOURDOMAIN
```
After entering your email address and agreeing to the terms and conditions, the Certbot client will generate the requested certificate. Make a note of where the certificate file `fullchain.pem` and key file `privkey.pem` are created, as you will need them later.
```
Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/ashleyrich.com/fullchain.pem
Key is saved at: /etc/letsencrypt/live/ashleyrich.com/privkey.pem

```
Certbot will handle renewing all your certificates automatically, but you can test automatic renewals with the following command:
```
sudo certbot renew --dry-run
```