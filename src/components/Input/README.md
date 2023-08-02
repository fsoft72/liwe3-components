# Input Component

This is a basic input component adding some feauters to the deafult one. This component has styling and sizing options based on the main and internal css files (liwe3-styles.css / liwe3-styles.min.css / styles.css) and a basic status managment.

This component accepts a ref  as prop and every attribute an <input> would but size and onChange. OnChange will return input’s value.

Custom component props:

```typescript
label: string;
name: string;
filter: string;
onChange?: (value:string) => void;
size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'block';
mode?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';
status?: 'error' | 'success' | 'warning' | 'info';
message?: string;
attrs?: {};
```

Where status will define input field border and hint text color. Mode will define input field background color.

Both based on defined css styles.

Filter accepts a regular expression that will be run against input’s value to filter unallowed characters