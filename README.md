This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Step to run (ios)
1. install npm
```sh
npm install
```
2. linking assets (custom fonts)
```sh
npx react-native-asset
```
3. update pods
```sh
cd ios && pod install && cd ..
```
4. start metro dev server
```sh
npm start --reset-cache
```
5. run project (ios)
```sh
npx react-native run-ios
```
or you can start project from xcode
```sh
# open xcode
# open existing project then select file from project/ios/xcworkspace
# product (menu) then build or press Cmd + B 
```
## Application Details
1. react version (18.3.1) and react-native version (0.77.0) latest
2. APIs HTTP request using Axios
3. state management using react-redux
4. icon using react-native-vector-icon & ionicons
5. custom font using Jost
6. component UI pure from react-native components
7. pull down to refresh data
8. sample screenshoot source project/sources/Assets
