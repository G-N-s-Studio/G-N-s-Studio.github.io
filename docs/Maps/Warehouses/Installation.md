---
sidebar_position: 1
---

# Installation

- Once purchased, unzip the file in your `resources` folder
- Make sure to start those resources in this order into your server config file:
```yaml
ensure cfx_gn_collection # required dependency
ensure cfx_gn_illegal_dlc # required dependency
# ...
ensure cfx_gn_warehouses
```
