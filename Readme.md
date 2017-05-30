# Contacts-app

- Client - Angular 4 Web app
- Server - C# .NET Core Web API (Visual Studio 2017)
- Cordova - Hybrid app (Android)

## Pre-requisites
##### Client
```
Angular CLI: Installed (npm install -g @angular/cli)
Node.js: Installed (https://nodejs.org)

npm install
```
##### Cordova
```
Cordova CLI: Installed (npm instal -g cordova)
Web app build (ng build --base-href . --output-path=../cordova/www )
Execute build-android.bat
```
##### Server
```
Visual Studio 2017: Installed
Open Solution and Run server
--> http://localhost:49478/api
```
## Run

### Client on Development server
```
ng serve
--> http://localhost:4200/

Web API
ng serve --environment=api

Local Storage 
ng serve
```
The app will automatically reload if you change any of the source files.

### Cordova Hybrid app
```
client build
ng build --output-path=../cordova/www 

Run on Android device
cordova run android
```

## Build

```
ng build
--> client/dist/

ng build --output-path=../cordova/www --base-href .
--> cordova/www/
```

## Tests

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

