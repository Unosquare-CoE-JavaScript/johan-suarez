##Make it work (developing)

##NX:

Is a tool to manage complexity in monorepos, provide a CLI that helps to generate frameworks apps, libreries, backend apps, E2E tests and other things, works with all js/ts frameworks and all node top frameworks.

Also it provides tools to check what app is affected by a change in code.

One important feature that Nx would help is that we can use for instance a shared interface model between multiple apps or between backend and frontend.

[Nx official page](nx.dev)

##Facade pattern with ngrx

It helps to simplify components, masking internal interactions with the state in a facade, this allow the components to only do one task, render data.

This is how usually looks like a ngrx normal flow:

![normal flow ngrx](https://miro.medium.com/max/1346/1*fjwlk2CVF4Y0MS_sADwqmA.jpeg)

This is how looks like with a facade pattern:

![facade pattern ngrx](https://miro.medium.com/max/1354/1*-vkURnukSMKCErX2iktn1w.jpeg)

##json-server

Is a npm package that helps to deploy a local API REST, we create a model in a json file and **json-server** will serve create CRUD operations to this model.

Very usefull to mock APIS or endpoints that are not finish yet for example, once that endpoint is done, you just have change the url of the endpoint.

1.  `npm i json-server`

2.  Create a json model:

```
//bd-mock.json
{
"people": {
"id": 1,
"name": "Bob",
}
}
```

3. Start json-server:

`json-server --watch bd-mock.json`

4. Now if you go to `http:localhost:3000/people/1` we will get the data of that person.

#Make it right (Testing)

##Cypress

Is a js Framework to make E2E testing

[cypress](cypress.io)

It has cross browser support.
It has a very good documentation.
Cypress come with Nx for default.

`npm i cypress`

#Make it fast (Performance and deployment)

"Do not unnecessarily optimize until you have a good reason to do so"

Always remember to use the flag --production to build an angular app that is going to production.

##Webpack-bundle-analyzer

Is a tool that helps to analyze size of the bundle application, helps to determinate how to improve the app, gives graphs with the relationships between parts of the app.

`npm i webpack-bundle-analyzer`

##Vercel

Is a service that take your frontend code from a repository and make an automatic deploy.

Very easy to use.

[Vercel](vercel.com)
