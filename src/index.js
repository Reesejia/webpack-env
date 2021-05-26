import {reactive, effect, computed, ref} from '@vue/reactivity'

// proxy 进行代理
let state = reactive({
  name: 'wjx',
  age: 25
})

effect(() =>{
  console.log('state.name', state.name)
})

state.name = 'zxj'

// watchEffect 是基于effect的包（批量更新策略）