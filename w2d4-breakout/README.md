```jsx

request("path", (err, data) => {
  if(err){
    return console.log("Not found")
  }

  if(!data){
    return console.log("No data")
  }

  console.log(data)
})



try{
  setTimeout(() => {

  },1000)
}

const requestPromise = (path) => {
  return new Promise((resolve, reject) => {
    request(path, (err, data) => {
      if(err){
        return reject(err)
      }
      return resolve(data)
    })
  })

}


requestPromise("path")
  .then(data => ...)
  .catch(err => ...)
```
