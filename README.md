# Friend Finder App Project

##What is the Friend Finder app?
The Friend Finder is a compatibility based app. It will take the results from a user submitted survey, then compare their answers with those from other users. Then the app will display the name and picture of the user with the best overall match.

##The Friend Finder App Will...
 - Ask the user to input their name and picture, then take a survey.
 - Determine an overall score based on the users answers.
 - Compare the user's overall score to that of other 'friends' who's data is already stored.
 - Determine which current friend's score is closest to the user's score.
 - Display for the user in a modal the name and image of the friend who's score was the closest to theirs.
 
 ##How the App is Organized
 The app uses
   - Node.js
   - Express npm package
   - Bootstrap
   - jQuery
   
 Directory set-up:
  - app -> data ->friends.js - the current friends data
  - node_modules
  - public -> html pages
  - routing -> routing code for api, html
  - server.js
  
##How to Use the App
 - Home page is displayed. Click "Take the Survey" button.
   - ![User Selects Prompt](https://kknape.github.io/friend_finder/images/screenshot_home.png)
 - On the survey page, user enter their name,a url to an image and answers the survey questions.
    - ![User Selects Prompt](https://kknape.github.io/friend_finder/images/screenshot_survey1.png)
 - User completes the survey and submits their responses.
    - ![User Selects Prompt](https://kknape.github.io/friend_finder/images/screenshot_survey2.png)
 - User sees their best match!
    - ![User Selects Prompt](https://kknape.github.io/friend_finder/images/screenshot_yourFriendMatch.png)
