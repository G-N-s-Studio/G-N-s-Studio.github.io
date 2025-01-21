---
sidebar_position: 1
---

Please follow the instructions below to properly use this resource.

## MLO / Collision

| Information                     | Base                    | Exemple                |
| --------------------------------| ------------------------| -----------------------|
| Mlo à multi positionnement      | int_gn_MloName          | int_gn_boxing          |
| Mlo à positionnement spécifique | int_gn_Position_MloName | int_gn_sandy_cardealer |

## YBN

Nommé à l'identique que le MLO, cette collision contiendra principalement les meshs du **shell**

>💡Tips : Séparer les mesh par room aideras au calcul d'extent des rooms. Tips fonctionnant aussi dans YDR/Shell

### Collision hi@[...]

Nous utiliserons les collisions hi@ de 2 façons différentes.

#### -> Utilisation Vanilla
Rockstar utilise ces collisions comme plus détaillé, avec une physique attribué uniquement (ou presque) au armes/impacte de balles.
On trouvera une collision grossière et généralement sous forme de box globalisant un mesh dans la collision classic sans le flag BVH `MAP WEAPON`, et une collision plus détaillé avec comme flag BVH unique `MAP WEAPON`, qui ce trouverons donc dans la collisions **hi@...**

| Exemple Mesh | Col Ped / MAP WEAPON | Col hi@ |
| -- | -- | -- |
| | flag BVH sans `MAP WEAPON`| flag BVH avec uniquement `MAP WEAPON` |
| <img src="/img/ex_col_table_mesh.webp" alt="Mesh Exemple" /> | <img src="/img/ex_col_table_polybox_base.webp" alt="Collision ped" /> | <img src="/img/ex_col_table_polybox_hi.webp" alt="Collision Hi" /> |

#### -> Utilisation Simplifier G&N's Studio
Collision Classic = Shell

Collision hi@ = Tour les détails BoundPolyBox/Cylinder/Mesh...

## YDR

Nous utiliserons le même nom que le MLO sans le préfix `int_` + suffix nécèssaire.

Liste des suffix de base (certain suffix peuvent être créer celon cas spécifique)

| Suffix      | Desciption                             | Flags Ytyp (achetypeDef)| Infos supplémentaires | Exemple |
| ----------- | -------------------------------------- | ----------------------- |---------------------- | ------- |
|details      | Mesh projettant des ombres             | `0`                     | | `gn_sandy_cardealer_details` `gn_sandy_cardealer_details2` |
|decals       | Decals/Mesh ne projettant pas d'ombres | `8192`                  | | `gn_sandy_cardealer_decals` |
|proxy        | Mesh ne projettant pas d'ombres        | `8192`                  | Nous ajouterons souvent les lights dans cette YDR (si pas trop long à l'export) | `gn_sandy_cardealer_proxy` |
|art / visual | Contenant les textures customisable    | `8192`                  | Tableau, logo, marque, textes 2D ... | `gn_sandy_cardealer_art` |

Exemples de cas spécifique :

| Suffix      | Desciption                             | Flags Ytyp (achetypeDef)| Infos supplémentaires | Exemple |
| ----------- | -------------------------------------- | ----------------------- |---------------------- | ------- |
|vents      | Mesh conduits d'aération            | `8192` ou `0` | Nous essaierons d'utiliser le flag `8192` pour ne pas projetter d'ombres. Elles ne sont pas forcément nécèssaire (a ajuster celon cas)  | `gn_sandy_cardealer_vents` |
|ceiling       | Mesh de plafond qui aurai beaucoup de détails | `8192` ou `0`                     | Nous essaierons d'utiliser le flag `8192` pour ne pas projetter d'ombres. Elles ne sont pas forcément nécèssaire (a ajuster celon cas)  | `gn_sandy_cardealer_ceiling` 
|elec       | Mesh electrique (interrupteurs, prises, gaines...)/Mesh ne projettant pas d'ombres | `8192` | Souvent utilisé pour séparer les YDT (voir section YTD)  | `gn_sandy_cardealer_elec` 