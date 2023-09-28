export default class LinkService {
  static BASE_URL = "http://localhost:8000/links";

  async create({ title, url, description }) {
    try {
      let data = JSON.stringify({
        title: title,
        url: url,
        description: description,
      });

      let token = localStorage.getItem("token");

      let res = await fetch(`${LinkService.BASE_URL}`, {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      let jsonResponse = await res.json();

      if (jsonResponse.status === "error") {
        return {
          ...jsonResponse,
          data: null,
        };
      }

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

  async list() {
    try {
      let token = localStorage.getItem("token");

      let res = await fetch(`${LinkService.BASE_URL}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      let jsonResponse = await res.json();

      if (jsonResponse.status === "error") {
        return {
          ...jsonResponse,
          data: null,
        };
      }

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
