![screencapture of halogen design](https://i.imgur.com/wOqaeSV.png)

---

## Running locally

#### 1. Fork this repository 
!["Fork" button on github](https://i.imgur.com/TVRPe9R.png)

#### 2. Copy repo URL for cloning
![git clone link in github](https://i.imgur.com/DpiDwwy.png)

#### 3. Clone
```shell
  git clone https://github.com/developer-delta/halogen.git
```

#### 4. `cd` into the halogen directory
```shell
  cd halogen
```

#### 5. Open `html` file
```shell
  open index.html
```

## For Visual Studio Code users 
Here is the `launch.json` configuration for running the server and the client simultaneously
```
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
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