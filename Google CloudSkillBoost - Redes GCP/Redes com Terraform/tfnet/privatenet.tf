# Criar rede privatenet
resource "google_compute_network" "privatenet" {
  name                    = "privatenet"
  auto_create_subnetworks = false
}
# Criar sub-rede privatesubnet-us
resource "google_compute_subnetwork" "privatesubnet-us" {
  name          = "privatesubnet-us"
  region        = "us-east4"
  network       = google_compute_network.privatenet.self_link
  ip_cidr_range = "172.16.0.0/24"
}
# Criar sub-rede privatesubnet-second-subnet
resource "google_compute_subnetwork" "privatesubnet-second-subnet" {
  name          = "privatesubnet-second-subnet"
  region        = "us-east1"
  network       = google_compute_network.privatenet.self_link
  ip_cidr_range = "172.20.0.0/24"
}
# Criar uma regra de firewall para permitir tráfego HTTP, SSH, RDP e ICMP na privatenet
resource "google_compute_firewall" "privatenet-allow-http-ssh-rdp-icmp" {
  name = "privatenet-allow-http-ssh-rdp-icmp"
  source_ranges = [
    "0.0.0.0/0"
  ]
  network = google_compute_network.privatenet.self_link

  allow {
    protocol = "tcp"
    ports    = ["22", "80", "3389"]
  }

  allow {
    protocol = "icmp"
  }
}
# Adicionar a instância privatenet-us-vm
module "privatenet-us-vm" {
  source              = "./instance"
  instance_name       = "privatenet-us-vm"
  instance_zone       = "us-east4-a"
  instance_subnetwork = google_compute_subnetwork.privatesubnet-us.self_link
}
