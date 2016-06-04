import { ReactiveVar } from 'meteor/reactive-var';
import { Template } from 'meteor/mwc:blaze-templating';
import './main.blaze.html';
import "/imports/startup/client";

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

