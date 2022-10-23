import {CHANGE_VIEW,RESET_VIEW} from '../types/navigation';

export const changeView=(view)=>{
  console.log('change view action reached')
  console.log('changing to this view...')
  console.log(view)
  return{
    type: CHANGE_VIEW,
    payload:view
  }
}

export const resetNavState=()=>{
  console.log('reset nav state action')
  return{
    type: RESET_VIEW,
    payload:{}
  }
}
