# Welcome to Halogen!

_This guide will walk you through the steps you need to take to start contributing to this repository!_

[![Your first open source contribution](https://i.imgur.com/ykzMaD1.jpg)](https://youtu.be/qbSXgUFnQ2g)

> This codebase is designed to be **approachable**. If you have a question, please ask! If you would like to try something out, open an issue and tell us about it! 

## First Contribution

### 1. First up, if you haven't already, make sure to `fork` this repository

  _This is the first step in the open source development workflow. A fork is basically your own personal **copy** of this repo_

### 2. Clone the repository down to your computer

  * _(more details on `fork` and `clone` are in the [README.md](README.md) file)_

### 3. Find an issue to work on
  
  You can find an [interactive design mockup here](https://xd.adobe.com/view/5d8116ab-aaca-433c-9b16-2f883df98c75-08d2/) that will help if you choose an issue with UI elements. This is an evolving document, so if something seems off, send us a message and we'll take a look!
  
<!--   TODO: Add in link for design system -->
  
  Navigate to the `issues` tab, and see if any of the current unassigned issues look like something you'd like to tackle. If one catches your eye, open it up and add a comment requesting that it gets assigned to you.
  * _If you're really feeling lost, but would like to get your feet wet just a little bit, go ahead and create an issue using the [Beginner help](https://github.com/developer-delta/halogen/issues/new?assignees=&labels=beginner-work-wanted&template=beginner-help.md&title=Entry-level+story+requested) template_.

### 4. Wait to be assigned the requested issue

  If you selected an issue that was not assigned to someone else and had no comments on it, you can probably safely move forward to the next steps, but if you want to be certain someone else isn't doing the same work, you should wait to be assigned, it won't take long!

### 5. Create a feature branch for the work you will be doing (If you need to go over forking, cloning, branching, etc, [GitHub has some great guides](https://docs.github.com/en/get-started/quickstart/contributing-to-projects))

  ```sh
  git checkout -b your-cool-branch-name
  ```

### 6. Make code changes

  ```js
  console.log("You're doing it!");
  ```
  
### 7. Add the files you made changes to

  ```sh
  git add changed-file1.html
  git add changed-file2.js
  git add changed-file3.css
  
  # you can also run: git add .
  # This will automatically add all the files you made changes too. 
  ```

### 8. Commit your code changes

  ```sh 
  git commit -m "finished my feature work"
  ```

### 9. Push your changes up to your feature branch

  ```sh
  git push --set-upstream origin your-cool-branch-name
  ```
  
  > _You only need `--set-upstream origin branch-name` the _first_ time you push to a new branch. Subsequent pushes to that branch can just use `git push`._

### 10. Submit a pull request

  Back in GitHub, navigate to your forked `halogen` repository, and you should see a new banner on the page that says `your-cool-branch-name had recent pushes`, and a button to create a PR. Go ahead and click it.

  ![Compare & pull request button](https://i.imgur.com/8xGhaWa.png)

### 11. Naming your PR

  Make sure to name your PR `closes developer-delta/halogen#[issue-number]`.

  ![Naming a pull request with issue number](https://i.imgur.com/cHnzA94.png)

  Then in the comment section, explain the work you completed.

### 12. 🎉 PR Party!🎉

  Now you can submit your pull request!

  ![PR Button](https://i.imgur.com/MyX4Z02.png)

  You should get an approval or feedback within a couple days, and then your PR will either get merged and you'll be all done, or changes will be requested via comments, and you'll make edits, then `add`, `commit`, and `push` your fixes.

<!-- Create a new directory for some gitflow stuff. Go over the Open source forking git flow, and go over the regular working TBD gitflow stuff -->


<!-- should this section live in that separate repository? Like a troubleshooting "If you see this message then go here to solve it?" -->
<!-- ## Rebasing and resolving conflicts 

_When contributing to open source, you are working across `forks` of the repository, which means that keeping **your** fork (copy) of the halogen code up to date is important and this guide will help you do that!_

Let's take a looks at an example to understand `rebasing` and `conflict` resolution. -->



