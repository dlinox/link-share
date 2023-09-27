export default class AuthService {
  static BASE_URL = "http://localhost:8008/users";

  async signIn({ email, password }) {
    console.log("login");
    try {
      let data = JSON.stringify({
        email: email,
        password: password,
      });

      console.log(data);

      let res = await fetch(`${AuthService.BASE_URL}/login`, {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      let jsonResponse = await res.json();

      if (jsonResponse.status === "error") {
        return {
          ...jsonResponse,
          data: null,
        };
      }

      localStorage.setItem("token", jsonResponse.token);

      return {
        status: "success",
        message: "Success",
        data: jsonResponse,
      };
    } catch (error) {
      return {
        status: "error",
        message: "Unknown error",
        data: null,
      };
    }
  }

  async signUp({ email, password, userName }) {
    try {
      let data = JSON.stringify({
        email: email,
        password: password,
        userName: userName,
      });

      let res = await fetch(`${AuthService.BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });

      let jsonResponse = await res.json();

      if (jsonResponse.status === "error") {
        return {
          ...jsonResponse,
          data: null,
        };
      }

      localStorage.setItem("token", jsonResponse.token);

      return {
        status: "success",
        message: "Success",
        data: jsonResponse,
      };
    } catch (error) {
      return {
        status: "error",
        message: "Unknown error",
        data: null,
      };
    }
  }
}
