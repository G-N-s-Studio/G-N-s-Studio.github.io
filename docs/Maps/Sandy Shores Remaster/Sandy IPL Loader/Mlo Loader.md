---
sidebar_position: 2
---
# Interior/Mlo Loader

## Explication
Nous vous proposons et proposerons un grand nombre d'intérieur dans Sandy Shores.
Cependant vous n'êtes pas obligé de tous les utilisés, c'est pour cette raison que nous vous proposons un IPL Loader qui chargera ou déchargera les intérieurs à votre convenances.

Nous profiterons de ce loader pour optimisé votre jeu au mieu celon votre configuration souhaité aufin de stabilisé au maximum les FPS de vos joueurs.

## Comment sans servir
Dans le fichier `cfx_gn_sandy_ipl_loader\config.lua`, changer les valeurs par "True" or "False" dans `config`.
- True = Activation de l'intérieur
- False = Désactivation de l'intérieur

```lua
config = {                      -- This config enables or disables Mlo IPL
    ["Sandy_CarDealer"] = true,  -- Albany Car Dealer
    ["Sandy_LiquorBar"] = true, -- LiquorBar / The Rusty Tap
    ["Sandy_House"] = true,     -- All Houses Interiors
    ["Sandy_Motel"] = true,     -- Vanilla Motel
    ...
}
```

## Que fait ce loader ?

### Activation d'un MLO :
- Chargement de l'IPL affichant le MLO en jeu
- Chargement de l'IPL lod MLO
- Chargement de l'occlusion adapté au MLO

### Désactivation du MLO
- Déchargement du MLO (il n'es plus rendu en jeu)
- Chargement de l'IPL "blocker" qui empechera les joueurs de rentrer dans une maison vide.
- Chargement de l'occlusion entière du batiment (plus performante)

Grace à cela nous optimisons au maximum votre jeu celon votre configuration.