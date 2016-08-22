# GitHub Contributions Scraper

Scrapes the GitHub contributions graph SVG and outputs JSON.

***

Converts this...

![contributions graph image](https://cloud.githubusercontent.com/assets/1848368/17843037/724ca8b0-67f7-11e6-9b59-c7eae0024578.png)

...to this:

```javascript
[
  {
    "count": 1,
    "date": "2015-08-16"
  },
  {
    "count": 3,
    "date": "2015-08-17"
  },
  {
    "count": 2,
    "date": "2015-08-18"
  },
  {
    "count": 1,
    "date": "2015-08-19"
  },
  
  // ...

]
```



## Usage

```javascript
node index.js $USER output.json
```
