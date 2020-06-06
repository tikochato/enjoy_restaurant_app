# Enjoy Restaurants App

### IOS
npm install -g ios-sim
ionic cordova platform add ios

ionic cordova prepare ios

open -a Simulator
ionic cordova run ios -l --external


### Android

#### Java version
```
brew tap homebrew/cask-versions

brew search java 
brew search jdk

brew cask info java
brew cask info adoptopenjdk

brew cask install java
```

#### Launch emulator
```
emulator -list-avds
emulator -avd Pixel_2_API_R
```

#### Install App
```
ionic cordova platform add android

ionic cordova prepare android
ionic cordova run android -l [--verbose]

adb logcat
```

<div?Icons made by <a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

### Pending Task
- [x] Remove Veg.
- [x] Currency Translate ($/Q)
- [x] Add Delivery Charge to each restaurant
- [ ] Add Custom resturant with custom menu
- [ ] Delete food
- [ ] Order Status
  - [x] Add Ready Tab
  - [ ] When order ready, notify all drivers
- [ ] Locale 
  - [ ] Date
  - [x] Order status 
  - [ ] Phone numbers
  - [x] PDF
