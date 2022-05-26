##Async JS:
###Event loop:
![eventloop V8 view](https://geekflare.com/wp-content/uploads/2019/10/1_7GXoHZiIUhlKuKGT22gHmA-1.png)

###Promises:
a function that would return a failure or a success (resolve, reject) in future.

Syntax: `new Promise((resolve,reject)=>{})`

#####Resolve multiples promises at time:

**Promise.all** : Resolve only if all promises resolves
`Promise.all([p1,p2,pn3]).then((responses)=>{});`

**Promise.allSettled**: Resolve **or** reject for each prmise when all promises finish resolving.

``Promise.allSettled([p1,p2,p3]).then((responses)=>{});

###Async/Await:
Syntax: `async function any(){await promise}`

It hold the **function** where is called, once the promise is resolved, it continues, e.g:

```

const getData = async id => {
  const response = await fetch(`${someApiUrl}/${id}`);
  const data = await response.json();
  console.log(data.name);
};
```

Every return value in an async function is a promise.
