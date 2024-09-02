# what you need to know

You'll need some understanding of three key aspects of web development to learn Vue.js - **HMTL**, **JavaScript** and **CSS**.

Here's a simple web page incorporating some basic aspects of all three of them:


```
<html>
<head>
   <title>what you need to know</title>
</head>

<body style="padding:5rem;">
   <input class="title_input" type="text" />
   <h1 id="heading">enter new text above</h1>
</body>

<script>
   const title_input = document.querySelector('.title_input')
   title_input.addEventListener('keydown',() => {
      const heading = document.getElementById('heading')
      heading.innerText = document.querySelector('.title_input').value
})
</script>

</html>
```   

This code allows the user to change the <h1> heading text by typing into the <input> field on the same page.

\
[Check out example](/examples/upfront_simple_example.html)



&nbsp;
### key points

&nbsp;
1. The <body> tag contains the HTML elements displayed on the page
2. The *class* and *id* attributes allow CSS and JavaScript to access specific elements
3. The <script> element contains JavaScript accessing and manipulating the HTML elements, effectively linking the <h1> and <input> elements in this instance

\
If you are not clear on these kind of interactions, you should perhaps take a further look
into HTML, JavaScript and CSS before proceeding with Vue.js. Here are some resources you 
might find useful:



[HTML on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)


[JavaScript on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


[CSS on MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)






