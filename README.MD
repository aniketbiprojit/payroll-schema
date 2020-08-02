# typeorm-node

Using MySQL and TypeORM

## Run Instructions

### Setup ormconfig.json

Setup the mysql username and password

### Node instructions

The first run takes a while as all **migrations** are run.

```sh
npm i
npm i -g tsc ts-node tsconfig-paths nodemon

nodemon --exec ts-node ./src/index.ts
```

## Entities

Most entites are stright foward. Here is an explanationn for the ones that are not.

### Calendar, Attendance and OverTime

-   CalendarBaseClass
    -   Abstract Class
    -   DayOfWeek
    -   Month
    -   Day
    -   Year
-   Calendar -> Can be replaced or populated with dates
    -   Derived from CalendarBaseClass
-   Attendance
    -   Single DateId -> which ManyToOne Calendar
-   Public Holiday
    -   Derived from CalendarBaseClass

### PayRoll

-   A Payroll can be assigned to department, designation or employee
-   It implements a PayRollArchitechure.
-   It has Releases which account for monthy or weekly
-   If designation or employee is created, it inherits and if modified a new row will be added to the payroll and inheritance can be disabled.

### PayRollArchitecture

-   It implements a circular tree-like structure
-   It mantains an independent order for every PayRoll
-   This order specifies how PayRollComponent(s) are put and how the final pay is calculated.
-   If order is 0
    -   The PayRollComponent is evaluated on base salary.
    -   If order of more than one compnent in the architecture is 0, all components are seprately evaluated on the base salary and sum is taken.
    -   Example: There is TDS(10 percent deduction) and Good(500 fixed increase) and the base salary is 1000, it will be evaluated as `1000-(100)+500`
-   If order is n>=1:
    -   The Component is evaluated on result of n-1 during traversal.
    -   The there count of n is more than one, all components are parallely evaluated and summed.
-   When highest order is reached, final salary can be shown.

### PayRollComponent
- Health: +1 or -1; This gets multipled to the component value.
- PayType: fixed or percent
- maxLimit : The limits
- maxLimit triggers : If limit is exceeded this trigger is called. This is a ManyToMany relation.
- During traversal of architechture, this trigger is evaluated on parall if not specified.


### Releases
- Can be monthly or weekly
- Uses Calendar
- Evaluates OverTime and Expenses : monthly or weekly depending the above value.