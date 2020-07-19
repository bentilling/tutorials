# Cypress

### Yields

| Command        | Yields       |
| ------------- |:-------------:|
| get()      | array of matching DOM elements |
| contains()      | first DOM element containg content |
| click()      | same DOM elements from previous command |

### Timeouts

If Cypress cannot find an element it will continue to look for it until it times out 9th default is 4 seconds).
In some scenarios we may need to wait longer, say if we know the api call takes longer.
We can customise at the command level adding say
```javascript
cy.get('.my-selector', { timeout: 10000 })
```
or globally by modifying `defaultCommandTimeout` in cypress.json.
Due to the nature of this it is *not* possible to directly assign the resilt of a `get` or similar call to a variable. Instead chain a `then` callback.

### Test Execution

Cypress commands are queued and only run once the test has finished executing.
As a result mixing in synchronous commands is likely to have unexpected results as they will be run before the cypress code.
If you need to run sync code it is best do put this inside a chained `then`.
