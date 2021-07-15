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
  * Register user: http://<hostname/IP>/api/auth/register
  * Get a specific user: http://<hostname/IP>/api/auth/<userID> (Using GET http method)
  * Update user: http://<hostname/IP>/api/auth/<userId>  (Using PUT http method)
  * Delete user: http://<hostname/IP>/api/auth/<userId>  (Using DELETE http method)
  * Follow a user: http://<hostname/IP>/api/users/<userId/follow  (Using PUT http method)
  * Unfollow a user: http://<hostname/IP>/api/users/<userId/unfollow (Using PUT http method)                                                                                       
* Posts
                                                                     
