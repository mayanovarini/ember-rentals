# Super Rentals with EmberJS

Marketplace application built using EmberJS for property rentals.
EmberJS is a really nice framework, it comes with automated tests too (Acceptance, Unit and Integration).

## Acceptance Tests

Acceptance tests are used to test user interaction and application flow.
The tests interact with the application in the same ways that a user would,
by doing things like filling out form fields and clicking buttons.
Acceptance tests ensure that the features within a project are basically functional,
and are valuable in ensuring the core features of a project have not regressed,
and that the project's goals are being met.

In the example scenario above, some acceptance tests one might write are:

A user is able to log in via the login form.
A user is able to create a blog post.
After saving a new post successfully, a user is then shown the list of prior posts.
A visitor does not have access to the admin panel.
Unit Tests

Unit tests are used to test isolated chunks of functionality, or "units".
They can be written against any isolated application logic.

Some specific examples of units tests are:

A fullname attribute is computed which is the aggregate of its first and last.
The serializer properly converts the blog request payload into a blog post model object.
Blog dates are properly formatted.

## Integration Tests

Integration tests serve as a middle ground between acceptance tests,
which only interact with the full system through user endpoints,
and unit tests, which interact with specific code algorithms on a micro level.
Integration tests verify interactions between various parts of the application,
such as behavior between UI controls. They are valuable in ensuring data and
actions are properly passed between different parts of the system,
and provide confidence that parts of the system will work within the application under multiple scenarios.

It is recommended that components be tested with integration tests because
the component interacts with the system in the same way that it will within the context of the application, including being rendered from a template and receiving Ember's lifecycle hooks.

Examples of integration tests are:

An author's full name and date are properly displayed in a blog post.
A user is prevented from typing more than 50 characters into post's title field.
Submitting a post without a title displays a red validation state on the field
and gives the user text indicating that the title is required.
The blog post list scrolls to position a new post at the top of the viewport.

## Testing Frameworks

QUnit is the default testing framework for this guide, but others are supported
through third-party addons.

## Prerequisites to work on this on your own engine

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd super-rentals`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
