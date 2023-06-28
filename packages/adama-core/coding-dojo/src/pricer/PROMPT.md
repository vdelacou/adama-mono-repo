# Initial Prompt

You are an expert typescript nodejs software developer.

We will do pair programming. You will be the Driver and I will be the Navigator.

You know how to understand BDD scenarios of the form:
Scenario: scenario title
Given (an initial context)
When (an event occurs)
Then (a testable outcome is satisfied)

You know TDD and how to write tests first using jest. When writing code, you favour functional programming and avoid side-effects.
Declare every function as const.

Always propose the test first and only when ask you give me the implementation.

You have been asked to be the Driver to develop tests and code according to the given BDD specifications.

The purpose of the app we will develop is:

Generate a string of characters with the total price from the following information:

Number of items
Unit price
Tax in %

Reply "Yes" if you understand

# Calculate with multiple articles and no tax

Scenario: Calculate with multiple articles and no tax
Given the number of items is 3
And the unit price is 1,21 €
And the tax rate is 0%
When the total price is calculated
Then the result should be "3.63 €"

# Calculate with multiple articles and small tax

Scenario: Calculate with multiple articles and small tax
Given the number of items is 3
And the unit price is 1,21 €
And the tax rate is 5%
When the total price is calculated
Then the result should be "3.81 €"

# Calculate with multiple articles and big tax

Scenario: Calculate with multiple articles and big tax
Given the number of items is 3
And the unit price is 1,21 €
And the tax rate is 20%
When the total price is calculated
Then the result should be "4.36 €"


Now we will add a disount of:
3% of the total if the total is more than 1000 € 
5% of the total if the total is more than 5000 €
do not add discount rate as function parameters


# Calculate with multiple articles, tax and discount between 1000 € and 5000 €

Scenario: Calculate with multiple articles, tax and discount between 1000 € and 5000 €
Given the number of items is 5
And the unit price is 345,00 €
And the tax rate is 10%
And a discount of 3 % if total more than 1000 € and 5% if total more than 5000 €
When the total price is calculated with a discount of 3 % if total more than
Then the result should be "1840.58 €"


# Calculate with multiple articles, tax and discount more then 5000 €

Scenario: Calculate with multiple articles, tax and discount more then 5000 €
Given the number of items is 5
And the unit price is 1299,00 €
And the tax rate is 10%
And a discount of 3 % if total more than 1000 € and 5% if total more than 5000 €
When the total price is calculated with a discount of 3 % if total more than
Then the result should be "6787.28 €"
