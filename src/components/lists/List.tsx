import { Vue, Component, Prop } from 'vue-property-decorator';
import * as style from './list.css';

@Component
class List extends Vue {
  @Prop() items!: object[];
  render() {
    return (
      <div class={style.list}>
        {this.items.map(item => this.$scopedSlots.list({ item }))}
      </div>
    );
  }
}

export default List as any;
