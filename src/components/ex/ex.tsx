import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
class Ex extends Vue {
  @Prop() item!: { id: number };
  render() {
    return (
      <div>
        {this.item.id}
      </div>
    );
  }
}

export default Ex as any;
