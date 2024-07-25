terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0.2"
    }
  }

  required_version = ">= 1.1.0"
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "rg" {
  name     = "augny-badminton"
  location = "West Europe"
}

resource "azurerm_static_site" "augny-badminton" {
  name                = "augny-badminton-fr"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
}

resource "google_storage_bucket" "default" {
  name          = "augny-badminton-bucket-tfstate"
  force_destroy = false
  location      = "us-east1"
  storage_class = "STANDARD"

}
