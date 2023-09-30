Vue.component("comment",{
    props:{
        comment:{
            type:Object,
            required:true,
            //default:[]    //para definir um valor padrao
        }
    },
    template:`
        <div>
            <div class="card-body">
                <p>{{comment.username}}</p>
                <p>{{comment.content}}</p>
            </div>
        </div>
    `
})

Vue.component("comment-list",{
    emits:["submit-content"],
    props:{
        comments:{
            type:Array,
            required:true,
        }
    },
    data(){
        return {
            commentBody:null,
            commentAuthor:null,
            error:null
        }
    },
    methods:{
        onSubmit(){
            if (this.commentBody && this.commentAuthor){
                const newComment = {
                    username:this.commentAuthor,
                    content:this.commentBody
                }
                this.$emit("submit-comment",newComment)

                this.commentBody = null
                this.commentAuthor = null

                if(this.error){
                    this.error = null
                }
            }else{
                this.error = "text can`t be empty"
            }

        }
    },
    template:`
        <div class="mb-2">
            <single-comment v-for="(comment,index) in comments" :comment="comment" :keys="index">
            </single-comment>
            <hr>
            <h3>{{error}}</h3>
            <form @submit.prevent="onSubmit">
                <div class="form-group">
                    <label for="commentAuthor">Username</label>
                    <input v-model="commentAuthor" type="text" class="form-control" id="commentAuthor">
                </div>
                <div class="form-group">
                    <label for="commentBody">Comment</label>
                    <textarea v-model="commentBody" rows="3" cols="40" class="form-control" id="commentBody"></textarea>
                </div>
                <button class="btn btn-sm btn-primary" type="submit">Publish</button>
            </form>
        </div>
    `
})

Vue.component("single-comment",{
    props:{
        comment:{
            type:Object,
            required:true,
        }
    },
    template:`
        <div class="mb-2">
            <div class="card">
                <div class="card-header">
                    <p>Published by: {{comment.username}}</p>
                </div>
                <div class="card-body">
                    <p>{{comment.content}}</p>
                </div>
            </div>
        </div>
    `
})

const app = new Vue({
    el:"#app",
    data(){
        return{
            //BASICS
            message:"Hello World",
            num:5,
            img:"https://i.pinimg.com/originals/7a/c5/18/7ac51896710038993f8ea9f5b862d71a.jpg",
            link:"https://vuejsbr-docs-next.netlify.app/",

            //FUNCTIONS
            counter:0,

            //CONDITIONS
            auth:false,
            product : "sunglasses",
            quantity:150,
            sale:true,

            //STYLES
            flag:true,
            styleObject: {backgroundColor:'green',border:'5px solid orange'},

            //V-FOR
            users:["alice","bob","batman","superman","artorias"],
            usersDictionaries:[
                {
                    id:567,
                    name:"kratos",
                    profession:"officer"
                },
                {
                    id:568,
                    name:"batman",
                    profession:"officer"
                },
                {
                    id:569,
                    name:"artorias",
                    profession:"developer"
                },
                {
                    id:570,
                    name:"monono",
                    profession:"doctor"
                },
            ],

            //FORMS E INPUTS
            color:"green",
            text:"",
            checked:true,
            city:"",
            comment:null,
            comentsForms:[],
            error:"",

            //COMPUTED PROPERTIES
            firstName:"john",
            lastName:"conor",

            //COMPONENTS AND PROPS
            comments:[
                {
                    username:"alice",
                    content:"first content"
                },
                {
                    username:"BOB",
                    content:"CONSTRUCTOR content"
                },
                {
                    username:"tony",
                    content:"armor wars"
                },
                {
                    username:"alices dad",
                    content:"aliceeeeeeeee"
                }
            ]
        }
    },
    computed: { //EM COMPUTED PROPERTIES OS VALORES SAO ESTATICOS E SAO CHAMADOS SEM OS () EXEMPLO getRandomComputed
        getRandomComputed() {
          return Math.random();
        },
        fullName(){
            return `${this.firstName} ${this.lastName}`
        },
        reverseFullName(){
            let first = this.firstName.split("").reverse().join()
            let last = this.lastName.split("").reverse().join()
            return `${first} ${last}`
        }
    },
    methods: {
        incrementCounter(){
            this.counter+=1;
            console.log(this.counter);
            if (this.counter === 10){
                alert("counter == 10")
            }
        },
        overTheBox(){
            console.log("Over the green box!!")
        },
        changeShape(){
            this.flag = !this.flag
        },
        getRandomNumber(){
            return Math.random();
        },
        onSubmit(){
            if (this.comment){
                let newComment = this.comment
                this.comentsForms.push(newComment)
                this.comment = null
                if(this.error){
                    this.error = null
                }
            }else{
                this.error = "input can`t be blank"
            }

        }
    }
})