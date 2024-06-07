---
sidebar_position: 2
---

# Usage

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
