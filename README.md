# [babylonjs-first-app](https://babylonjs-first-app.web.app/)

<br />
<img src="https://github.com/sctlcd/babylonjs-first-app/blob/main/design/babylonjs-first-app-mockup-presentation.png" alt="babylonjs-first-app" width="900">
<br />

---

# Table of Contents <a name="tableOfContents"></a>

1. [Introduction](#introduction)

2. [Run the project locally](#runLocally)

3. [Deployment](#deployment)
	- [Deployment – Run locally](#deploymentRunLocallydeploymentRunLocally)
	- [Deployment – Live website](#deploymentLiveWebsite)

4. [Credits](#credits)
	- [Media](#media)
---

## Introduction <a name="introduction"></a>

Creating an animated 3D app with Babylon.js

Back to [top](#tableOfContents)

---

## Run the project locally <a name="#runLocally"></a>

Install [Vite](https://vitejs.dev/), a development server with live reload capability.

  - To install:
    
    ```
      npm create vite@latest
    ```

  - To run (from your local directory):
        
    ```
      npm run dev
    ```

Back to [top](#tableOfContents)

---

## Deployment <a name="#deployment"></a>
### Deployment – Run locally <a name="#deploymentRunLocally"></a>

1. Prerequisite:  
    - Make sure [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) are installed on your computer. You can download both at nodejs.org (NPM is included in your Node installation).
    - Please see `.nvmrc` file at the root of `babylonjs-first-app` repo.
    - Using nvm, a Node Version Manager is recommended as it helps you manage and switch between different Node versions with ease. It provides a command-line interface where you can install different versions with a single command, set a default, switch between them, etc.
2. In GitHub click on the repository nammed [babylonjs-first-app](https://github.com/sctlcd/babylonjs-first-app)
3. Clone the repository locally. Run

    ````
      git clone https://github.com/sctlcd/babylonjs-first-app.git
    ````

4. Install all modules listed as dependencies in package.json

    ```
      cd babylonjs-first-app
      npm i 
    ```

    note: in this app 
    - [three](https://www.npmjs.com/package/three) - **a JavaScript 3D library**, 
    - [vite](https://vitejs.dev/) - **a built in development server**,

5. Install [Vite](https://vitejs.dev/), a development server with live reload capability.

  - To install:
    
    ```
      npm create vite@latest
    ```

  - To run (from your local directory):
        
    ```
      npm run dev
    ```

Back to [top](#tableOfContents)

---

### Deployment - Live Website <a name="#deploymentLiveWebsite"></a>

[babylonjs-first-app](https://github.com/sctlcd/babylonjs-first-app) live website is currently deployed on [Firebase](https://firebase.google.com/) using the `main` branch on GitHub. Once you have the project setup locally, you can proceed to deploy it remotely.

1. Install Firebase CLI Tools, [firebase-tools](https://www.npmjs.com/package/firebase-tools)

    ```
      npm install -g firebase-tools
    ```

2. Create firebase.json and .firebaserc at the root of your project with the following content:

    `firebase.json`:

    ```
      {
        "hosting": {
          "public": "dist",
          "ignore": [],
          "rewrites": [
            {
              "source": "**",
              "destination": "/index.html"
            }
          ]
        }
      }
    ```

    `.firebaserc`:

    ```
      {
        "projects": {
          "default": "<YOUR_FIREBASE_ID>"
        }
      }
    ```

3. After running `npm run build`, deploy using the command `firebase deploy`. 


=> live link: https://babylonjs-first-app.web.app/

Back to [top](#tableOfContents)

---

## Credits <a name="credits"></a>

### Media <a name="media"></a>

- [favicon.ico](https://www.flaticon.com/free-icon/shapes_1151214?term=geometry&page=1&position=11&origin=search&related_id=1151214) - [Flaticon](https://www.flaticon.com/) | copyright [Smashicons](https://smashicons.com/)
- [pexels-ekaterina-belinskaya-4744789-min.jpg](https://www.pexels.com/photo/cracked-rusty-cave-wall-texture-4744789/) - [Pexels](https://www.pexels.com/) | copyright [Ekaterina Belinskaya](https://www.pexels.com/@ekaterinabelinskaya/)
- [pexels-isaac-bañuelos-3467946-min.jpg](https://www.pexels.com/photo/close-up-photo-of-gold-textile-3467946/) - [Pexels](https://www.pexels.com/) | copyright [Isaac Bañuelos](https://www.pexels.com/@iblos/)
- [pexels-alexander-ant-4585185-min.jpg](https://www.pexels.com/photo/colorful-mix-of-neon-paints-swirling-on-black-surface-4585185/) - [Pexels](https://www.pexels.com/) | copyright [Alexander Ant](https://www.pexels.com/@alexant/)

Back to [top](#tableOfContents)

---