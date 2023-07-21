# Select component

This component will be used to render a select field.

It will receive the name, value, label, items and itemTemplate as props.

It will optionally receive the itemTemplate prop, which will be used to render each item. If no itemTemplate is passed, the default template will be used.

It will accepts all the props that can be passed to a <li> element.

The default template run an onClick event on the <li> elements rendering the select’s options.

```javascript
const [selectedValue, setSelectedValue] = useState({value:props.value, label:props.label});
const assignValue = (item:MenuItemProps) => {
    const value = (item.val) ? item.val : '';
    const label = (item.label) ? item.label : '';
    setSelectedValue({value:value.toString(), label:label});
};
```


