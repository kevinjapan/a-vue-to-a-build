# an early challenge

Any search for help on an issue in your Vue.js code can quickly reveal a
non-trivial challenge with the framework for new users - there are two 
different **API**s available for developing Vue.js applications!

The **Options API** and **Compositional API** are explained [here](https://vuejs.org/guide/introduction.html#api-styles).

Choosing which API to use can be painful if you are new to the
framework or web application development in general, and
the [Vue Guide](https://vuejs.org/guide/introduction.html) is a little non-commital in recommending either
[API](https://vuejs.org/guide/introduction.html#which-to-choose).
Ultimately, they have to support legacy code written in the older
**Options API** regardless of any significant improvements they may have
wanted to make at any version change. So it is perhaps telling that they have nevertheless decided to proceed with
a revised and separate API - the **Composition API**.

You can read about some of the benefits of the **Composition API** [here](https://vuejs.org/guide/extras/composition-api-faq.html#why-composition-api).

From reading between the lines, watching interviews with the creator of Vue, and given that the **Composition API** is the 
newer API, I have decided to use that API in all my own development. 

All of this guide will refer to the **Composition API**.







