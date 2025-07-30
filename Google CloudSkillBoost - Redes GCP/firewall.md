# Configurando o Firewall

### Criando a VPC Net e Subnets

**falta escrever**


### Criando Regras para uma rede VPC inteira

Usando o CLI (ou CloudShell):
```sh
# Código equivalente, extraido do Console
gcloud compute firewall-rules create privatenet-allow-icmp-ssh-rdp \
  --direction=INGRESS \
  --priority=1000 \
  --network=privatenet \
  --action=ALLOW \
  --rules=icmp,tcp:22,tcp:3389
  --source-ranges=0.0.0.0/0
```

### Criando uma VM e Cadastrando ela na subrede com o firewall

```sh
# Código equivalente, extraido do Console
gcloud compute instances create managementnet-vm-1 \
    --project=qwiklabs-gcp-01-cb6d0c16d6e5 \
    --zone=us-east1-b \
    --machine-type=e2-micro \
    --network-interface=network-tier=PREMIUM,stack-type=IPV4_ONLY,subnet=managementsubnet-1 \
    --metadata=enable-oslogin=true \
    --maintenance-policy=MIGRATE \
    --provisioning-model=STANDARD \
    --service-account=383976303593-compute@developer.gserviceaccount.com \
    --scopes=https://www.googleapis.com/auth/devstorage.read_only,https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring.write,https://www.googleapis.com/auth/service.management.readonly,https://www.googleapis.com/auth/servicecontrol,https://www.googleapis.com/auth/trace.append \
    --create-disk=auto-delete=yes,boot=yes,device-name=managementnet-vm-1,image=projects/debian-cloud/global/images/debian-12-bookworm-v20250212,mode=rw,size=10,type=pd-balanced \
    --no-shielded-secure-boot \
    --shielded-vtpm \
    --shielded-integrity-monitoring \
    --labels=goog-ec-src=vm_add-gcloud \
    --reservation-affinity=any
```


