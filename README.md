# ngx Dialog Injection Starter Pack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Description

This is an implementation of a reusable [Angular Material dialog](https://material.angular.io/components/dialog/overview), including dynamic injection of a component with a simple form and two-way communication between the form and the component that launched the dialog.

- `dialog-wrapper` is the reusable dialog
- `dialog-form` is the form and necessary supporting services.
- `name` (Alice) is an example of arbitrary data being passed from the parent component to `dialog-form` via `dialog-wrapper`
- An object with `name` and `favouriteFood` is passed back to the parent when the form in `dialog-form` is submitted. This also triggers the parent component to close `dialog-wrapper`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
