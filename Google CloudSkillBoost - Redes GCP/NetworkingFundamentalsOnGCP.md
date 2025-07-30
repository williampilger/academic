# Networking Fundamentals on Google Cloud: Challenge Lab


### Criando a Infraestrutura

*Criei três máquinas (VMs) com o Apache, usando o CloudShell e o código abaixo:*
```sh
gcloud compute instances create web1 \
    --project=qwiklabs-gcp-02-31a1dca897ec \
    --zone=us-east4-a \
    --machine-type=e2-small \
    --network-interface=network-tier=PREMIUM,stack-type=IPV4_ONLY,subnet=default \
    --metadata=startup-script=\ \
\ \ \ \ \ \'\#\!/bin/bash$'\n'\ \ \ \ \ \ apt-get\ update$'\n'\ \ \ \ \ \ apt-get\ install\ apache2\ -y$'\n'\ \ \ \ \ \ service\ apache2\ restart$'\n'\ \ \ \ \ \ echo\ \"$'\n'\<h3\>Web\ Server:\ web\<num\>1\</num\>$'\n'\</h3\>\"\ \|\ tee\ /var/www/html/index.html\',enable-oslogin=true \
    --maintenance-policy=MIGRATE \
    --provisioning-model=STANDARD \
    --service-account=325798802401-compute@developer.gserviceaccount.com \
    --scopes=https://www.googleapis.com/auth/devstorage.read_only,https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring.write,https://www.googleapis.com/auth/service.management.readonly,https://www.googleapis.com/auth/servicecontrol,https://www.googleapis.com/auth/trace.append \
    --tags=network-lb-tag \
    --create-disk=auto-delete=yes,boot=yes,device-name=web2,disk-resource-policy=projects/qwiklabs-gcp-02-31a1dca897ec/regions/us-east4/resourcePolicies/default-schedule-1,image=projects/debian-cloud/global/images/debian-11-bullseye-v20250212,mode=rw,size=10,type=pd-balanced \
    --no-shielded-secure-boot \
    --shielded-vtpm \
    --shielded-integrity-monitoring \
    --labels=goog-ec-src=vm_add-gcloud \
    --reservation-affinity=any
```

Por algum motivo, o script de inicialização não funcionou, então:
```sh
sudo su
apt-get update
apt-get install apache2 -y
service apache2 restart
echo "<h3>Web Server: web<num>2</num></h3>" > /var/www/html/index.html
```



---

# Sobre

Não foi possível concluir esta aula, pois o sistema não reconhecia as máquinas rodando, sendo que estavam.
