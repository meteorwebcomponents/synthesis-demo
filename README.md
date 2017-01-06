# synthesis-demo

## Usage

### Running

Install external components.
```sh
./build.sh
meteor
```

To add a component (components are inside imports/ui/bower_components):

1. Install it as `./bower.sh install --save example-component`.

2. Input component name `example-component` to import `example-component/example-component.html`. If you want to import something else (for eg behavior/script/css) skip this step by pressing enter and then manually add it to the `imports/ui/imports.html` file.

