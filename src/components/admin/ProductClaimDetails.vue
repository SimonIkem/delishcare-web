<template>
    <div class="card border-0 justify-content-center">
        <div class="card-body rounded"> 
            <div class="float-center">
                <div v-for="userClaim,i in userProductClaims" :key="i" class="row column-row border-bottom">
                    <div class="mt-2 ml-3" style="padding-right:15px">
                        <img src="/assets/img/shop1.png" width="30px" height="30px">
                    </div>  
                    <div class="mb-2 mt-2">
                        <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">{{ userClaim.name }} <br><small> ₦{{ userClaim.worth }} | {{userClaim.points}}PV</small></h6>	
                    </div>	
                </div>

                <div class="row column-row border-bottom">
                    <div class="mb-2 mt-2 ml-3">
                        <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">Total Point Value </h6>											
                    </div>	
                    <div class="mb-2 mt-2 ml-auto mr-3">
                        <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">{{ totalPv }} PV</h6>											
                    </div>
                </div> 	
                <div class="row column-row border-bottom">
                    <div class="mb-2 mt-5 ml-3">
                        <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">Total Product Cost </h6>											
                    </div>	
                    <div class="mb-2 mt-5 ml-auto mr-3">
                        <h6 class="font-weight-bold text-green s-12" style="margin: 0em; padding: 0em;">₦{{ totalWorth }} </h6>											
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

    export default{
        name:'product-claim-details',
        props:{
            uuid:{
                type:String,
                required:true
            },

        },
        data(){
            return {
                totalPv:null,
                totalWorth:null,
                status:null
            }
        },

        computed:{
            ...mapState({
                loading:state=>state.loading
            }),

            ...mapGetters('productClaimStore',['userProductClaims'])
        },

        created(){
            this.getProductClaims(this.uuid).then(res=>{
                if( res.status == 200){
                    this.userProductClaims.forEach(ele=>{
                        //console.log(ele.worth)
                        this.totalWorth = this.totalWorth + ele.worth
                        this.totalPv = this.totalPv + ele.points
                        this.status = ele.status
                    })
                }
            })
        },

        methods:{
            ...mapActions('productClaimStore',['getProductClaims'])
        }
    }
</script>