const app = new Vue({
    el:"#app",
    data(){
        return{
            tasks : []

        }
    },
    computed: {
        taskCount(){
            return this.tasks.length
        }
    },
    methods: {
        addNewTask(newTask){
            this.tasks.push(newTask)
        },
        removeTask(task){
            this.tasks.splice(this.tasks.indexOf(task), 1)
        }
    }
})

Vue.component("to-do",{
    props:{
        tasks:{
            type:Array,
            required:true
        },
        remaining:{
            type:Number,
            required:true
        }
    },
    data() {
        return {
            error:null,
            newTask:null
        }
    },
    methods:{
        submitTask(){
            if (this.newTask){
                this.$emit("add-task",this.newTask)
                this.newTask = null
                if (this.error){
                    this.error = null
                }
            }else{
                this.error = "Input can`t be empty"
            }
        },
        removeTask(task){
            this.$emit("remove-task",task)
        }
    },
    template:`
        <div class="container my-2">
            <p><strong>Remaining Tasks: {{remaining}}</strong></p>
            <input type="text" v-model="newTask" class="form-control" placeholder="what do you need to do" @keyup.enter="submitTask">
            <br>
            <p>TO REMOVE TASKS CLICK ON THE TASK</p>
            <div v-for="(task,index) in tasks" :task="task" :key="index">
                <button @click="removeTask(task)" class="alert alert-success" role="alert">
                    {{task}}
                </button>
            </div>
            <p v-if="error">{{error}}</p>
            <p v-if="remaining === 0">To add new tasks write in the input and click enter</p>
        </div>
    `

})