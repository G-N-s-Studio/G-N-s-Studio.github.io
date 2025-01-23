---
sidebar_position: 2
---
# Interior/Mlo Loader

## Explanation  
We provide and will continue to provide a wide range of interiors in Sandy Shores.  
However, you’re not required to use them all, which is why we offer an IPL Loader that allows you to load or unload interiors as you see fit.  

This loader is also designed to optimize your game based on your chosen configuration, helping to maximize FPS stability for your players.  

## How to Use  
In the file `cfx_gn_sandy_ipl_loader\config.lua`, change the values to "True" or "False" in the `config`.  
- **True** = Activate the interior  
- **False** = Deactivate the interior  


```lua
config = {                      -- This config enables or disables Mlo IPL
    ["Sandy_CarDealer"] = true,  -- Albany Car Dealer
    ["Sandy_LiquorBar"] = true, -- LiquorBar / The Rusty Tap
    ["Sandy_House"] = true,     -- All Houses Interiors
    ["Sandy_Motel"] = true,     -- Vanilla Motel
    ...
}
```

## What Does This Loader Do?  

### Activating an MLO:  
- Loads the IPL displaying the MLO in-game.  
- Loads the IPL for the MLO’s LOD.  
- Loads the occlusion tailored to the MLO.  

### Deactivating the MLO:  
- Unloads the MLO (it will no longer render in-game).  
- Loads the "blocker" IPL, preventing players from entering an empty house.  
- Loads the full building occlusion (more performance-efficient).  

With this, we maximize your game’s optimization based on your chosen configuration.  