import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api";
import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  _id: "",
  isAdmin: false,
  balance: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}api/register`, {
        name: values.name,
        email: values.email,
        password: values.password,
      });

      localStorage.setItem("token", token.data);

      return token.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}api/login`, {
        email: values.email,
        password: values.password,
      });

      localStorage.setItem("token", token.data);
      return token.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (id, { rejectWithValue }) => {
    try {
      const token = await axios.get(`${url}api/user/${id}`, setHeaders());

      localStorage.setItem("token", token.data);
      console.log("erdtfgyhujnmk");
      return token.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (values, { rejectWithValue, dispatch }) => {
    try {
      const response = await dispatch(resetPasswordConfirmation(values));
      return response.payload;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const resetPasswordConfirmation = createAsyncThunk(
  "auth/resetPasswordConfirmation",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${url}api/reset-password-confirmation`,
        {
          token: values.token,
          password: values.password,
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const requestPasswordReset = createAsyncThunk(
  "auth/requestPasswordReset",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}api/reset-password`, {
        email,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action) {
      const token = state.token;

      if (token) {
        const user = jwtDecode(token);

        return {
          ...state,
          token,
          name: user.name,
          email: user.email,
          _id: user._id,
          isAdmin: user.isAdmin,
          balance: user.balance,
          userLoaded: true,
        };
      } else {
        return { ...state, userLoaded: true };
      }
    },

    logoutUser(state, action) {
      localStorage.removeItem("token");

      return {
        ...state,
        token: "",
        name: "",
        email: "",
        _id: "",
        isAdmin: false,
        balance: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          isAdmin: user.isAdmin,
          balance: user.balance,
          registerStatus: "success",
        };
      } else return state;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    });
    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);

        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          isAdmin: user.isAdmin,
          balance: user.balance,
          loginStatus: "success",
        };
      } else return state;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });

    builder.addCase(getUser.pending, (state, action) => {
      return {
        ...state,
        getUserStatus: "pending",
      };
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        console.log("dfcgvhbjnkm", user);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          isAdmin: user.isAdmin,
          balance: user.balance,
          getUserStatus: "success",
        };
      } else return state;
    });

    builder.addCase(getUser.rejected, (state, action) => {
      return {
        ...state,
        getUserStatus: "rejected",
        getUserError: action.payload,
      };
    });
    builder.addCase(resetPassword.pending, (state, action) => {
      return { ...state, resetPasswordStatus: "pending" };
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      if (action.payload) {
        // Password reset successful
        return { ...state, resetPasswordStatus: "success" };
      } else return state;
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      return {
        ...state,
        resetPasswordStatus: "rejected",
        resetPasswordError: action.payload,
      };
    });
    builder.addCase(requestPasswordReset.pending, (state, action) => {
      return { ...state, requestPasswordResetStatus: "pending" };
    });
    builder.addCase(requestPasswordReset.fulfilled, (state, action) => {
      if (action.payload) {
        // Password reset request successful
        return { ...state, requestPasswordResetStatus: "success" };
      } else return state;
    });
    builder.addCase(requestPasswordReset.rejected, (state, action) => {
      return {
        ...state,
        requestPasswordResetStatus: "rejected",
        requestPasswordResetError: action.payload,
      };
    });
    builder.addCase(resetPasswordConfirmation.pending, (state, action) => {
      return { ...state, resetPasswordConfirmationStatus: "pending" };
    });
    builder.addCase(resetPasswordConfirmation.fulfilled, (state, action) => {
      if (action.payload) {
        // Password reset confirmation successful
        return { ...state, resetPasswordConfirmationStatus: "success" };
      } else return state;
    });
    builder.addCase(resetPasswordConfirmation.rejected, (state, action) => {
      return {
        ...state,
        resetPasswordConfirmationStatus: "rejected",
        resetPasswordError: action.payload,
      };
    });
  },
});

export const { loadUser, logoutUser, getBalance } = authSlice.actions;

export const authReducer = authSlice.reducer;
