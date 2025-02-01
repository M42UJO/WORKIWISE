// src/store/authState.ts
import { atom } from "recoil";

export const authState = atom<boolean>({
  key: "authState",
  default: false, // ค่าเริ่มต้นคือยังไม่ล็อกอิน
});
