# GitBox

A Git GUI for [JSBox](https://apps.apple.com/app/id1312014438), based on [isomorphic-git](https://isomorphic-git.org/)

# Instructions

- Clone the project
- Run `npm install`

> The base path is `/`, it will point to '/'.  
> 
> I changed it to `../../`, it will point to `Code` directory. This directory contains all your codes.
> 
> All your need is just `Initialize` a current project, or `clone` a new project from a remote repository.
> 
> If you have a project like `Test`, choose `Initialize repository` will create `.git` into `Test` directory. 
> 
> This step consume my time, so I write here to help next people.

# Security

In order to keep you safe, GitBox doesn't store your password and token. Instead, you have to input them every time if authorization is required.

In fact, GitBox doesn't store anything, information like user name and email are stored in `/.git/config`, it's standard git configuration.

Read the source code if you still don't feel safe.

# Known Issues

- Unable to use ssh protocol ([issue](https://github.com/isomorphic-git/isomorphic-git/issues/231))
- Unable to stage deleted files ([issue](https://github.com/isomorphic-git/isomorphic-git/issues/1042))
- Unable to handle merge conflicts manually ([refer](https://isomorphic-git.org/docs/en/merge))

# Credits

- [isomorphic-git](https://isomorphic-git.org/)
- [jsdiff](https://github.com/kpdecker/jsdiff)
