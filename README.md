# Quasar App (wheely)

A Quasar Framework app

## Install the dependencies

```bash
npm install
```

## make sure you have the correct node version

Use the version from `.nvmrc`

## Install Quasar CLI globaly

```bash
npm install -g @quasar/cli
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
npm run lint
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

### Preparation for Capacitor App

Follow the [instructions](https://quasar.dev/quasar-cli/developing-capacitor-apps/preparation) to prepare all the needed IDE's and environments

### For IOS we need some more tooling

follow this [instructions](https://guides.cocoapods.org/using/getting-started)html#installation

### Installations

1. install android studio:
To install Android Studio on your Mac, proceed as follows:
1.1 Launch the Android Studio DMG file.
1.2 Drag and drop Android Studio into the Applications folder, then launch Android Studio.
1.3 Select whether you want to import previous Android Studio settings, then click OK.
1.4 The Android Studio Setup Wizard guides you through the rest of the setup, which includes downloading Android SDK components        that are required for development.

2. install Xcode

3. run the commands:
    3.1 for ios:
        quasar dev -m capacitor -T ios
    3.2 for android:
        quasar dev -m capacitor -T android
