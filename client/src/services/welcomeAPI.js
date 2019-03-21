import API from '@/services/API'
export default {
  getGreeTings () {
    return API().get('greeting')
  }
}