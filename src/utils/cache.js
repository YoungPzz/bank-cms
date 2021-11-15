//本地缓存
class LocalCache {
    //保存缓存
    setCache(key, value) {
      window.localStorage.setItem(key, JSON.stringify(value)) //因为setItem要求value是string
    }
  
    getCache(key) {
      const value = window.localStorage.getItem(key)
      if (value) {
        return JSON.parse(value)
      }
    }
    deleteCache(key) {
      window.localStorage.removeItem(key)
    }
    clearCache() {
      window.localStorage.clear()
    }
  }
  
  export default new LocalCache()
  