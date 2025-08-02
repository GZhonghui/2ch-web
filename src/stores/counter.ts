import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// 定义一个 Pinia store
export const useUserStore = defineStore('user', () => {
  const userID = ref(0)
  function setUserID(id: number) {
    userID.value = id
  }

  return { userID, setUserID }
})
