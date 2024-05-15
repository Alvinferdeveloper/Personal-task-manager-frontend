import { create } from "zustand";
import { httpRequest } from "../utils/httpRequest";
import AsyncStorage from "@react-native-async-storage/async-storage";

const request = new httpRequest();
export const useStore = create((set) => ({
  authenticated: false,
  user: null,
  loading: false,
  error: null,
  categories: [],
  authenticate: async () => {
    try {
      const res = await request.post("/auth/login-token", {});
      if (!res.ok) throw new Error("Couldn't authenticate");
      const user = await res.json();
      set({ authenticated: true, user: user });
    } catch (err) {
      set({ authenticated: false, user: null });
    }
  },
  setErrorToNull: () => set({ error: null }),
  logIn: async (email, password) => {
    try {
      const res = await request.post("/auth/login-email-password", {
        email,
        password,
      });

      if (!res.ok) {
        throw new Error("Email or password incorrect");
      }

      const user = await res.json();
      await AsyncStorage.setItem("token", user.token);
      set({ user, authenticated: true, error: null });
    } catch (e) {
      set({ error: e.message });
    }
  },

  logOut: async () => {
    set({ user: null, authenticated: false, categories: [] });
    await AsyncStorage.removeItem("token");
  },
  getCategories: async () => {
    try {
      const res = await request.get("category/getCategories");
      if (!res.ok) {
        throw new Error("Error al obtener las categorias");
      }
      const categories = await res.json();
      set({ categories: categories });
    } catch (e) {
      set({ error: e.message });
    }
  },
  setUser: async (data) => {
    try {
      const res = await request.post("/register", data);
      if (!res.ok) {
        const dataError = await res.json();
        throw new Error(dataError.message);
      }
      const user = await res.json();
      set({ user, error: null, authenticated: true });
      await AsyncStorage.setItem("token", user.token);
    } catch (e) {
      set({ error: e.message });
    }
  },

  addTask: async (data, categoryId) => {
    const res = await request.post("/task/newTask", {
      name: data,
      categoryId: categoryId,
    });
    if (res.ok) useStore.getState().getCategories();
  },

  removeTask: async(taskId) =>{
    const res = await request.delete(`/task/removeTask/${taskId}`);
    if(res.ok) useStore.getState().getCategories();
  },

  updateTaskState: async (taskId)=>{
    const res = await request.patch(`/task/updateTaskState/${taskId}`);
    if(res.ok) useStore.getState().getCategories();
  },

  addCategory: async(data)=>{
    const res = await request.post('/category/newCategory', data);
    if(res.ok) useStore.getState().getCategories();
  }
}));
