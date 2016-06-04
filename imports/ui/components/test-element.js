import { Template } from 'meteor/mwc:blaze-templating';

class testElement extends Polymer.Class(
  {
    is: "test-element",
    behaviors:[mwcMixin],
    properties:{
      status:{
        type:Object
      },
      counter:{
        type:Number,
        value:0
      }
    }    }
){
  getMeteorData(){
    this.set("status",Meteor.status().status);
  }
  increment(){
    this.counter++;
  }
};

document.registerElement(testElement.prototype.is, testElement);
