export function reactive(target){
  // 创建一个响应式对象 目标对象可能不一定是数组或对象， 可能还要set map
  return createReactiveObject(target, {
    get(){

    },
    set(){

    }
  })
}

function createReactiveObject(target, baseHandler){
  if(!isObject(target)){ // 不是响应式对象直接返回
    return target
  }
}