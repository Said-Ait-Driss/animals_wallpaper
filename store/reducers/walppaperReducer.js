const initState ={
    complete:false,
    walppapers:[]
} 

const WalppaerReducer = ( state =initState , action )=>{
    
    switch ( action.type ){

        case "GET_WALPPAPERS":
            return {
                complete:true,
                walppapers:action.walppapers
            }
            default : return state;
        }

}

export default WalppaerReducer;
