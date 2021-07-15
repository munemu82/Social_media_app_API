# Mernstack_social_media_app

## 1. Introduction
The app is a simple social media app that allows users to register, create profile, follow and unfollow other users as well as post information and like/dislike posted information.

## 2. Technologies
* MongoDB as backend database 
* Express as backend web application framework and middleware 
* React  JS as frontend and user interface framework
* Node Js as backend runtime environment 

## 3. REST API Endpoints
* Users
  * Register user: http://<hostname/IP>/api/auth/register  (Using POST http method)
  * Get a specific user: http://<hostname/IP>/api/auth/<userID> (Using GET http method)
  * Update user: http://<hostname/IP>/api/auth/<userId>  (Using PUT http method)
  * Delete user: http://<hostname/IP>/api/auth/<userId>  (Using DELETE http method)
  * Follow a user: http://<hostname/IP>/api/users/<userId/follow  (Using PUT http method)
  * Unfollow a user: http://<hostname/IP>/api/users/<userId/unfollow (Using PUT http method)                                                                                       
* Posts
  * Create a post: http://<hostname/IP>/api/posts (Using POST http method)
  * Update a post: http://<hostname/IP>/api/posts/<postId> (Using PUT http method)
  * Delete a post: http://<hostname/IP>/api/posts/<postId> (Using DELETE http method)
  * Like/dislike a post: http://<hostname/IP>/api/posts/<postId>/like (Using PUT http method) 
  * Get a specific post: http://<hostname/IP>/api/posts/<postId> (Using GET http method)
  * Get timeline posts (for the current user): http://<hostname/IP>/api/posts/timeline/all (Using GET http method)

 ## 4. Using the code 
 After cloning/downloading perform the following 
 * Setup
   * In the root folder, create a file called ".env" add MONGO_URL = YOUR MongoDB connection URI
 * Installation and run the code in your environment by running the following commands
   * yarn install  (to install all required packages/libraries, make sure you are on the app root folder)
   * yarn start (to run the code)
 
                                                                     
