# Budget

## Description
Budget is an app designed for those who want to use an envelope style budget system but don't want to use cash. The bugdet app provides a way to track spending digitally and visualize relevant information at a glance.

## Installations
Run the following commands in the terminal

```
git clone git@github.com:mcampopiano/budget-react.git
cd budget-react
npm install
npm start
```
The final command will run the app at localhost:3000.
Follow instructions [here](https://github.com/mcampopiano/budget-python) for running the server at localhost:8000.

## Using the app

### Registering new users
When a new user registers an account, they will be redirected to a form for creating a new budget. The user will select the month and year for the budet, and enter an expected income for the month. Once the form is completed, they will be redirected to the homepage.

### Creating envelopes
Once a user is authenticated, on the nav bar they will see an option labeled "envelopes." After selecting this option, a dropdown menu will render with a list of all previously created envelopes with the final option being *create new envelope*. If The use has not created any envelopes, only the *create new envelope* option will render.

After selecting *create new envelpe*, the user will be redirected to a form with the following inputs:
* Name (e.g. groceries, restaurants, etc.)
* Monthly budget

Once the user has completed and submitted the form, they will be redirected to a details page for the newly created envelope. They can also navigate to this details page for existing envelopes by selecting them from the envelopes dropdown button on the navbar.

On the details page the user can see the budget amount, actual amount spent in that category for the month, and remaining budget for the month. There is also a table showing all payments for the month in that envelope, with location, amount, and date. From this detail page the user can edit or delete the envelope, and add and delete payments.

### Adding purchases to an envelope
While a user is viewing an envelope details page, they can select the *add payment* button, which will redirect the user to a form with the following input fields:
* Location
* Amount
* Date
Once the user has completed and submitted the form, they will be redirected to the relevant envelope detail page, and the data for the newly recorded purchase will be rendered in the purchases table.

### Deleting purchases
Once a purchase has been recorded to an envelope, the purchase data will be rendered as a line in a purchases table in the envelope detail page. At the end of this line is an *X* button, which, when clicked, will prompt a confirmation window. If confirmed, the purchase will be deleted.

### Recurring bills
To navigate to the recurring bills page, users select *Recurring bills* from the nav bar. The recurring bills page shows a table with columns for:
* Biller
* Expected amount
* Due date
* Actual amount
* Date paid
If the bill has not been paid yet, instead of dsiplaying actual amount and date paid a button for adding payment will render.
The page also displays the total budget, actual spent, and remaining budget for recurring bills.

### Adding a biller
While viewing the recurring bills page, click the *Add biller* button, which redirects the user to a form with the following input fields:
* Name
* Expected amount
* Due date
Once the form is completed and submitted, the user will be redirected to the recurring bills page, and the new bill will be rendered in the bills table.

### Recoring bill payment
When a recurring bill has been created and no payment is yet recorded, an *Add payment* button will render at the end of the bill line in the table. When the user clicks the button, they will be redirected to a form with the following input fields:
* Amount
* Date paid

### Deleting payments
Once a payment has been recorded to a bill, the payment data will be rendered as a line in the bill table in the recurring bill page. At the end of this line is an *X* button, which, when clicked, will prompt a confirmation window. If confirmed, the payment will be deleted.