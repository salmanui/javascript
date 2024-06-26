# JavaScript and Vuejs Interview questions

### What is Vue.js?
Vue.js is a progressive JavaScript framework used for building user interfaces and single-page applications. It is designed to be incrementally adoptable, meaning you can use it as a library to enhance parts of an existing project or as a full-featured framework to build complex applications. Vue.js is known for its simplicity, flexibility, and ease of integration with other projects and libraries.

### Slots in Vue.js
Slots in Vue.js are a feature that allows you to pass content into a component from the outside, similar to the concept of "transclusion" in other frameworks. They enable you to create reusable components with customizable content. There are three types of slots:

Default Slot: For basic content insertion.
Named Slots: For more specific and organized content insertion.
Scoped Slots: For passing data from the child component to the parent and customizing the slot content based on that data.
```vue
<template>
  <div>
    <slot name="header"></slot>
    <p>This is the main content.</p>
    <slot name="footer"></slot>
  </div>
</template>
```
### Structure of Vue.js
A typical Vue.js project structure includes:

main.js: The entry point of the application where the Vue instance is created and the root component is mounted.
App.vue: The root component.
Components: Directory for Vue components.
Assets: Directory for static assets like images and styles.
Store: Directory for state management (if using Vuex).
Router: Directory for routing (if using Vue Router).

### v-bind and v-model
v-bind: A directive that binds an attribute to an expression. It is often used to dynamically bind classes, styles, and other attributes.
```html 
<img v-bind:src="imageSrc" alt="Dynamic Image">
<img :src="dynamicImageUrl">
<button :class="{'active': isActive}">Button</button>
```
v-model: A directive that creates a two-way binding on an input, textarea, or select element. It keeps the input element in sync with a data property.
```html
<input v-model="message" placeholder="Enter a message">
<input v-model="userInput">
<select v-model="selectedOption">
  <option value="A">Option A</option>
  <option value="B">Option B</option>
</select>
```
### Difference between v-if and v-show
v-if: Renders the element and its children only if the condition is true. If the condition is false, the element is completely removed from the DOM.
```html
<div v-if="isVisible">Visible content</div>
```
v-show: Toggles the visibility of the element using CSS display property. The element is always in the DOM but hidden or shown based on the condition.
```html
<div v-show="isVisible">Visible content</div>
```
### Features of Vue.js
Reactivity System: Automatically updates the DOM when data changes.

Component-Based Architecture: Encapsulate HTML, CSS, and JavaScript in reusable components.

Directives: Built-in directives for binding data to the DOM.

Vue CLI: Command-line interface for scaffolding and managing projects.

Vue Router: Official router for Vue.js for building single-page applications.

Vuex: State management library for managing shared state.

### File Structure of a Vue.js Project
src/: Source files

main.js: Entry point

App.vue: Root component

components/: Directory for components

assets/: Static assets

store/: Vuex store (if used)

router/: Router configuration (if used)

public/: Public files

package.json: Project metadata and dependencies

### Content in Vue.js
Content in Vue.js typically refers to the data, methods, computed properties, and lifecycle hooks defined within a Vue component. A Vue component usually consists of:

Template: HTML structure of the component.

Script: JavaScript part, including data, methods, computed properties, and lifecycle hooks.

Style: CSS styles scoped to the component.

```vue
<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!'
    };
  }
}
</script>

<style scoped>
div {
  color: blue;
}
</style>
```
### What is Webpack Loader?
Webpack loaders are used to preprocess files as they are loaded into your project. They allow you to bundle and transform files other than JavaScript, such as CSS, HTML, and images, by specifying rules that dictate how different types of files should be handled during the build process. For example, you can use loaders to transpile modern JavaScript (ES6) down to ES5 using Babel, or to compile SCSS into CSS.

### How to Fetch Data Using Vue and Display?
To fetch data in a Vue component and display it, you can use the mounted lifecycle hook to make an API call and then store the data in the component's data object. Here's an example:

```vue
<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  mounted() {
    fetch('https://api.example.com/items')
      .then(response => response.json())
      .then(data => {
        this.items = data;
      });
  }
};
</script>
```
### What is the ? in data?.length?
The ? in data?.length is the optional chaining operator. It allows you to safely access deeply nested properties of an object without having to explicitly check for the existence of each property in the chain. If any part of the chain is null or undefined, it returns undefined instead of throwing an error.

