export const initialState={
        users:"",
};
export const actionTypes={
    SET_DATA:"SET_DATA",
};
const reducer=(state=initialState,action)=>{
        console.log(action);
        switch(action.type){
            case 'Add_TODO':
                return{
                    ...state,
                       users:action.payload,
                };
            case 'Delete_TODO':
                return {
                    ...state,
                    todos: state.todos.filter(todo=>todo.id!== action.payload),
                }    
            
                default:
                    return state;
        }
};
export default reducer;