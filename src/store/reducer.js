const defaultState = {
    inputValue: 'Write Something',
    list: [
        '早8点开晨会，分配今天的任务',
        '早9点和项目经理开需求沟通会',
        '晚5点进行代码review',
    ]
}
export default (state=defaultState, action)=>{

    // Reducer里只能接受state，不能改变state
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    return state
}