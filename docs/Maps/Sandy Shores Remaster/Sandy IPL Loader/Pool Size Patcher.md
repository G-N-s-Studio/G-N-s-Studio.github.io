---
sidebar_position: 4
---
# Pool Size Patcher

## Explanation  
This script aims to prevent **pool size=400** issues caused by the number of portals in certain MLOs within an area around the player.  

``cfx_gn_sandy_ipl_loader/client/ipl_poollsize_patch.lua``

The Lua file is unlocked if you want to check the code.  

## What Does This Loader Do?  

The script unloads the referenced IPLs within a predefined distance.  
This allows the game to completely unload **YTYP** data, fully removing the MLO (which is not the case with simple LOD distance + LOD parent).  