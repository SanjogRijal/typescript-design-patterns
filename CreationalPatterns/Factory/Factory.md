# Factory Pattern
- Factory pattern is used to add new abstraction between object creation and where it is used. 
- With factory pattern, we get choice to make use of various variation of an Object in RUNTIME instead of hardcoding it into the application.

## Terminologies
a. ConcreteCreator: It is a client application, class or method that calls the Creator [Factory Method]
b. ProductInterface (IProduct): Interface describing attributes and methods that the Factory will require in order to create Final Product/Object
c. Creator: The Factory class. It declares a <b> static </b> method that will return the object based on user choice instead of hardcoded. 
d. Concrete Product: Object returned from the Factory. Object Implements Product Interface.


