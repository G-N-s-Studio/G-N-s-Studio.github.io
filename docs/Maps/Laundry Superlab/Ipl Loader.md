---
sidebar_position: 3
---

# Superlab Ipl Script

## cfx_gn_superlab_ipl_script

### Introduction
<br/>
- You can use the superlab in Sandy Shores or Los Santos, or just use the Laundry for a 100% legal activity.
- The superlab can also be used only via teleportation (instance). In this case, we provide an IPL under the map.

**This script can be deactivated, in which case everything will be loaded by default.**

### Configuring IPL

To configure the IPLs, go to `cfx_gn_superlab_ipl_script/config.lua`

-> Set the values to `true` or `false` to activate or deactivate the superlabs depending on the locations.

```lua
LosSantos_lab = true
SandyShores_lab = true
UndergroundTP_lab = true
```

| Entityset Int Small   | Laundry Only | Superlab with Laundry | Superlab Only |
| --------------------- | ------------ | --------------------- | --------------|
| Los Santos            | ✅           | ✅                   |❌             |
| Sandy Shores          | ✅           | ✅                   |❌             |
| Map Underground       | ❌           | ❌                   |✅             |
