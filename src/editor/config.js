import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { oneDark } from '@codemirror/theme-one-dark';

export const languageMap = {
    javascript,
    python,
    html,
    css
};

export const defaultExtensions = [
    oneDark,
    python() // Set Python as the default language
];

// Python example code
export const defaultDocument = `
print "Python examples"

## PRINTING

print 'Hello'

print 'Hello','Editorial'

# Concatenate/Append text (gives errors if not strings)
print 'Hello' + 'Folks'

print 'Hello' + ' Folks' # have to add your own space

print 27


# VARIABLES
#There are different types of variables: character, string, integer, float, boolean, array/list, dictionary, and a few others.

# A character
at = "@"

# A string
name = 'Jackie'

# An integer
favorite_number = 4

# A float
height = 6.5

# A boolean
IamCool = True 

# You can assign a new value to a variable
IamCool = False 

# An array
array_of_colors = ['red','orange','yellow','green','blue','indigo','violet']
array_of_numbers = [23,13.4,1,782]
mixed_array = ['Zillow',34.9,True,798]

# A dictionary
description = {'eyeColor':'brown','physique':'muscled','demeanor':'confident'}
print description['eyeColor']
print description['physique']
print description['demeanor']

# EXTRA

# ID of a variable
print id(name)

# STRINGS
# A string is string of characters 

## Empty string
first_name = ""
last_name = ""

## Asign a value to a string
first_name = "joe"
last_name = "shmo"
occupation = "Truck Driver"

## Adding strings (concatenation)
print first_name + last_name

## Adding a space between string variables
print first_name + " " + last_name

## Starting a new line (escape characters)
print first_name + "\\n" + last_name 

## Adding variables inside of a string (string formatting)
print "Hello %s" %(first_name)

## Multiple variables inside of a string
print "Hello %s %s" %(first_name,last_name)

## There is another way to format strings
greeting = 'Hello {name}, my name is {myname}'
print greeting.format(name='Joseph',myname='Joey')

## Print a string several times
print first_name * 4

## Get index of a string
## Indices begin at 0
print first_name[0]
print first_name[1]
print first_name[2]

## A multi-line string
"""Multi-Line strings are sometimes used as multi-line comments, since python doesn't have syntax for multi-line comments."""

# STRING FUNCTIONS
print first_name.capitalize()
print len(occupation) 

export const defaultDocument = 
# STRING FUNCTIONS (continued)
print first_name.capitalize()
print len(occupation) 

# INTEGERS
number1 = 12
number2 = 144
number3 = "67" # not an integer

# Add
print number1 + number2

# Subtract
print number2 - number1

# Multiply
print number1 * number2

# Divide
print number2 / number1

# Exponents
print number2 ** number1

# FLOAT
pi = 3.14
print pi

# TUPLES
position = (50, 200)
print position[0]

# LISTS
Clients = ['Cierra', 'Lisa', 'Ibrahim', 'Eric']
print Clients

# Append
Clients.append('Joe')
print Clients

# Remove
Clients.remove('Joe')
print Clients

# DICTIONARIES
inventory = {'light': 'flashlight'}
print inventory['light']

# Update Dictionary
inventory.update({'map': 'New York'})
inventory.update({'phone': 'Flip Phone'})
print inventory

# CONDITIONALS
on = True
number = 51
if on:
    print("Condition is true")

# FUNCTIONS
def greet(name):
    return "Hello, " + name

print greet("Alice")

# CLASSES
class Fruit:
    def __init__(self, color, taste):
        self.color = color
        self.taste = taste

    def eat(self, item):
        print("Eating " + item)

apple = Fruit("red", "sweet")
print apple.color
apple.eat("apple")

# LOOPS
print "For Loop Example:"
for i in range(5):
    print i

# While Loop Example
count = 0
while count < 3:
    print "Count:", count
    count += 1

# FILE OPERATIONS
filename = "example.txt"
with open(filename, "w") as file:
    file.write("This is an example file.")

with open(filename, "r") as file:
    content = file.read()
    print content

# EXCEPTIONS
try:
    print 10 / 0
except ZeroDivisionError:
    print "Caught division by zero!"

# ADVANCED DATA STRUCTURES
from collections import deque
queue = deque(["a", "b", "c"])
queue.append("d")
print queue
queue.popleft()
print queue

# DECORATORS
print("\n## DECORATORS ##")
def debug(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with {args}, {kwargs}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result}")
        return result
    return wrapper

@debug
def multiply(a, b):
    return a * b

print(multiply(2, 3))

# MODULES
print("\n## MODULES ##")
import math
print("Square root of 16 is:", math.sqrt(16))

# ADVANCED DATA STRUCTURES
print("\n## ADVANCED DATA STRUCTURES ##")
from collections import deque
queue = deque(["a", "b", "c"])
queue.append("d")
print("Queue after append:", queue)
queue.popleft()
print("Queue after popleft:", queue)

# NUMPY (if installed)
try:
    import numpy as np
    print("\n## NUMPY EXAMPLES ##")
    array = np.array([1, 2, 3, 4])
    print("Numpy Array:", array)
    print("Mean of array:", np.mean(array))
except ImportError:
    print("Numpy not installed.")

# END
`;
