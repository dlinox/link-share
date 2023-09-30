export default class UserService {
  static BASE_URL = "http://localhost:8000/users";

  async getProfile() {
    try {
      let token = localStorage.getItem("token");

      let res = await fetch(`${UserService.BASE_URL}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      let jsonResponse = await res.json();

      return jsonResponse;
    } catch (error) {
      return {
        status: "error",
        message: "Unknown error",
        data: null,
      };
    }
  }

  async updateAvatar({ avatar }) {
    const formData = new FormData();
    formData.append("avatar", avatar);

    let token = localStorage.getItem("token");

    let res = await fetch(`${UserService.BASE_URL}/avatar`, {
      method: "PATCH",
      headers: {
        // "Content-Type": "application/json",
        Authorization: token,
      },
      body: formData,
    });

    let jsonResponse = await res.json();

    return jsonResponse;
  }

  async updatePassword({ oldPass, newPass }) {
    try {
      let token = localStorage.getItem("token");

      let body = JSON.stringify({
        oldPass,
        newPass,
      });

      let res = await fetch(`${UserService.BASE_URL}/password`, {
        method: "PUT",
        body: body,
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      let jsonResponse = await res.json();

      return jsonResponse;
    } catch (error) {
      return {
        status: "error",
        message: "Unknown error",
        data: null,
      };
    }
  }
}
