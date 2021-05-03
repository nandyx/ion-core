<h1 align="center">
<img width="40" valign="bottom" src="https://ionicframework.com/img/meta/logo.png">
ionic Architecture guide
</h1>
<h5 align="center">A cohesive guide for building ionic apps for teams.</h5>

## Folder Structure

```
├── app
|    └── pages/
|    |        ├──feature/
|    |        |       ├──screens/
|    |        |       └──components/
|    |        └──...
|    ├── utils/
|    ├── security/
|    |       feature.guard.ts
|    |       feature.interceptor.ts
|    |       ...
|    └── components/
├── theme/
|
├── helpers
|
├── environments
|        environment.prod.ts
|        environment.staging.ts
|        environment.ts
|
├── core
|    ├── contracts/
|    ├── enums/
|    └── models/
|
├── repositories
|        repository.ts
|
├── providers
|
├── store
|    ├── actions/
|    ├── effects/
|    ├── selectors/
|    ├── reducers/
|    └── facades/
|
├── test
|
└── analytics

   
```

## Architecture

![](https://i.imgur.com/cxugZXU.png)


## State management

![](https://i.imgur.com/GbIFBh8.jpg)

## Next steps


1. [Splash screen & App Icon Config](https://github.com/nandyx/ion-core/wiki/Splash-screen-&-App-Icon-Config)
2. [Using Push Notifications with Firebase](https://capacitorjs.com/docs/guides/push-notifications-firebase)
3. [How use Firebase Analytics](https://devdactic.com/firebase-analytics-ionic/)
4. [Github action workflow:UAT Android](https://github.com/nandyx/ion-core/wiki/Github-action-Workflow:-UAT-Android)
