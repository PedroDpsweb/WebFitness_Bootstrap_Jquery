# WebNoticiasPedoSanchez
Web con noticias sobre salud,nutrición y deporte.

# Correcciones del profesor
# Diseños iniciales y finales

## Diseño Inicial

En primera instancia decidí hacer esta estructura para la web, pero una vez hecho me di cuenta que la publicidad de la web Desktop de esta manera no encajaba con lo que yo me había imaginado así que decidí cambiarla a su versión final.
También hubo retoques sobretodo en el slider y en la versión móvil cambió la disposición de las imágenes y noticias.
![enter image description here](https://cdn.rawgit.com/PedroDpsweb/WebNoticiasPedoSanchez/f9f1e8e9/img/Esquemawebnoticias_Noversionfinal.jpg)
## Diseño final
Al final de los ajustes decidí que el slider quería ahcerlo de toda la pantalla inicial para Desktop e hizo varios cambios ajustando las noticias.
En la parte móvil se ha ajustado el esquema a como boostrap dispone las celdas que ha sido mejor que el anterior diseño que había planteado.
![enter image description here](https://cdn.rawgit.com/PedroDpsweb/WebNoticiasPedoSanchez/f9f1e8e9/img/Esquemawebnoticias_Versionfinal.png)
# Estructura y funcionalidad de la Web
- La Web parte de un navbar en el cual puedes ir a cualquier noticia desde allí.
- Hay algunas partes que están con un href="#" ya que están de decoración.
- Hay un botón de color verde en la parte derecha que cambia el modo de cargar imágenes, por defecto se encuentra en cargar con scroll (verde), haciendo click lo cambiamos a carga mediante botón (rojo).
- El Slider sta hecho con Boostrap, se le ha retirado la parada cuando el puntero esta sobre él.
- Las 3 primeras noticias son estáticas y coresponden a las 3 noticias que se han creado.
- Hacer scroll en la parte baja del final de la web activa la carga de imagenes mediante un getJson: tiene 2 cargas, una por cada Json
- Una vez cargado todo aparece indicado que no hay más noticias donde estaba le botón en la parte inferior.
- La publicidad es un iframe con un slider. Cada foto envía a una web diferente, pertenecientes a los trabajos de los compañeros.
- En el footer aparece una referencia al creador de la web.
