
Project Setup

Setting up a React Native project involves several steps to ensure you have everything you need to start building mobile applications. Here’s a basic guide to get you started:

Project Structure:
1.App.js : The entry point of your application where you can start building your UI and logic.
2.node_modules: Where all the dependencies are installed.
3.package.json: Contains project metadata and dependencies.
4.android and ios folders (in React Native CLI setup): Contain native code and build files for Android and iOS respectively.

Additional Setup:
For android - `npm install`
For ios -
1. `cd ios`
2. `pod install`

Running Your Project:
For android - `npx react-native run-android`
For ios - `npx react-native run-ios`

you can run your app on an emulator/simulator

Resources:
React Native Documentation - https://reactnative.dev/docs/set-up-your-environment
Community forums and tutorials (e.g., Stack Overflow, Medium articles) can provide additional guidance for specific tasks or issues.


Project Details 

The movie listing screen serves as the primary interface for users to browse available films. It incorporates essential features such as filtering options, search functionality, and the actual listing of movies. Here’s a breakdown of each component:

Filter: Users can apply filters to refine their search based on criteria such as genre like Comedy, Horror, Action & Adventure, etc. Filters help users narrow down choices and find movies that match their preferences.

Search: The search bar allows users to look for specific movies by title based on the filter applied. It provides quick access to desired content without extensive browsing.

Listing: This section displays the movies available in the public API (RapidApi). Each movie typically includes key details like title, poster, release date, and summary.

Rapid Api - https://rapidapi.com

The combination of these elements creates a user-friendly experience where individuals can easily discover, explore, and select movies based on their interests and preferences.

Here, a FlatList is used to list the movies, and a ScrollView is used to list the filters.

For icons `react-native-vector-icons` is used. https://www.npmjs.com/package/react-native-vector-icons

Redux state management is used to store the details of the selected movie and display them on the movie details screen.



https://github.com/ReshmaResh1242/MachineTest/assets/94843114/9f4f018c-105e-4357-a6f3-9e94e4f1da31



https://github.com/ReshmaResh1242/MachineTest/assets/94843114/6e968ee9-c391-45d1-9528-5f2b0385cb05



https://github.com/ReshmaResh1242/MachineTest/assets/94843114/6951300f-f652-4700-a893-04575c1d83ce




https://github.com/ReshmaResh1242/MachineTest/assets/94843114/b3739824-c8a3-49d2-a49f-c0816ccb3f47




