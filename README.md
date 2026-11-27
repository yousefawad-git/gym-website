# GymApp - Phase 1 Demo

Simple gym website: Express backend (in-memory data) + plain HTML/CSS/JS frontend.

## Run
```
npm install
npm start      # http://localhost:3000
npm test       # run all tests
```

## Team and features
| Member | Feature | Files |
|---|---|---|
| 1 | Auth + project setup | routes/auth.js, public/login.* |
| 2 | Membership plans | routes/plans.js, public/plans.* |
| 3 | Class booking | routes/classes.js, public/classes.* |
| 4 | Trainers + BMI | routes/trainers.js, public/trainers.* |
| 5 | Landing, contact, admin | routes/contact.js, public/index.html, admin.*, style.css, nav.js |

## Workflow
- Never push to `main`. Create a branch `feature/<name>`, open a Pull Request, link the issue with `Closes #N`, get one review.
- GitHub Actions runs the tests on every push and PR.
