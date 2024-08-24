# the goal

The goal is to build possibly complex web applications wherein we can easily
manipulate and pass data back and forth between our JavaScript code and HTML user interface.
\
\
Vue.js achieves this by equipping us to build **declarative**, **component**-based websites:

&nbsp;
## declarative
```
<button v-on:click="handler_function"></button>
```
With declarative programming, we describe what we want but we don't need to specify how to get it.

In this instance, through familiar HTML syntax, we are telling Vue that we want to pass *click* events on the button element to a function called
*handler_function*. Vue will deal with accessing the underlying DOM elements and events to make this happen.
Vue is effectively providing an API over the DOM and browser functions to make building complex websites easier.

This simple example demonstates the primary mechanism for accessing our HTML in Vue - through HTML **attributes**.

&nbsp;
## component-based
Let's build a component in the file *MainComponent.vue*:
```
<script>
import SubComponent from './SubComponent/SubComponent.vue'
</script>

<template>
   <section>
      <SubComponent />
   </section>
</template>

<style>
</style>
```
Components provide a lego-type block for building our web application architecture.

In this example, we **import** a separate component called *SubComponent* and 
slot it into our HTML **template** using *<SubComponent>* - instructing Vue
to create a child DOM node.

With this declarative syntax, Vue will incorporate the content of the template
from *SubComponent* into the template of the *MainComponent*.

&nbsp;
### the glue
The main glue for linking our HTML to the underlying JavaScript application is **reactivity** -
whereby "Vue automatically tracks JavaScript **state** changes and efficiently updates the **DOM** 
when changes happen." [^1^](#1)

to connect your html page with the underlying javascript
and build a component-based application


how?


\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
&nbsp;references
###### [1](https://vuejs.org/guide/introduction.html#what-is-vue) 
[https://vuejs.org/guide/introduction.html#what-is-vue](https://vuejs.org/guide/introduction.html#what-is-vue)

