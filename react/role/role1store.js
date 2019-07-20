import{action, computed, observable, observe} from 'mobx';

class Store{
    @observable userinfo=[];
    @observable levelvalue='site';
    @observable levelchinese='全局';
    
    @action
    setUserinfo(userinfo){
        this.userinfo=userinfo;
    }
    @action
    setLevelvalue(levelvalue){
        this.levelvalue=levelvalue;
    }
    @action
    setLevelchinese(levelchinese){
        this.levelchinese=levelchinese;
    }

    @computed
    get getUserinfo(){
        return this.userinfo;
    }
    @computed
    get getLevelvalue(){
        return this.levelvalue;
    }
    @computed
    get getLevelchinese(){
        return this.levelchinese;
    }
}
const store = new Store();
export default store;