Chanhe the user type and see the effect.
3 types of users are defined. public, normal and admin users.

Private-routes version 1:

You can change the user from app/constants.js file.
3 types of users are defined. public, normal and admin users, so 3 types of valdiation components are defined.
You have to specify corresponding validation component manually in front of each route.

Private-routes version 2:
All components are moved to app/components.
Defining routes in arrray and showing dynamically with map.
Only defining 1 valdiation function, it will check all types of users.

New components along with path and permissions should be declared inside app/constants/links.
You can define separate links for navbar/sidebar etc.
