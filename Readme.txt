Git learninging

** Create A Local Git repository **
    git init
    git status
    git commit -m "first commit"
    git remote add origin origin git@github.com:servicestream/img-retrieval-ad-hoc.git
    git push -u origin master

**Creating First Branch**
    git branch issue1
    - create a branch in local repository
    git checkout issue1
    - checking out for making changes
    git commit -m "issue commit"
    - commit to local branch
    git push -u master issue1
    - create a remote branch and commit

**Merge Branch**
    git checkout master
    git merge issue1
    git commit -m "merge"
    git push

** Cleaning up branch **
    git remote origin --delete issue1
    - git branch -d issue1

