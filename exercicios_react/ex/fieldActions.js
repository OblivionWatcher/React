export function changeValue(e){
    console.log('change value')
    return{
        type:'VALUE_CHANGE',
        payload: e.target.value
    }
}