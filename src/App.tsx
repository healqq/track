import { Vue, Component } from 'vue-property-decorator';
import List from './components/lists/List';
import Ex from './components/ex/Ex';
@Component
export default class App extends Vue {
  items: object[] = [{ id : 1 }, { id: 2 }];
  render() {
    return (
        <List items={this.items}  scopedSlots= {{
          list: (scope) => {
            return <Ex item={scope.item}/>;
          }}}>
        </List>
    );
  }
}
