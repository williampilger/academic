variable "instance_name" {}
variable "instance_zone" {}

variable "instance_type" {
  default = "e2-standard-2"
}

variable "instance_subnetwork" {}

resource "google_compute_instance" "vm_instance" {
name = var.instance_name
zone         = var.instance_zone
machine_type = var.instance_type
  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"
    }
  }

  network_interface {
    subnetwork = var.instance_subnetwork
    access_config {
      # Alocar um IP NAT um para um à instância
    }
  }
}