import { Product, Order, ApiResponse } from "@/types";

const API_BASE_URL = "https://khakhra-backend.yourusername.repl.co";

export const api = {
  async getProducts(): Promise<Product[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      const data: ApiResponse<Product[]> = await response.json();
      
      if (data.success && data.data) {
        return data.data;
      }
      throw new Error(data.message || "Failed to fetch products");
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  async createOrder(order: Order): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
      
      const data: ApiResponse<any> = await response.json();
      
      if (!data.success) {
        throw new Error(data.message || "Failed to create order");
      }
    } catch (error) {
      console.error("Error creating order:", error);
      throw error;
    }
  },
};
