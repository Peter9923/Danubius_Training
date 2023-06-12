export default {
    props: ['id', 'text', 'type', 'tags'],
    
    methods: {
        tagToUpper(tag) {
            return tag.toUpperCase()
        },
        deleteToDo(todoId) {
            let index = this.$parent.todos.findIndex(x => x.id === todoId)
            this.$parent.todos.splice(index, 1)
        }
    },

    template: `
    <div 
        class="alert alert-dismissible fade show":class="type"
        role="alert"
    >
    <!--<div class="alert":class="type" role="alert" v-bind:class="type">-->
    {{id}}
        <br />
        {{text}}
        <div>
            <template 
                v-for="tag in tags"
            >
                <span 
                    class="badge badge-secondary mr-2"
                >
                    {{tagToUpper(tag)}}
                </span>
            </template>
        </div>
        <button
            @click="deleteToDo(id)"
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
        >
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    `
}