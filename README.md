# React Cron Builder Translated to Portuguese
React component to build [cron](https://ru.wikipedia.org/wiki/Cron) expression

<<<<>>>> ALL THE CREDITS FOR ONE-MORE https://www.npmjs.com/~one-more / https://github.com/one-more <<<<>>>>
ATTENTION: This version is a translation only, not a copy.

## installation
```` bash
npm install --save cronproject
````
## CREDITS AND LIVE DEMO
[Live demo](https://one-more.github.io/react-cron-builder/)
<<<<>>>> ALL THE CREDITS FOR ONE-MORE https://www.npmjs.com/~one-more / https://github.com/one-more <<<<>>>>

## usage
```` ecmascript 6
import CronBuilder from  'cronproject'
import 'cronproject/dist/bundle.css'

<CronBuilder 
    cronExpression="*/4 2,12,22 * * 1-5"
    onChange={::console.log}
    showResult={false}
/>
````

component was inspired by [this util](https://abunchofutils.com/u/computing/cron-format-helper/) 