import Dashboard from '@/views/admin/Dashboard'
import layout from '@/views/AdminLayout'
import Security from '@/views/admin/Security'
import Wallet from '@/views/admin/Wallet'
import Users from '@/views/admin/Users'
import Transactions from '@/views/admin/Transactions'
import Incentives from '@/views/admin/Incentives'
import IncentiveRequests from '@/views/admin/IncentiveRequests'
import Packages from '@/views/admin/Packages'
import ProductRequests from '@/views/admin/ProductRequests'
// import serviceProviders from '@/views/admin/serviceProvider'
// import productServices from '@/views/admin/productServices'
import BonusSettings from '@/views/admin/BonusSettings'
// import conversionRates from '@/views/admin/conversionRates'

export default [
    {
        path:'/admin',
        component:layout,
        meta:{
          isAdmin:false,
          requiresAuth:true
        },
        children:[
          {
            path:'dashboard',
            name:'admin-dashboard',
            component:Dashboard,
            meta:{
                isAdmin:true,
                requiresAuth:true
            }
          },
          {
            path:'wallet',
            name:'admin-wallet',
            component:Wallet,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },
          {
            path:'transactions',
            name:'admin-transactions',
            component:Transactions,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },
          {
            path:'users',
            name:'admin-users',
            component:Users,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },
          {
            path:'security',
            name:'admin-security',
            component:Security,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },
          {
            path:'incentives',
            name:'admin-incentives',
            component:Incentives,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },
          {
            path:'bonus-settings',
            name:'bonus-settings',
            component:BonusSettings,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },
          {
            path:'product-requests',
            name:'product-requests',
            component:ProductRequests,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },
          {
            path:'incentive-requests',
            name:'incentive-requests',
            component:IncentiveRequests,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },
          {
            path:'packages',
            name:'admin-packages',
            component:Packages,
            meta:{
                isAdmin:true,
                requiresAuth:true
            },
          },

        ]
          
         
        //   {
        //     path:'virtual-card',
        //     name:'admin-virtual-card',
        //     component:virtualCard,
        //     meta:{
        //         isAdmin:true,
        //         requiresAuth:true
        //     },
        //   },

        //   {
        //     path:'providers',
        //     name:'admin-providers',
        //     component:serviceProviders,
        //     meta:{
        //         isAdmin:true,
        //         requiresAuth:true
        //     },
        //   },
        //   {
        //     path:'product-services',
        //     name:'admin-product-services',
        //     component:productServices,
        //     meta:{
        //         isAdmin:true,
        //         requiresAuth:true
        //     },
        //   },
        //   {
        //     path:'charges',
        //     name:'admin-charges',
        //     component:charges,
        //     meta:{
        //         isAdmin:true,
        //         requiresAuth:true
        //     },
        //   },
        //   {
        //     path:'conversion-rates',
        //     name:'admin-conversion-rates',
        //     component:conversionRates,
        //     meta:{
        //         isAdmin:true,
        //         requiresAuth:true
        //     },
        //   },
          
        // ]
    }
]