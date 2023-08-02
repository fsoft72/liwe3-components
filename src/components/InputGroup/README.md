# InputGroup component

This component make use of Input and Button components.

It will accept as main props the props of Input component and an array of buttons with their own props.

The buttons will be displayed before or after the input depending on the position property.

Buttons actions can be defined trough the onClick attribute passed as prop. If no actions are needed don’t forget to pass along the disabled prop as true.


Component props as reference (see Input component for more details):

```typescript
type TypeInputGroupButtons = [TypeInputGroupButton, TypeInputGroupButton?]


label: string;

size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'block';

mode?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';

status?: 'error' | 'success' | 'warning' | 'info';

message?: string;

attrs?: {};

buttons: TypeInputGroupButtons;
```


Single item (TypeInputGroupButton) in buttons list props as reference (see Button component for more details):

```typescript
label: string;

size?: 'xs' | 'sm' | 'md' | 'ld' | 'xl' | 'block';

mode?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';

attrs?: {};

position: prepend' | 'append';
```


