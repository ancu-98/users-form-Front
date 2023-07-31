
USER_FORM-FRONT

Ruta principal: https://ancu98-users-crud.fly.dev/api/v1/users


**  -------- LOGIN  (Authentication Router) ---------- **

Ruta: https://ancu98-users-crud.fly.dev/api/v1/users/login

** ----- USERS (Users Router) ----------- **

--------- RUTAS SIN PROTEGER -------------

https://ancu98-users-crud.fly.dev/api/v1/users/

Peticiones:
	- Get all Users
	- Post Users

https://ancu98-users-crud.fly.dev/api/v1/users/:id

Peticiones:
	- Get user By Id

------- RUTAS PROTEGIDAS ----------

- Se necesita token de autenticación generado al inicar sesión.

Ruta: https://ancu98-users-crud.fly.dev/api/v1/users/me

Peticiones:
	- Get my User
	- Update(pacth) my User
	- Delete my User

- Solo un usuario con rol de administrador puede ejecutarlas

Ruta: https://ancu98-users-crud.fly.dev/api/v1/users/:id

Peticiones:
	- patchUser
	- DeleteUser