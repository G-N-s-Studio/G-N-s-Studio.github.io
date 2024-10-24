---
sidebar_position: 2
---

# Usage

## Config.lua
You can configure animtions in the `config.lua` file.<br/>
**All config fields are optionals**<br/>

```lua title="config.lua"
coke_power_mix = { -- bkr_prop_coke_tablepowder (name of the model used for this target)
    -- Allow the player to cancel the animation (default: false)
    canCancel = true,

    -- Handle when an animation is cancelled
    onCancel = function(key)
        print('Cancelled animation:', key)
    end,

    -- Handle when an animtion is finished OR cancelled
    onFinish = function(key, cancelled)
        if cancelled then
            print('Cancelled animation:', key)
        else
            print('Finished animation:', key)
        end
    end,

    -- Custom fields are allowed (just like ox_target):
    key = 'coke_power_mix',

    -- You can also add any existing ox_target option here, example:
    label = 'Coke power mix',
    icon = 'fa-solid fa-credit-card',
    distance = 2.5,
    iconColor = 'teal',
    canInteract = function(entity, distance, coords, name, bone)
        return true
    end,
    onSelect = function(data)
        print('Started animation:', data.key) -- 'key' is available since we defined it as custom field above
    end
}
```

## Use with event

You can use our animations with event, here is an example:

You'll find the `modelhash` in [animations list](https://g-n-s-studio.github.io/docs/category/animations-list) -> Target Props

You'll find the `animation name` in [animations list](https://g-n-s-studio.github.io/docs/category/animations-list) -> Event Name

```lua
local modelHash = GetHashKey('gn_prop_illegal_table_coke1')
local coords    = GetEntityCoords(PlayerPedId(), false)
local entity    = GetClosestObjectOfType(coords.x, coords.y, coords.z, 5.0, modelHash, false, false, false)

TriggerEvent('gn:anim:start', 'coke_press_coke_mould', entity, PlayerPedId()) -- key, entity, ped


-- For stop animation:
SetTimeout(2000, function()
    TriggerEvent('gn:anim:stop', PlayerPedId()) -- ped
end)

-- When animation end:
AddEventHandler('gn:anim:end', function(key, ped, cancelled)
    print('anim ended', key, ped, cancelled)
end)
```


Find all the event names [HERE](https://g-n-s-studio.github.io/docs/category/animations-list)