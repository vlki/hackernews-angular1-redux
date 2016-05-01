# Hacker News client written in Angular 1 and Redux

Experimental project trying to use Redux in Angular 1 app. HackerNews client
reader making use of the [HN Firebase API](https://github.com/HackerNews/API).

Notable features:
* Angular
* angular-ui-router
* Redux
* redux-thunk
* ES2015 via Babel (preset 'es2015')
* Webpack

Not using [ng-redux](https://github.com/angular-redux/ng-redux) at the moment
as I am trying to understand all the nuances of connecting Redux with Angular.

## How it looks right now

![Screenshot](https://raw.githubusercontent.com/vlki/hackernews-angular1-redux/master/screenshot.png)

## Run it yourself

```javascript
git clone git@github.com:vlki/hackernews-angular1-redux.git

cd hackernews-angular1-redux
npm install
npm start

open http://localhost:8080/
```

## Want to add

- [ ] Store the angular-ui-router's state in Redux (probably via [redux-ui-router](https://github.com/neilff/redux-ui-router)?)
- [ ] Add automatic refreshing based on the updates endpoint of HN Firebase API
- [ ] Add [reselect](https://github.com/reactjs/reselect) to memoize results of
  selectors for speed

## License

MIT
