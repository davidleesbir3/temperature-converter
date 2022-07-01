# Temperature Converter

A minimalist app that allows you to convert temperature between Cesius and Fahrenheit.

## Prerequisite
Before you can run this application locally, you need to have [Node.js](https://nodejs.org/en/download/) and npm installed in your local environment.

## Usage

In the project directory, run

```npm install```

to install the required packages for this app.

`npm start`

to run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

`npm run build`

to builds the app for production to the `build` folder.\


## UI Design

### 2-way conversion
Many conversion apps have a destinated input and destinated output. In other words, users always enter the input from one place 
and the output is always displayed at another. The main design decision I made is to have 2-way conversion, which means the user can 
enter the temperature from either place, the conversion will be performed and the displayed temperatures are updated accordingly.

This approach has the following implications:

- There are 2 main components, each has a temperature and unit
- Each of the components above serves as both an input and output component.

I decided to go for this approach based on personal experiences with similar conversion applications (eg. currency exchange or translation apps). For example, after I converted $100 USD to JPY, I might want to find out how much USD is ￥40000. In such cases, one way to do it is to change the currency from USD to JPY in the input field, then change the amount to 40000. This works fine, but I think it can be a better user experience if I can
directly change the amount in the output field to 40000, then the amount in the (orginal) input field will be updated.

### Real-time conversion
Another decision made in terms of UX design is real-time conversion, meaning that it doesn't require users to hit a "convert" button or something like that. Conversion happens in real time when the temperatures or unit is updated.


### Layout

The layout is composed of two equivalent parts: left and right panels (or top bottom in narrower screen). Each panel has two components: one for entering and displaying temperature, the other for selecting unit.

The temperature component is significantly larger than the unit selector. This is an intentional decision hoping to make the temperatures the main focus.

### Limitation
A limitation introduced by my design is that the user is only interested in the conversion between **two units**. So it's not optimal for use cases in which the user wants to know what 100 Celsius is in Fahrenheit and Kelvin at the same time.


## Technical design
The following section summarizes my key technical decisions.

### React
I picked [React](https://reactjs.org/) as the frontend framework for this project as it's suitable for developing a light-weight, simple frontend application like this one. There is not a whole lot of UI states that need to be managed, so state management can be handled with React's built-in hooks without a problem.

Also, React makes it easy to create reusable components, and as our UI can be broken down into a few self-contained UI components, it makes sense to use React.

### MUI
[MUI](https://mui.com/) provides a rich set of user interface components styled in Google's material design. It makes it a lot easier to create UI components and layout in this app. One down side I found with MUI is that it's not always easy to customize the styles if your design theme is different from the built-in one. However this is not a problem in this project.

### Key components
With the 2-way conversion approach in mind, the app can be broken down into the following key components:
- `App` components as the root component that contains everything, which contains the JSX for the top-level layout. It also contains the business logic of state management and temperature conversion.
- `TemperatureField` - a customized MUI INPUT field for entering and displaying temperature.
- `UnitSelector` - a customized MUI Select compoent for selecting temperature unit.

Note that `TemperatureField` and `UnitSelector` don't handle any business logic here. 

### Conversion logic
Conversion logic are executed upon the events of user interaction, either when they change the temperature or unit. Upon such events, the following logic is executed:

1. Read the updated value (either temperature or unit)
2. Depending on which value is updated, determine the input temperature, input unit and output unit.
3. Based on the result of step 2, calculate the output temperature.
4. Update the values of `TemeratureField` and `UnitSelector`

In the actual implentation, the process described above all starts in the `onChange()` handler of `TemperatureField`'s and `UnitSelector`'s.

