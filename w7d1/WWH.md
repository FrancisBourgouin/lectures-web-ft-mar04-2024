# What was hard?

# Why React ?

- Nice and interactive (reactive) interfaces for the web

```js
const createHeader = (title) => {
  const $header = $("<header>");
  const $h1 = $("<h1>");

  $h1.text = title;

  $header.append($h1);

  return $header;
};
```

- Problem with jQuery, data is not centralized and we work by modifying elements

```html

<button class="active">Activate me!</button>

$("button").hasClass("active")


<script>
  let points = []

</script>
  
```


- Original React there was no JSX

```js

ReactDOM.createElement("h1", {text:"..."})
  
```

- Easier because of the component pattern & state

```ejs
  // _header.ejs => Partial

  <%- include("_header", data) %>

  for(const photo of photos){
    <%- include("_photo", photo) %>
  }

  <%- include("_photo", photo) %>
```

```js
  function Header(){

    return()
  }


  Header()
```

- JSX is magical! Java Situation Xtreme ? JavaScript XML

```jsx
  <h1 className="bob" onClick={() => someFunction("yeah")}>Hello!</h1> => TO HTML
```

```html
  <h1 class="bob" onclick="someFunction('yeah')">Hello!</h1>
```