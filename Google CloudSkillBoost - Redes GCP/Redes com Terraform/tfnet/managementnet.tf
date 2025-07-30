# Criar a rede managementnet
resource "google_compute_network" "managementnet" {
  name                    = "managementnet"
  auto_create_subnetworks = "false"
}

# Criar sub-rede managementsubnet-us
resource "google_compute_subnetwork" "managementsubnet-us" {
  name          = "managementsubnet-us"
  region        = "us-east4"
  network       = google_compute_network.managementnet.self_link
  ip_cidr_range = "10.130.0.0/20"
}

# Adicionar uma regra de firewall para permitir tráfego HTTP, SSH, RDP e ICMP na managementnet
resource "google_compute_firewall" "managementnet-allow-http-ssh-rdp-icmp" {
  name = "managementnet-allow-http-ssh-rdp-icmp"
  source_ranges = [
    "0.0.0.0/0"
  ]
  network = google_compute_network.managementnet.self_link
  allow {
    protocol = "tcp"
    ports    = ["22", "80", "3389"]
  }
  allow {
    protocol = "icmp"
  }
}

# Adicionar a instância managementnet-us-vm
module "managementnet-us-vm" {
  source              = "./instance"
  instance_name       = "managementnet-us-vm"
  instance_zone       = "us-east4-a"
  instance_subnetwork = google_compute_subnetwork.managementsubnet-us.self_link
}