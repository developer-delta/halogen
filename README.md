![Halogen logo](https://user-images.githubusercontent.com/13723156/153255208-9484f866-82ef-4e2d-ba0c-e1d8e2ae941f.png)

---

## Running locally

#### 1. Fork this repository 

!["Fork" button on github](https://i.imgur.com/TVRPe9R.png)

#### 2. Clone

![git clone link in github](https://i.imgur.com/DpiDwwy.png)

```sh
  git clone https://github.com/developer-delta/halogen.git
```

#### 3. `cd` into the halogen directory

```sh
  cd halogen
```

## [VSCode](https://code.visualstudio.com/download) setup

> Here are the recommended configurations for your `launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Server",
      "runtimeExecutable": "${workspaceFolder}/node_modules/nodemon/bin/nodemon.js",
      "program": "${workspaceFolder}/server/index.js",
      "outputCapture": "std"
    },
    {
      "type": "pwa-chrome",
      "request": "launch",
      "name": "Client",
      "preLaunchTask": "npm: client",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceRoot}/client/src",
    }
  ],
  "compounds": [
    {
      "name": "Server and Client",
      "configurations": ["Server", "Client"]
    }
  ]
}
```

---

## Looking to contribute?

If you'd like to help build halogen, head over to the **[contributing guidelines](CONTRIBUTING.md)** page.

###### _This is a great place to start with open source!_ 🍻
