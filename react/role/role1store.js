import{action, computed, observable, observe} from 'mobx';

class Store{
    @observable userinfo=[];
    @observable levelvalue='';
    
    @action
    setUserinfo(userinfo){
        this.userinfo=userinfo;
    }
    @action
    setLevelvalue(levelvalue){
        this.levelvalue=levelvalue
    }

    @computed
    get getUserinfo(){
        return this.userinfo;
    }
    @computed
    get getLevelvalue(){
        return this.levelvalue;
    }
}
const store = new Store();
export default store;