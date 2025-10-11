## Hub–Spoke Azure infra using Terraform — VM Scale Sets + Application Gateway (L7) + Internal LB + VNet peering + centralized logging (Log Analytics) and backups.

**What I built :**

- *Hub–Spoke network with peering (central hub for shared services).*

- *Centralized security: NSGs and optional Azure Firewall (configurable).*

- *Front-door for the app: Application Gateway (L7) with Public IP and health probes.*

- *Scalable compute: VM Scale Set (VMSS) behind an Internal Load Balancer for internal L4 traffic and probe-based health.*

- *Observability: Log Analytics workspace + diagnostic settings for AppGW / VMSS.*

- *Recovery: Recovery Services Vault scaffolded for backups.*

- *Full deployment automated with Terraform modules and remote state in Azure Blob Storage — reproducible and reviewable.*

**Why this matters :**

- *Demonstrates secure hybrid-ready architecture (hub-spoke + transit).*

- *Shows practical IaC: modular, reviewable, and ready for CI pipelines.*

- *Cost-aware: demo defaults use small VM sizes and immediate teardown guidance to avoid bills.*
