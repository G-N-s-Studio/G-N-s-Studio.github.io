---
sidebar_position: 3
---
# Houses Mlo Config

## Explication
Si vous choississez d'activé les MLO des maisons, vous pouvez alors configurer l'aménagement des maisons, à savoir :
- Maisons aménager avec tout les props (canapé, lits, table ...)
- Maison vide (aucun props de posé pour que vos joueurs mappe eux même leurs pièces)

## Comment sans servir
Dans le fichier `cfx_gn_sandy_ipl_loader\config.lua`, changer les valeurs par "True" or "False" dans `entityset_config`.
- True = Activation des props (pièces meublé)
- False = Désactivation des props (pièces vide)

```lua
entityset_config = {
    ["Sandy_House"] = true, -- true or false
}
```