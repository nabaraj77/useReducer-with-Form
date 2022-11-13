// import React from "react";
// import { useState } from "react";

// const Input = (props) => {
//   const [focused, setFocused] = useState(false);
//   const [selectedValues, setSelectedValues] = useState("");

//   const handleFocus = () => {
//     setFocused(true);
//   };
//   //SelectHandler
//   const handleSelect = (e) => {
//     return setSelectedValues(e.target.value);
//   };
//   //console.log(selectedValues);

//   return (
//     <div className="inputBox">
//       <label htmlFor="">{props.label}</label>
//       {props.type !== "radio" &&
//         props.type !== "checkbox" &&
//         props.name !== "select" && (
//           <input
//             className="input-field"
//             {...props}
//             onBlur={handleFocus}
//             focused={focused.toString()}
//           />
//         )}
//       <div className="radio-wrapper">
//         {props.type === "radio" &&
//           props.radiooptions.map((item) => {
//             return (
//               <div className="radio-input" key={item.id}>
//                 <label htmlFor="gender" className="gender-label">
//                   {item.label}
//                 </label>
//                 <input className="input-field-gender" {...props} {...item} />
//               </div>
//             );
//           })}

//         {/* CHECKBOX */}
//         {props.type === "checkbox" &&
//           props.branchoptions.map((item) => {
//             return (
//               <div className="radio-input" key={item.id}>
//                 <label htmlFor="gender" className="gender-label">
//                   {item.label}
//                 </label>
//                 <input className="input-field-gender" {...props} {...item} />
//               </div>
//             );
//           })}

//         {/* SELECT */}

//         {props.name === "select" && (
//           <select name="cars" id="cars" onChange={handleSelect}>
//             {props.values.map((item, index) => {
//               return (
//                 <option key={index} onChange={handleSelect}>
//                   {item.value}
//                 </option>
//               );
//             })}
//           </select>
//         )}
//       </div>

//       <span className="errorMessage">{props.errormessage}</span>
//     </div>
//   );
// };

// export default Input;
