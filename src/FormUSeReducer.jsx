import React, { useReducer } from "react";

const initialState = {
  userName: "",
  email: "",
  dob: "",
  password: "",
  confirmPassword: "",
  course: [],
  branch: "",
  gender: "",
  citizenshipNo: "",
};
const reducer = (state, action) => {
  //console.log(state, action);
  switch (action.type) {
    case "userName": {
      // return { ...state, [action.field]: [action.value] };
      return { ...state, userName: action.value };
    }
    case "email": {
      return { ...state, email: action.value };
    }
    case "dob": {
      return { ...state, dob: action.value };
    }
    case "password": {
      return { ...state, password: action.value };
    }
    case "confirmPassword": {
      return { ...state, confirmPassword: action.value };
    }

    case "addCourses": {
      let data = action.value;
      //console.log(state, action.checked);
      if (action.checked) {
        return { ...state, course: [...state.course, data] };
      } else if (!action.checked) {
        return {
          ...state,
          course: [
            ...state.course.filter((item) => {
              return item !== action.value;
            }),
          ],
        };
      }

      // console.log(action.value);
    }
    case "branch": {
      return { ...state, branch: action.value };
    }
    case "gender": {
      return { ...state, gender: action.value };
    }
    case "citizenship": {
      return { ...state, citizenship: action.value };
    }
    default:
      return state;
  }
};

const FormUSeReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const date = new Date();
  let dateToCompare = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  const age = Number(
    new Date(dateToCompare).getYear() - new Date(state.dob).getYear()
  );

  //HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    console.log("Submitted");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="userName">User Name</label>
        <input
          value={state.userName}
          type="text"
          name="userName"
          onChange={(e) =>
            dispatch({ type: "userName", value: e.target.value })
          }
        />

        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={state.email}
          name="email"
          onChange={(e) =>
            dispatch({
              type: "email",
              value: e.target.value,
            })
          }
        />
        <br />
        <br />
        <label htmlFor="dob">DOB</label>
        <input
          type="date"
          name="dob"
          onChange={(e) => {
            dispatch({ type: "dob", value: e.target.value });
          }}
        />

        {age > 3 && (
          <input
            type="text"
            placeholder="Enter Citizenship Number"
            onChange={(e) => {
              dispatch({ type: "citizenship", value: e.target.value });
            }}
          />
        )}

        <br />
        <br />
        <select
          name="branch"
          id="branch"
          onChange={(e) => {
            dispatch({ type: "branch", value: e.target.value });
          }}
        >
          <option value="ktm">Ktm</option>
          <option value="pokhara">Pokhara</option>
        </select>
        <br />
        <br />
        <label htmlFor="gender" name="gender">
          Gender
        </label>
        <br />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(e) => {
            dispatch({ type: "gender", value: e.target.value });
          }}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(e) => {
            dispatch({ type: "gender", value: e.target.value });
          }}
        />

        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={state.password}
          name="password"
          autoComplete="off"
          onChange={(e) =>
            dispatch({ type: "password", value: e.target.value })
          }
        />
        <br />
        <br />
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          value={state.confirmPassword}
          autoComplete="off"
          name="confirmPassword"
          onChange={(e) =>
            dispatch({
              type: "confirmPassword",
              value: e.target.value,
            })
          }
        />
        <label htmlFor="courses">HTML</label>
        <input
          type="checkbox"
          value="html"
          name="courses"
          onChange={(e) => {
            dispatch({
              type: "addCourses",
              value: e.target.value,
              checked: e.target.checked,
            });
          }}
        />
        <br />
        <br />
        <label htmlFor="courses">CSS</label>
        <input
          type="checkbox"
          value="css"
          name="courses"
          onChange={(e) => {
            dispatch({
              type: "addCourses",
              value: e.target.value,
              checked: e.target.checked,
            });
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormUSeReducer;
