# SEI Unit 4 Project ReadMe

## Project Description

My aim for the final project was to build a full-stack website using a Django backend with PostgreSQL and a React frontend that caters to users in need of physiotherapy. As a former senior physiotherapist, I have firsthand experience with the challenges faced by the NHS, including its extensive waiting lists. Therefore, my plan for this website is to provide a platform where users can not only access general information about managing their symptoms but also submit a brief physiotherapy form. This form will allow me to address the specific needs of each patient, enabling them to initiate their treatment while awaiting a face-to-face appointment.

## Table of Contents

- [Deployment Link](#deployment-link)
- [Technologies](#technologies-used)
- [Brief](#brief)
- [Installation](#installation)
- [Timeframe & Working Team](#timeframe--working-team)
- [Technologies Used](#technologies-used)
- [Brief](#brief)
- [Planning](#planning)
- [Build Process](#build-process)
- [Challenges](#challenges)
- [Wins](#wins)
- [Key Learnings/Takeaways](#key-learningstakeaways)
- [Future Improvements](#future-improvements)

## Deployment Link

(https://physio-frontend-production.up.railway.app/)

## I was given just over a week to work on this project and I worked independently to do this with the help of our instructors if I was facing any difficulties.

## Technologies Used

CSS, HTML, Vanilla JavaScript ES6, Django, Django Rest Framework, PostgreSQL,  React, Python

## Brief

**Project Aim:**
Build a full-stack Django/React web app.
Utilise Django as the backend and React as the frontend.
Demonstrate proficiency in designing databases, problem-solving, and seamless data transfer between technologies.

**Technical Requirements:**
Build a full-stack Django/React application.
Connect to and perform data operations on a PostgreSQL database.
Implement full-CRUD data operations across models, excluding the User model.
Authenticate users using Django's built-in authentication.
Implement authorization for data resource operations.
Deploy the app online using Railway.

## Planning

**Page Descriptions:**

**Home Page:**
Personalised narratives about the creator's experiences.
Addressing the issues of NHS waiting times, emphasising the need for concise information.
Encouragement for users to consult a GP for in-depth concerns.
Disclaimer section to set expectations.

**FAQ Page:**
Common questions with collapsible answers for a clean user experience.
Questions covering exercise in pain, diagnosis requirements, posture, etc.

**Exercise Page:**
General information on exercises for back pain.
Video links embedded for visual guidance.

**Management Page:**
Information on how to manage various physio conditions.

**Physio Form Page:**
Subjective Form with CRUD functionality.
Questions include body part selection, history, trauma, pain details, scans, aggravating factors, previous treatments, medications, work impact, goals, etc.

**My Question/Responses Page:**
Display submitted physio forms in a readable layout.
Indicate "Awaiting response" or display responses.
Super users can view all questions; normal users see only their questions.

**Technical Features:**
User Authentication:
Implement a login/sign-up page.
Set limits on query submissions per user.
Admin login for site management.

**Access Control:**
Restrict page access to logged-in users.
Super users have access to all pages and questions.

**Additional Considerations:**

**Home Page Content:**
Discuss personal experiences.
Address NHS waiting time issues.
Emphasise the site's purpose of providing concise information.

**User Interaction:**
Utilise collapsible sections for FAQs.
Embed video links for exercises.

**Form Functionality:**
Enable CRUD functionality for submitted forms.
Limit query submissions to prevent misuse.

**User Management:**
Distinguish between regular and super users.
Admin access for site administration.

**Database Structure:**
My database employs a one-to-many relationship from users to physio forms, reflecting the scenario where a user can possess multiple physio forms. Conversely, each physio form is linked to a single user, establishing a many-to-one relationship. Additionally, a one-to-one relationship exists between the physio form and the treatment entity. This design ensures that each physio form is associated with a singular treatment, offering a streamlined and efficient relationship model.

[Screenshot for database goes here]

## Build Process

**Day 1**

- Today I was able to setup the django back end along with the django rest framework
- I was also able to connect this with the front end and was successfully able to fetch data from the back end and display this into the back end as shown below
[Insert Screenshot]

- I am also pleased I was able to embed youtube videos showing specific exercises onto my exercise page which I am pleased with as this way it is able to keep the users on my site rather them leaving the page to go see the youtube video and they have access to all their exercise videos in one page
[Insert Screenshot]

- Initially I was having some trouble with setting up the CRUD functionality in my back end and particularly with the routes
- I was able to fix this by changing the routes and got rid of any extra slashes I used in the end points as this was what was causing errors and after testing these in postman I was successfully able to create, read, update and delete both responses and the physio form data too

**Day 2**

- I created a new page focussed on management advice- this was fairly straightforward as it is just a static page with information
- I also created separate components for my exercise videos to keep the code more readable as shown below
[Insert Screenshot]

- To make the page more dynamic I added buttons for each body part and that way whichever body part is clicked on by the user it will only display the videos from that component
[Insert Screenshot]

**Day 3**

- Now that I had the create user working I then needed a way to be able to get the id of the user to be able to use this id to fetch other pieces of data in my response page
- I was struggling with this at first as I was having trouble figuring out how to do this but after doing some further research I realised i could use the jwt-decode import that could grab the id as shown below
- I then encountered the problem where even though I had the code I needed a way to be able to pass this code to other pages of my website
- At first I attempted to do this using the params but this proved to be quite inefficient and much better approach I worked out was using the localstorage and setting the id in there to be able to access it from any page as also shown below
- Having this ID allowed me to be able to do more fetches for specific pieces of data within the physioform and treatment as shown

[Insert Screenshots]

**Day 4**

- I was able to get my full CRUD working and added edit and delete functions to the physioform information
- With the edit method I was having some trouble with loading the pre-existing data
- I was able to solve this issue by passing the data for that specific physioform data and passing it to the update page
[Insert Screenshot]

- Another of my blockers I was facing was that on the response page for the super user it is intended to show the physioform data for all users however whenever first loading onto the page after logging in it would only show one piece of data
- After a lot of debugging I was unable to fix this issue where I originally was using useState to set if the user was a super user 
- Instead I found an alternative way of using localstorage and setting this information to a variable which resolved my issue, which I was pleased with
[Insert Screenshot]

**Day 5**

- A  blocker I worked on this day was where once the super user completes a treatment for a form data the form data remains in the response page for the super user
- After some thought I made the decision to add an attribute to the form data with if the treatment is completed that is set to false by default initially 
- This way once the treatment method is posted it would update the treatment_completed attribute to true 
- I then made sure in the response page to only filter through data forms that only have treatment completed as false

[Insert Screenshot]

**Day 6**

- I updated my sign up and sign in pages to make them more user friendly as I was having an issue where if someone’s sign in failed there would be no message meaning the user would not know why the login/sign up failed
- I also spent a lot of time today updating the styling of my page, including a focus of adding media queries to make the website mobile friendly too

**Day 7**

- For the final half day of the project I was spending the majority of my time testing the deployed version of my website to make sure there were no bugs
- I spent some time adjusting the styling to make sure the website was as user friendly as possible
- I made a small adjustment in my PhysioForm entity to add an input for the age of the user so this would be clear for the super user giving the user treatment as the age can also affect the treatment advice too

## Challenges

Adding the delete method was relatively straightforward, as I had already set up the back end. I just needed to implement the fetch in the front end. Despite successfully deleting physioform data, a challenge arose when there were no forms left for that user. The page still attempted to render the physioform data, causing a blocker.
[Insert Screenshot of code here]
After some debugging, I identified that the error occurred because the physioform data was appearing as undefined in the console instead of being represented as an empty array. To address this issue, I implemented the solution by using the line 'if (data.length > 0)'. By incorporating this condition, it ensured that if there was no more physioform data for that user, the physioform would no longer be set with any data, leaving it as an empty array rather than becoming undefined.
[Insert Screenshot of code here]

## Wins

- At first I was struggling to be able to differentiate the data for those who were not super users but after doing some digging into my database I came upon the is_staff attribute that contained a boolean that stated if the user was an admin or not
- By adding the is_staff to my fields as shown below I was able to access this data through and this allowed me to distinguish if the user was a super user or not
[Insert Screenshot of code here]
- I am pleased with my code below to render the data differently depending on if the user was a super user or not
[Insert Screenshot of code here]


## Key Learnings/Takeaways

- With this being the final project of the course I had become much more confident with stand ups and in my ability to communicate what part of the project I was working on and any blockers I had along with the plan I had for that day
- I am much more confident using Django along with postgreSQL
- With this being the second project using react I also have much more confidence using this for my front end
- With several issues deploying previous projects I most definitely found this project the most straightforward to deploy and was pleased to be able deploy with very few problems

## Future Improvements

- If I had more time I would create another entity for user profile that would include their age so the user would not have to implement this every time they made a query
- I would also include a time for their last query in this entity as currently if the user deletes their query they can make another one therefore bypassing the one month time limit I set
- I would also spend more time to create a comment section at the bottom of the management page so that users have a way of interacting with each other and can even share their personal experiences



