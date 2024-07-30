---
sidebar_position: 3
---

# Ipl Loader

Each warehouse contains multiple "entity sets" allowing you to change the content of each warehouse.

## Available Themes

- Empty warehouse (which you can furnish via script/housing)
- Simple storage for transport/business management
- Meth lab
- Cocaine lab
- Weed farm
- Weapons manufacturing plant

## Test and preview entity sets

You can preview all the entity sets from our Showcase server, which provide a custom script to configure them in real time.<br/>
Here is two ways to join our server:

- [**G&N's Studio Showcase Server**](https://cfx.re/join/lpa6k4)
- `F8` > `connect 51.75.123.249`

## Entity sets list

Some themes works are split into multiple entity sets, offering more options.

| Entityset Int Small   | Laundry                                       | Superlab |
| --------------------- | ------------------------------------------------- | ----------- |
| Los Santos            | ✅                        | ✅          |
| Sandy Shores          | ✅                              | ✅          |
| Map Underground       | ❌                  | ✅          |

## Customize warehouses entity sets

### Using included script and config

We already provide a default entity sets configuration in `cfx_gn_warehouses\entityset\config.lua`.<br/>
Feel free to edit this file, to customize each locations according to your needs.

Here is an example to enable the Meth lab in the location 1. (see [Locations](/docs/Maps/Warehouses/Locations) for more details)

```lua
-- # Location 1
{
    { name = 'wh_b_empty',            enable = false }, -- Empty warehouse with light
    -- Storage
    { name = 'wh_b_storage_a_empty',  enable = false }, -- Simple empty storage
    { name = 'wh_b_storage_a_01',     enable = false }, -- With more props
    -- Meth laboratory
    { name = 'wh_b_meth_empty',       enable = true },  -- Meth lab with machine only / not in operation
    { name = 'wh_b_meth_01',          enable = true },  -- With more props / in operation
    -- Coke laboratory
    { name = 'wh_b_coke_empty',       enable = false }, -- Cocaine laboratory / not in operation
    { name = 'wh_b_coke_01',          enable = false }, -- With more props / in operation
    -- Storage b & weapon factory
    { name = 'wh_b_storage_b_empty',  enable = false }, -- Simple empty storage (B)
    { name = 'wh_b_storage_b_weapon', enable = false }, -- Weapon factory with stotage (B)
    -- Weed farms
    { name = 'wh_b_weed_empty',       enable = false }, -- Weed farms / not in operation
    { name = 'wh_b_weed_stage_1a',    enable = false }, -- Stage 1 weed plant
    { name = 'wh_b_weed_stage_1b',    enable = false }, -- Stage 2 weed plant
    { name = 'wh_b_weed_stage_1c',    enable = false }, -- Stage 3 weed plant
    { name = 'wh_b_weed_stage_1d',    enable = false }, -- Stage 4 weed plant
    { name = 'wh_b_weed_stage_2a',    enable = false }, -- Weed drying
    { name = 'wh_b_weed_storage',     enable = false }  -- Weed storage
}
```

### Custom framework integration

You can for sure disable our script (`cfx_gn_warehouses\entityset\config.lua` + `cfx_gn_warehouses\entityset\main.lua`) and create your own entity set system.<br/>
You could use a custom script to let players manage the entity sets based on your own job/gang features, allowing players to manage any warehouse in runtime.

Our team is open to any proposal of this kind of script, so developers, feel free to open a ticket on our [**Discord**](https://discord.com/invite/gnstudio)!
