const API_BASE = process.env.REACT_APP_API_BASE;

class APIRequest {
  async getProducts() {
    let response = await fetch(API_BASE + "/product/list");

    let body = {};
    try {
      body = await response.json();
    } catch (e) {}

    return {
      status: response.status,
      body: body.content
    };
  }

  async getProduct(id) {
    let response = await fetch(API_BASE + "/product/" + id);

    let body = {};
    try {
      body = await response.json();
    } catch (e) {}

    return {
      status: response.status,
      body: body
    };
  }

  async addProduct(product) {
    let response = await fetch(API_BASE + "/product/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(product)
    });

    let body = {};
    try {
      body = await response.json();
    } catch (e) {}

    return {
      status: response.status,
      body: body
    };
  }

  async deleteProduct(id) {
    let response = await fetch(API_BASE + "/product/" + id, {
      method: "DELETE"
    });
    return response;
  }

  async editProduct(id, product) {
    let response = await fetch(API_BASE + "/product/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(product)
    });
    return response;
  }
}

export const API = new APIRequest();
