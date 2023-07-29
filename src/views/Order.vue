<template>
    <div>
        Order
    </div>
</template>

<script>
import axios from 'axios'
export default {
    mounted () {
        axios.get('/apis/ui/settings').then(res=>{
            console.log(res.data)
        })
    }
}
</script>
