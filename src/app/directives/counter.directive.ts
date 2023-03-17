//The directive creates a dynamic counter of numbered elements in a template.
import {
  Directive, ViewContainerRef, TemplateRef, Input, Attribute, SimpleChanges
} from "@angular/core";

@Directive({
  selector: "[counterOf]"
})
export class CounterDirective {

  constructor(private container: ViewContainerRef,
      private template: TemplateRef<Object>) {
  }
//counterOf" is bound to a number value passed to the directive from the parent component using the "@Input" decorator.
  @Input("counterOf")
  counter!: number;

  //The "ngOnChanges"is implemented to watch for changes to the "counterOf" input property.
  // When a change occurs, the method clears the container view and loops through the counter value to create an embedded 
  //view using the "createEmbeddedView" method of the ViewContainerRef service.
  //For each iteration, the embedded view is created using the provided template and a new instance of the "CounterDirectiveContext" class. 
  //The context class is used to pass a new number value for each element in the template.
  ngOnChanges(changes: SimpleChanges) {
      this.container.clear();
      for (let i = 0; i < this.counter; i++) {
          this.container.createEmbeddedView(this.template,
              new CounterDirectiveContext(i + 1));
      }
  }
}

//this class defines a single property "$implicit" that is used to pass the current iteration value to the template.
class CounterDirectiveContext {
  constructor(public $implicit: any) { }
}

//this directive creates a dynamic counter of numbered elements based on the value of the "counterOf" input property.
// The directive expects the template to contain a single element that will be repeated based on the value of the input property. 
//The element can access the current iteration value using the "$implicit" variable.