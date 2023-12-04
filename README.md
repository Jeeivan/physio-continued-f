# SEI Unit 4 Project ReadMe

## Project Description

My aim for the final project was to build a full-stack website using a Django backend with PostgreSQL and a React frontend that caters to users in need of physiotherapy. As a former senior physiotherapist, I have firsthand experience with the challenges faced by the NHS, including its extensive waiting lists. Therefore, my plan for this website is to provide a platform where users can not only access general information about managing their symptoms but also submit a brief physiotherapy form. This form will allow me to address the specific needs of each patient, enabling them to initiate their treatment while awaiting a face-to-face appointment.

## Deployment Link

(https://physio-frontend-production.up.railway.app/)

## I was given just over a week to work on this project and I worked independently to do this with the help of our instructors if I was facing any difficulties.

## Technologies Used

CSS, HTML, Vanilla JavaScript ES6, Django, Django Rest Framework, PostgreSQL,  React, Python

## Brief

Project Aim:
Build a full-stack Django/React web app.
Utilise Django as the backend and React as the frontend.
Demonstrate proficiency in designing databases, problem-solving, and seamless data transfer between technologies.

Technical Requirements:
Build a full-stack Django/React application.
Connect to and perform data operations on a PostgreSQL database.
Implement full-CRUD data operations across models, excluding the User model.
Authenticate users using Django's built-in authentication.
Implement authorization for data resource operations.
Deploy the app online using Railway.

## Planning

Page Descriptions:

Home Page:
Personalised narratives about the creator's experiences.
Addressing the issues of NHS waiting times, emphasising the need for concise information.
Encouragement for users to consult a GP for in-depth concerns.
Disclaimer section to set expectations.

FAQ Page:
Common questions with collapsible answers for a clean user experience.
Questions covering exercise in pain, diagnosis requirements, posture, etc.

Exercise Page:
General information on exercises for back pain.
Video links embedded for visual guidance.

Management Page:
Information on how to manage various physio conditions.

Physio Form Page:
Subjective Form with CRUD functionality.
Questions include body part selection, history, trauma, pain details, scans, aggravating factors, previous treatments, medications, work impact, goals, etc.

My Question/Responses Page:
Display submitted physio forms in a readable layout.
Indicate "Awaiting response" or display responses.
Super users can view all questions; normal users see only their questions.

Technical Features:
User Authentication:
Implement a login/sign-up page.
Set limits on query submissions per user.
Admin login for site management.

Access Control:
Restrict page access to logged-in users.
Super users have access to all pages and questions.

Additional Considerations:

Home Page Content:
Discuss personal experiences.
Address NHS waiting time issues.
Emphasise the site's purpose of providing concise information.

User Interaction:
Utilise collapsible sections for FAQs.
Embed video links for exercises.

Form Functionality:
Enable CRUD functionality for submitted forms.
Limit query submissions to prevent misuse.

User Management:
Distinguish between regular and super users.
Admin access for site administration.

Database Structure:
My database employs a one-to-many relationship from users to physio forms, reflecting the scenario where a user can possess multiple physio forms. Conversely, each physio form is linked to a single user, establishing a many-to-one relationship. Additionally, a one-to-one relationship exists between the physio form and the treatment entity. This design ensures that each physio form is associated with a singular treatment, offering a streamlined and efficient relationship model.

[Screenshot for database goes here]

## Challenges

- It was fairly straightforward to add the delete method in as I had got the back end working from before so I just needed to implement the fetch in the front end
- However the problem I was facing after was that although the physioform data was deleting I was getting a blocker when there were no forms left for that user as the page was still trying to render the physioform data
[Insert Screenshot of code here]
- After some debugging the reason for this error was that the physioform data was displaying in the console as undefined rather than being an empty array
- I was able to solve this by using the line if (data.length > 0) and by adding this it meant if there was no more physioform data for that user it would no longer set any data into the physioform leaving it as an empty array rather than becoming undefined
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



