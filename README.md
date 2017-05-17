# js-simple-cookie
Helper functions for getting, setting, and deleting cookies.

***Set new cookie***

Name and value are required.  
Expiration can be a Date object, timestamp, or date string.

`simplecookie.set(name, value[, expiration[, path[, domain[, secure]]]])`

***Get a cookie value***

`simplecookie.get(name)`

***Unset a cookie***

`simplecookie.unset(name)`



***Test it out in your browser:***

```
 <script>
    simplecookie.set('a', 'b');

    console.log(document.cookie); // "a=b"

    console.log(simplecookie.get('a')); // "b"

    simplecookie.unset('a');

    console.log(document.cookie); // ""
</script>
```
