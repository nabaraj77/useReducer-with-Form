// import React, { useState } from "react";
// import Input from "./Input";
// import "./assets/Scss/style.scss";
// import UseReducer from "./UseReducer";
// import FormUSeReducer from "./FormUSeReducer";

// const App = () => {
//   const [values, setValues] = useState({
//     userName: "",
//     email: "",
//     dob: "",
//     password: "",
//     confirmPassword: "",
//     gender: "",
//     branch: "",
//   });

//   // console.log(values);

//   const inputs = [
//     {
//       id: 1,
//       name: "userName",
//       placeholder: "User Name",
//       type: "text",
//       label: "User Name",
//       errormessage: "User Name should be atleast 3 characters long.",
//       pattern: "^[A-Za-z0-9]{3,10}$",
//       autoComplete: "off",
//       required: true,
//     },
//     {
//       id: 2,
//       name: "email",
//       placeholder: "Email",
//       type: "email",
//       errormessage: "Email should be valid.",
//       label: "Email",
//       required: true,
//       autoComplete: "off",
//     },
//     {
//       id: 3,
//       name: "dob",
//       placeholder: "Date",
//       type: "date",
//       label: "DOB",
//       autoComplete: "off",
//     },
//     {
//       id: 4,
//       name: "gender",
//       label: "Gender",
//       type: "radio",
//       autoComplete: "off",
//       radiooptions: [
//         {
//           id: 41,
//           label: "Male",
//           value: "male",
//           type: "radio",
//         },
//         {
//           id: 42,
//           label: "Female",
//           value: "female",
//           type: "radio",
//         },
//       ],
//     },
//     {
//       id: 5,
//       name: "branch",
//       label: "Branch",
//       type: "checkbox",
//       autoComplete: "off",
//       branchoptions: [
//         {
//           id: 51,
//           label: "Ktm",
//           value: "ktm",
//           type: "checkbox",
//         },
//         {
//           id: 52,
//           label: "Pokhara",
//           value: "pokhara",
//           type: "checkbox",
//         },
//       ],
//     },
//     {
//       id: 6,
//       name: "select",
//       label: "Select Cars",
//       values: [
//         {
//           id: 61,
//           name: "car",
//           value: "aaudi",
//         },
//         {
//           id: 62,
//           name: "car",
//           value: "Volvo",
//         },
//       ],
//     },

//     {
//       id: 7,
//       name: "password",
//       placeholder: "Password",
//       type: "password",
//       label: "Password",
//       errormessage: "Password should be 8-12 characters long.",
//       pattern: "^[A-Za-z0-9]{8,12}$",
//       autoComplete: "off",
//       required: true,
//     },
//     {
//       id: 8,
//       name: "confirmPassword",
//       placeholder: "Confirm Password",
//       type: "password",
//       label: "Confirm Password",
//       pattern: values.password,
//       errormessage: "Password doesn't match.",
//       autoComplete: "off",
//       required: true,
//     },
//   ];

//   const onChange = (e) => {
//     console.log(e.target.name, e.target.value);
//     if (e.target.name === "branch") {
//       const checked = e.target.checked;
//       console.log(checked);
//     }

//     return setValues({
//       ...values,
//       [e.target.name]: e.target.value,
//     });
//   };
//   //console.log(values);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("clicked");
//     console.log(values);
//   };

//   return (
//     <div className="formPage">
//       <form action="" className="formFields" onSubmit={handleSubmit}>
//         <h2 className="formTitle">Register</h2>
//         {inputs.map((item) => {
//           return (
//             <Input
//               {...item}
//               key={item.id}
//               value={values[inputs.name]}
//               onChange={onChange}
//             />
//           );
//         })}

//         <button className="submitBtn">Submit</button>
//       </form>
//       {/* <UseReducer /> */}
//     </div>
//   );
// };

// export default App;

import React from "react";
import FormUSeReducer from "./FormUSeReducer";

const App = () => {
  return (
    <div>
      <FormUSeReducer />
    </div>
  );
};

export default App;
