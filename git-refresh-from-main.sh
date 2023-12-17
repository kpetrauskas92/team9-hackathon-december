git remote add originalsource https://github.com/kpetrauskas92/team9-hackathon-december
git remote -v
git branch
git checkout main
git fetch originalsource
git reset --hard originalsource/main
# git push -f originalsource main