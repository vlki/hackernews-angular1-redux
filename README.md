# Hacker News client written in Angular 1 and Redux

Experimental project trying to use Redux in Angular 1 app. HackerNews client
reader making use of the [HN Firebase API](https://github.com/HackerNews/API).

Notable features:
* Angular
* angular-ui-router
* Redux
* redux-thunk
* ES2015 via Babel (preset es2015)
* Webpack

Not using [ng-redux](https://github.com/angular-redux/ng-redux) at the moment
as I am trying to understand all the nuances of connecting Redux with Angular.

### Why?

Angular 1 provides a lot of tools for solving common problems of building web
application. But it does not help with a problem of keeping data and state.

Redux offers concept of keeping state at one place and having purely functional
reducers which can update the state according to the passed action.

I find Redux's concept useful, because it makes the transitions between states
clear (= [simpler](http://www.infoq.com/presentations/Simple-Made-Easy)),
allows having the presentation layer stateless, and offers a way to test
transitions between application states without the need of writing tests for
generated HTML (I wrote some Selenium tests before and, said nicely, its not
a memory I enjoy getting back to).

There are already some examples of using Redux and Angular 1 together, but
there is none using the combination of flavors I am using:
* [John Papa's Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
* folder structure by domain, rather than by their type

### How it looks right now

![Screenshot](https://raw.githubusercontent.com/vlki/hackernews-angular1-redux/master/screenshot.png)

## Run it yourself

```bash
git clone git@github.com:vlki/hackernews-angular1-redux.git

cd hackernews-angular1-redux
npm install
npm start

open http://localhost:8080/
```

## Want to add

- [ ] Add graceful error handling when the request does not go through
- [ ] Store the angular-ui-router's state in Redux (probably via [redux-ui-router](https://github.com/neilff/redux-ui-router)?)
- [ ] Add manual refresh button
- [ ] Add automatic refreshing by checking the `updates` HN Firebase API endpoint
- [ ] Add [reselect](https://github.com/reactjs/reselect) to memoize results of
  selectors for speed
- [ ] Try saving the application state to local storage so the state does not have to
  be reloaded on each browser reload

## License

MIT
