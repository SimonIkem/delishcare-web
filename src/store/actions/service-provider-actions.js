import api from '@/api/service-providers'
import {notification} from '@/util/notification'
import { LogError} from '@/util/responseHandler'

export default{

    async getProviders({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.all()
            if(res.status==200){
               commit('serviceProviders',res.data.data)
               //notification.success(res.data.data)
            }else{
                notification.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async createProvider({commit,dispatch},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.create(data)
            if(res.status==200){
                dispatch('getProviders')
               notification.success(res.data.message)
            }else{
                notification.error(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async updateProvider({commit,dispatch},{id,data}){
        try {
            commit('submitting',null,{root:true})
            const res = await api.update(id,data)
            if(res.status==200){
                dispatch('getProviders')
               notification.success(res.data.message)
            }else{
                notification.error(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async getProvider({commit},id){
        try {
            commit('submitting',null,{root:true})
            const res = await api.provider(id)
            if(res.status==200){
               commit('serviceProvider',res.data.data)
               notification.success(res.data.message)
            }else{
                notification.error(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },
}
