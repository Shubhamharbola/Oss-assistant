# Problem

Beginners want to make their first open source contribution but don’t know
where to start. They either choose issues that are too hard (and get stuck or lose motivation)
or spend hours scrolling through unfamiliar repos with no sense of what fits
their skill level.

# Target User

- Students and self-taught devs who want to start contributing to open source
but have zero or near-zero contribution history
- Junior developers trying to build a public GitHub profile for job applications
- Bootcamp grads who know how to code but don’t know how open source workflows
(PRs, issues, forking, git etiquette) actually work

# Current Problems

- “Good first issue” labels are inconsistent across repos—some are still too hard
- No way to match issues to a person’s *actual* skill level (languages they know,
and complexity they can handle)
- Beginners don’t know how to evaluate whether a repo/maintainer is welcoming to new
contributors before investing time
- Overwhelming choice—thousands of repos and no personalized starting point
- Fear of doing it “wrong” (bad PR, wrong branch, ignoring CONTRIBUTING.md) with
no one to guide them

# Existing Solutions

- goodfirstissue.dev / firsttimersonly.com — static lists, not personalized
- GitHub’s own “good first issue” search — noisy and not skill-matched
- up-for-grabs.net — same limitation, no personalization
- None of these use *your* GitHub profile to recommend issues suited to *you*

# My Solution

A tool that analyzes a user’s GitHub profile (languages used, repo activity,
stars, past PRs if any) and recommends open source issues matched to their
actual skill level—so their first contribution is challenging but achievable,
not a wall.

# Version 1 (5 features)

1. GitHub OAuth login — pull public profile data (languages, repos, activity)
2. Skill-level detection — a basic heuristic based on languages/frameworks used
and repo complexity
3. Issue feed — pull “good first issue” / “help wanted” labeled issues from the
GitHub API, filtered by the user’s detected languages
4. Difficulty tagging — a simple score (beginner / intermediate) based on issue
labels + repo activity, not just the “good first issue” tag alone
5. Save/bookmark issues — let users save issues they want to try, with a
direct link to the repo’s CONTRIBUTING.md if it exists