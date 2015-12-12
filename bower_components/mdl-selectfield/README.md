# mdl-selectfield
Material Design Lite selectfield component (https://github.com/google/material-design-lite)

## Live Example

Check out the [jsfiddle](http://jsfiddle.net/zetta/mofbbamo/)

## Basic use
To use any MDL component, you must include the minified CSS and JavaScript files using standard relative-path references 
in the `<head>` section of the page, as described in the MDL Introduction.

#### Examples

Select field.
```html
<div class="mdl-selectfield mdl-js-selectfield">
  <select id="myselect" name="myselect" class="mdl-selectfield__select">
    <option value=""></option>
    <option value="option0_value">option 0</option>
    <option value="option1_value">option 1</option>
  </select>
  <label class="mdl-selectfield__label" for="myselect">Choose option</label>
</div>
```