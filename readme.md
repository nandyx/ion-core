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
|    ├── helpers/
|    ├── security/
|    |       feature.guard.ts
|    |       feature.interceptor.ts
|    |       ...
|    └── components/
├── theme
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
|    └── facedes/
|
├── test
|
└── analytics

   
```

## Architecture

![](https://i.imgur.com/WNhxnvv.jpg)

## State management

![](https://i.imgur.com/GbIFBh8.jpg)
