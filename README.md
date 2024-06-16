The movie listing screen serves as the primary interface for users to browse available films. It incorporates essential features such as filtering options, search functionality, and the actual listing of movies. Here’s a breakdown of each component:

Filter: Users can apply filters to refine their search based on criteria such as genre like Comedy, Horror, Action & Adventure, etc. Filters help users narrow down choices and find movies that match their preferences.

Search: The search bar allows users to look for specific movies by title based on the filter applied. It provides quick access to desired content without extensive browsing.

Listing: This section displays the movies available in the public API (RapidApi). Each movie typically includes key details like title, poster, release date, and summary.

Rapid Api - https://rapidapi.com

The combination of these elements creates a user-friendly experience where individuals can easily discover, explore, and select movies based on their interests and preferences.

Here, a FlatList is used to list the movies, and a ScrollView is used to display the filters.

For icons "react-native-vector-icons" is used. https://www.npmjs.com/package/react-native-vector-icons

Redux state management is used to store the details of the selected movie and display them on the movie details screen.
