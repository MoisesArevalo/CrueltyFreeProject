# Proyecto para Web
El proyecto consiste en dar información de maltrato animal realizado en empresas. Por que mediante web scraping se obtiene información en paginas de peta. Y mediante el uso de una API para ALIEXPRESS, se le recomienda al usuario productos que no fueron probados en animales.
### Para https://crueltyfree.peta.org/
|Elemento | etiqueta | propiedad | Identificador|
|--|--|--|--|
| input search | input | name | s |
| Descripcion | div | class | testing-policy-text |
| Lista de resultados | ul | class | search-results |
| items | a | class | link |
| nombre item | a | title | <> |


**links**


Buscar por region https://crueltyfree.peta.org/region/?region=<region>
  
  
ejm: https://crueltyfree.peta.org/region/?region=ecuador

---
Buscar por compania o producto:


https://crueltyfree.peta.org/company/<clave>/
  
  
ejm: https://crueltyfree.peta.org/company/amorus-usa/

---
### Para https://www.petalatino.com/

|Elemento | etiqueta | propiedad | Identificador|
|--|--|--|--|
| input search | input | name | s |
| resultados | div | class | search-container |
| descripcion | div | class | description |
| valor descripcion | a | <> | <> |

**links**

https://www.petalatino.com/?s=<clave>

ejm: https://www.petalatino.com/?s=avon
