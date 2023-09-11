# se-cohort-labs

# git-commands

> Before you start making changes to your local, get any changes from main branch to your local branch
```
git checkout your-branch
git status
```
> If there are any un-staged files, you need to stage and commit them and THEN
```
git pull origin your-branch
```
> To get any changes from main branch to your local branch
```
git checkout main
git pull origin main
git checkout your-branch
git rebase main
```

> Start making code changes on your local and once your are done, commit and push your new changes to your remote branch
```
git add .
git commit -m "add new message"
git push origin your-branch
```
