ng-marked
=======================

Markdown filter for Angular

1. `bower install tastycode/ng-marked`
2. Add `ngMarked` as a module dependency to your app.

# Using
## Filter

```html
<div class="container">{{ info | marked }}</div>
```

## Directive

```html
<marked>##Awesome</marked>
```

## Binding


```html
<div marked="somethingInScope"></div>
```

# Configuring

```javascript
  angular.module('myApp')
    .config(function(marked) {
      marked.setOptions(/*...*/);
    });
``

# What/Why?

I tried out Hypercube/angular-markdown and vpegado/angular-markdown-filter. I wanted to use marked, and liked Hypercube's way of allowing the markdown processor to be configured. I couldn't get it to work though, and ended up building it from scratch to figure out why. The directive now listens to changes in scope, and has the filter from vepgado. I also pointed the dependency on marked to my own repo where I have fixed the problem forcing people to manually include the markdown lib.
