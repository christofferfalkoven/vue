<template>
    <form @submit.prevent="sendFile" enctype="multipart/form-data">
        <div class="field">
            <div class="file is-boxed is primary">
                <label class="file-label">
                    <input
                        type="file"
                        ref="file"
                        @change="selectFile"
                        class="file-input"
                    />
                    <span class="file-cta">
                        <span class="file-icon">
                            <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label">
                            Chose a file...
                        </span>
                    </span>
                    <span v-if="file" class="file-name">
                        {{file.name}}
                    </span>
                </label>
            </div>
        </div>
        <div class="field">
            <button class="button is-info">Submit</button>
        </div>
    </form>
</template>
<script>
    export default {
        name: "SimpleUpload",
        data(){
            return{
                file: "",
                text: ""
            }
        },
        methods:{
            selectFile(){
                this.file = this.$refs.file.files[0];
            },
            sendFile(){

            }
        }
    }
</script>