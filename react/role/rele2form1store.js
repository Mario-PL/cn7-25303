import{action, computed, observable, observe} from 'mobx';
import Item from 'choerodon-ui/lib/list/Item';

class Store{
    @observable Menuinfo=[];

    @action
    setMenuinfo(Menuinfoget){
        this.Menuinfo=Menuinfoget.map(item=>{
            return{
                name:item.name,
                parentCode:item.parentCode,
                children:item.subMenus,
                route:item.route,
                icon:item.icon,
            }
        });
    }

    @computed
    get getMenuinfo(){
        return this.Menuinfo;
    }

}
const store = new Store();
export default store;