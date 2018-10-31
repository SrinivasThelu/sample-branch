Git learninging

**Create A Local Git repository**
 
 1. git init
 2. git status
 3. git commit -m "first commit"
 4. git remote add origin origin git@github.com:servicestream/img-retrieval-ad-hoc.git
 5. git push -u origin master
 

**Creating Branch**


1. git branch issue1
  * create a branch in local repository
2. git checkout issue1
  * checking out for making changes
3. git commit -m "issue commit"
  * commit to local branch
4. git push -u master issue
  * create a remote branch and commit

**Merge Branch**


1. git checkout master
2. git merge issue1
3. git commit -m "merge"
4. git push

**Cleaning up branch**f


1. git remote origin --delete issue1
 - git branch -d issue1

