## Instructions

Clone this template to your folder then run
git remote set origin <your-rep-name>
git push origin master

## Start cmd

For Development: npm run start:dev

For Staging: npm run start:staging

For Production: npm run build:prod && npm run start

## Project Standard

1.File Type other than component file should be mentioned in file name like add-to-cart.constant.ts"

2.All string literals should be written in separate file-name.constant.ts file and respective variables should be used in components.

3.Use "prop-types" for datatypes while declaring Props

4.Use Context Api to manage User data with localStorage, so that it can be available on demand from any component

5.Create Apis folder and Sub-folders with entity names to call apis

6.Use Loader like spinner for waiting intervals

7.Keep variables in State only when there is need to re-render component on change on respective variable value, if change in value doesn't make difference in with re-render then that variable can be declared outside the constructor

8.Urls should be small case with "-" separated for multi-word url

9.Surround code with try-catch that are dependent over third-parties like api calls and file inputs

10.DON'T USE JQUERY

11.DON'T USE any datatype

12.Follow theme approve while using css

13.Use Snackbar for general immediate notifications like api response

14.Don't install plugins that have less downloads

15.Don't use plugins for small code or that can be written on your own

16.React Bootstrap recommended if required

17.Ts-lint plugin for vs-code | SublimeLinter and SublimeLinter-tslint for sublime text prefered# React-Typescript-boilerplate
