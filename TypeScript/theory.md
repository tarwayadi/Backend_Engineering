# what problem does TypeScript solve?
-->javaScript is dynamically typed 
   Example: let age = 25;
            age = "Aditi";

-->JavaScript allows it. The variable age can first contain a number and later contain a string. This flexibility is useful, but in a large application it can also create problems .

--> now suppose you create a function:
    
     function add(a,b)
     {
        return a+b;
     }

    you intend it to add two numbers:
     
      add(10,20); //30

    But javaScript also allows:
      
      add("10","20"); //"1020"

--> Because JavaScript sees two strings and performs string concatenation.
There was no warning when you wrote the code.
This becomes much more difficult when a project has:

    thousands of lines of code
    many developers
    hundreds of functions
    APIs
    databases
    React components
    complex objects

You can accidentally pass the wrong type of data around.

--->when we use typescript it catches the problem before you run the program.  Thats the main idea.


# Why do companies use TypeScript?

--->As applications become larger, types help developers understand how data moves through the application.

For example:

function getUser(id: number): User {
    ...
}

Just by looking at this, you already know:

id should be a number
the function returns a User

Without opening the function's implementation.

This makes code much easier to maintain.

TypeScript gives you more than just error checking

You'll also get better autocomplete and developer tools.

For example:

user.

Your editor can understand that user is a User and suggest:

name
age
email
address
...

    So TypeScript helps with:

    1. Error detection

    age = "hello"; // ❌

    2. Code completion

    Your editor understands your objects and functions.

    3. Better documentation

    Types tell other developers what your code expects.

    4. Easier maintenance

    Large projects become easier to understand.

    5. Safer refactoring

    If you change something, TypeScript can show you where that change affects the rest of your project.
        

# JavaScript and TypeScript:
-->
        JavaScript
        → More flexible
        → Easier to start
        → Less strict


        TypeScript
        → More structured
        → More error checking
        → Better for large applications
        → Slightly more to learn


# How to install and run the Typescript code?

--> first in order to install the typscript in your system globally run the tterminal as administrator

---> type the command : npm install typescript -g
---> then  write "tsc filename.js"(it will compile the typescript file into javascript file if there is no error in the file)
-->now you can run the file using "node filename.js"