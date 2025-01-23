---
sidebar_position: 3
---
# Houses Mlo Config

## Explanation  
If you choose to activate the house MLOs, you can configure the house interiors as follows:  
- Fully furnished houses with all props (sofas, beds, tables, etc.)  
- Empty houses (no props placed, allowing your players to map their own interiors)  

## How to Use  
In the file `cfx_gn_sandy_ipl_loader\config.lua`, change the values to "True" or "False" in `entityset_config`.  
- **True** = Activate props (furnished interiors)  
- **False** = Deactivate props (empty interiors)  


```lua
entityset_config = {
    ["Sandy_House"] = true, -- true or false
}
```