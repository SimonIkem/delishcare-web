import api from '@/api/product-services'
import {notification} from '@/util/notification'
import { LogError } from '@/util/responseHandler'

export default{

    async all({commit},data){
        try {
            commit('loading',null,{root:true})
            const res = await api.all(data)
            if(res.status==200){
               commit('productServices',res.data.data)
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

    async create({commit,dispatch},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.create(data)
            if(res.status==200){
                dispatch('all')
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

    async update({commit,dispatch},{id,data}){
        try {
            commit('submitting',null,{root:true})
            const res = await api.update(id,data)
            if(res.status==200){
                dispatch('all')
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

    async getService({commit},id){
        try {
            commit('submitting',null,{root:true})
            const res = await api.service(id)
            if(res.status==200){
               commit('productService',res.data.data)
               notification.success(res.data.message)
            }else{
                notification.warning(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async getDefaultService({commit},service){
        try {
            //alert()
            commit('loading',null,{root:true})
            const res = await api.defaultService(service)
            if(res.status==200){
               commit('productService',res.data.data)
               //notification.success(res.data.message)
            }else{
                notification.warning(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },
}

