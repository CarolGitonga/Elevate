var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"store","component":"StoreComponent","canActivate":["StoreFirstGuard"]},{"path":"cart","component":"CartDetailComponent","canActivate":["StoreFirstGuard"]},{"path":"checkout","component":"CheckoutComponent","canActivate":["StoreFirstGuard"]},{"path":"admin","loadChildren":"./admin/admin.module#AdminModule","canActivate":["StoreFirstGuard"],"children":[{"kind":"module","children":[],"module":"AdminModule"}]},{"path":"**","redirectTo":"/store"}],"kind":"module"}]}
