<template>
  <section
    id="todo-list-component"
    class="grid grid-cols-1 p-8 gap-2 bg-white relative w-64 max-w-full rounded-md"
  >
    <div
      class="grid grid-cols-1"
      v-for="(item, idx) in items"
      :key="`todo${item.name}`"
    >
      <div class="flex justify-between items-center pb-2">
        <div>
          <button
            class="text-red font-semi-bold pr-2"
            @click="onDeleteTodo(item)"
          >
            x
          </button>
          <span :class="state">{{ item.name }}</span>
        </div>
        <input
          :checked="item.marked"
          type="checkbox"
          @click="onChangeState(idx)"
        />
      </div>
    </div>
    <div class="flex">
      <input
        v-if="addTodo"
        class="border-2 border-success rounded-md pl-2 w-44"
        placeholder="a;adir todo"
        value="todo"
        type="text"
        @keyup.enter="onActionTodo"
        v-model="currentItem.name"
      />
    </div>
    <button
      type="button"
      class="h-12 w-12 text-light-grey bg-success rounded-full text-3xl absolute -bottom-6 justify-self-center"
      @click="onActionTodo"
    >
      +
    </button>
  </section>
</template>

<script>
export default {
  name: "todoList",
  data: () => ({
    currentItem: {
      name: null,
      marked: false,
    },
    addTodo: false,
    state: "",
  }),
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onActionTodo() {
      if (this.currentItem.name) {
        return this.$emit("addTodo", this.currentItem);
      } else {
        return (this.addTodo = !this.addTodo);
      }
    },
    onDeleteTodo(item) {
      return this.$emit("deleteTodo", item);
    },
    onChangeState(idx) {
      const markedItems = this.items[idx];
      markedItems.marked = true;
    },
  },
};
</script>

<style scoped></style>
