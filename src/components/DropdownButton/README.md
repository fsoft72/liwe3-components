# Dropdown Button component

Basic dropdown button.

It will receive the label and items as props.

It will optionally also receive the itemTemplate as a prop, which will be used to render the single items.

It will accepts all the props that can be passed to a div element. If one or more class names will be passed they will be added to the default one (liwe3-dropdown-button).

The shown element list is passed to the component trough an array of objects:


```typescript
[[
    {label: 'Item 1', action: '#item1', target:'_self'} as MenuItemType,
    {label: 'Item 2', action: '#item2', target:'_self'} as MenuItemType,
    {label: 'Item 3', action: 'https://yourdomain.it', target:'_blank'} as MenuItemType,
    {label: 'Item 4', action: 'item4', target:'_self', className:"test", rel:"rel-item-4", id:"last-item"} as MenuItemType,
]
```

label and action are required keys, target is optional and if needed it will accepts all the props that can be passed to a <li> element.


