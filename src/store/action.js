export default {
    awitIncrement({commit},value) {
        console.log(commit,value,'333')
        setTimeout(()=>{
            commit('increment')
        },value)
    },
    odd({commit,state}){
        if(state.count%2===1){
            commit('increment')
        }
    }
}