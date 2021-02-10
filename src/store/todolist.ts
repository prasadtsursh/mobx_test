import { observable, action } from 'mobx'

class todo {

    @observable list: any = [{
        id: 1
    }, {
        id: 2
    },
    {
        id: 3
    }]
@observable n:any;

    @action add = () => {
        this.n = 10
        console.log('this.list', this.n)
    }
}

const store = new todo()
export default store