### What is Vuex/Store?
Vuex is a state management library for Vue.js applications. It provides a centralized store for all the components in an application, allowing you to manage the state in a predictable way. The store includes state, mutations, actions, and getters to handle data flow and changes.

### How to Override Element Default Styles?
To override default styles, you can use CSS with higher specificity or use the !important flag. For Vue components, you can also use scoped styles to apply styles only to a specific component. Here's an example of overriding styles in a scoped manner.
##### Example
```html
<template>
  <button class="custom-button">Click me</button>
</template>

<style scoped>
.custom-button {
  background-color: blue;
  color: white;
}
</style>
```
### What are Scoped Styles?
Scoped styles in Vue ensure that the styles defined in a component only apply to that component. This is done by adding the scoped attribute to the <style> tag in a single-file component. Scoped styles use a unique attribute on elements and styles to prevent them from affecting other components.

### What is Parent to Child Communication?
Parent to child communication in Vue involves passing data from a parent component to a child component via props. The parent component provides data to the child component as an attribute, which the child component receives as a prop.
##### Example
```vue
<!-- ParentComponent.vue -->
<template>
  <ChildComponent :message="parentMessage" />
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      parentMessage: 'Hello from parent'
    };
  }
};
</script>
```
```vue
<!-- ChildComponent.vue -->
<template>
  <p>{{ message }}</p>
</template>

<script>
export default {
  props: {
    message: String
  }
};
</script>
```

### What is a Watch Hook?
The watch hook in Vue is used to reactively monitor changes to a specific data property or computed property and execute a callback when the property changes.

```vue
export default {
  data() {
    return {
      counter: 0
    };
  },
  watch: {
    counter(newValue, oldValue) {
      console.log(`Counter changed from ${oldValue} to ${newValue}`);
    }
  }
};
```

### What is the Difference Between Sync and Async?
Sync (synchronous) operations are executed sequentially, blocking the next operation until the current one completes.
Async (asynchronous) operations allow

### Difference between var, let, and const
var:
Function-scoped.
Can be redeclared and updated.
Hoisted to the top of their scope but not initialized.
```javascript
var x = 10;
if (true) {
  var x = 20;
  console.log(x); // 20
}
console.log(x); // 20
```
let:
Block-scoped.
Cannot be redeclared within the same scope but can be updated.
Hoisted to the top of their scope but not initialized.
```javascript
let y = 10;
if (true) {
  let y = 20;
  console.log(y); // 20
}
console.log(y); // 10
```
const:
Block-scoped.
Cannot be redeclared or updated.
Must be initialized at the time of declaration.
```javascript
const z = 10;
if (true) {
  const z = 20;
  console.log(z); // 20
}
console.log(z); // 10
```
### Ways to declare an object
Using object literal:
```javascript
const obj1 = {};
```
Using new Object():
```javascript
const obj2 = new Object();
```
Using a constructor function:
```javascript
function Person(name) {
  this.name = name;
}
const obj3 = new Person('John');
```
Using Object.create():
```javascript
const proto = { greet: function() { return 'Hello'; } };
const obj4 = Object.create(proto);
```
### Ways to access the document in JavaScript
```javascript
document.getElementById('myId');
document.getElementsByClassName('myClass');
document.getElementsByTagName('div');
document.querySelector('.myClass');
document.querySelectorAll('div');
```

### Program to Convert Currency from Indian Rupees (INR) to US Dollars (USD)
```javascript
function convertINRtoUSD(inr, exchangeRate) {
    // Exchange rate should be the value of 1 INR in USD
    return inr * exchangeRate;
}

// Example usage:
let inrAmount = 1000;
let exchangeRate = 0.013; // Example exchange rate
let usdAmount = convertINRtoUSD(inrAmount, exchangeRate);
console.log(`${inrAmount} INR is equal to ${usdAmount} USD.`);
```

#### In JavaScript, map() is a method of the Array object. It creates a new array by calling a function on every element of the original array and storing the results in a new array
#### The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements.
#### JavaScript reduce() is a higher order function used in data manipulation that reduces an array to a single value. It takes two parameters: an accumulator and the current element of an array.

