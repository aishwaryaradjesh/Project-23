# Commands for navigating within folders
* Present Working Directory - pwd
* Listing folders - ls
* Changing directory - cd [Directory Name]/
* Making a new Directory - mkdir [Directory Name]

# Commands for git hub
## Configuring git hub account
* git config --global user.name "Naga Akshay"
* git config --global user.email "akshay5620ssk@gmai.com"

## Downloading Github repository
* git clone https://github.com/whitehatjr/AngryBirdsStage2.5StudentActivity
* After modifying some code, try doing the following
 ** git status

## Commands to add modified code to staging area
* git add sketch.js
* git commit -m "Modified readme.md "

## Push files from staging area to the repository
* Create empty repository 
* Copy the link of the repository
* git remote add angryBird2.5 [github repository link]
* git push -u angryBird2.5
