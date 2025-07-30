# Criar a rede mynetwork
resource "google_compute_network" "mynetwork" {
  name                    = "mynetwork"
  auto_create_subnetworks = "true"
}

# Criar uma regra de firewall para permitir tráfego HTTP, SSH, RDP e ICMP em mynetwork
resource "google_compute_firewall" "mynetwork-allow-http-ssh-rdp-icmp" {
  name = "mynetwork-allow-http-ssh-rdp-icmp"
  source_ranges = [
    "0.0.0.0/0"
  ]
  network = google_compute_network.mynetwork.self_link

  allow {
    protocol = "tcp"
    ports    = ["22", "80", "3389"]
  }

  allow {
    protocol = "icmp"
  }
}

# Criar a instância mynet-us-vm
module "mynet-us-vm" {
  source              = "./instance"
  instance_name       = "mynet-us-vm"
  instance_zone       = "us-east4-a"
  instance_subnetwork = google_compute_network.mynetwork.self_link
}

# Criar a instância mynet-second-vm"
module "mynet-second-vm" {
  source              = "./instance"
  instance_name       = "mynet-second-vm"
  instance_zone       = "us-east1-c"
  instance_subnetwork = google_compute_network.mynetwork.self_link
}