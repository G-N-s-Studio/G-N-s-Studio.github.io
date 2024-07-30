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
ensure cfx_gn_laundry_dlc
```
Only for [Los Santos location ](link_ls) 
```
ensure cfx_gn_ls_laundry 
```

Only for [Sandy Shores location](link_sandy_shores) 
```
ensure cfx_gn_sandy_mapdata
ensure cfx_gn_sandy_laundry 
```
