<template>
    <div id="place">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div id="breadcrumbs">
                        <ul class="list-group list-group-flush">
                            <li><router-link tag="a" :to="'/home'">Home</router-link></li>
                            <li><router-link tag="a" :to="'/boxes'">Slajdovi</router-link></li>
                            <li>Kreiraj slajd</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row bela">
                <div class="col-md-12">
                    <div class="card">
                        <h5>Kreiraj slajd</h5>
                    </div>
                </div>

                <div class="col-sm-8">
                    <div class="card">
                        <form @submit.prevent="submit()">
                            <div class="form-group">
                                <label for="category">Šablon</label>
                                <select name="category" id="category" class="form-control" v-model="box.block_id">
                                    <option :value="index" v-for="(block, index) in lists">{{ block }}</option>
                                </select>
                                <small class="form-text text-muted" v-if="error != null && error.block_id">{{ error.block_id[0] }}</small>
                            </div>
                            <div class="form-group">
                                <label for="name">Naslov</label>
                                <input type="text" name="name" class="form-control" id="name" placeholder="Naslov" v-model="box.title">
                                <small class="form-text text-muted" v-if="error != null && error.title">{{ error.title[0] }}</small>
                            </div>
                            <div class="form-group">
                                <label for="subtitle">Podnaslov</label>
                                <input type="text" name="name" class="form-control" id="subtitle" placeholder="Podnaslov" v-model="box.subtitle">
                                <small class="form-text text-muted" v-if="error != null && error.subtitle">{{ error.subtitle[0] }}</small>
                            </div>
                            <div class="form-group">
                                <label for="link">Link</label>
                                <input type="text" name="link" class="form-control" id="link" placeholder="Link" v-model="box.link">
                                <small class="form-text text-muted" v-if="error != null && error.link">{{ error.link[0] }}</small>
                            </div>
                            <div class="form-group">
                                <label for="button">Dugme</label>
                                <input type="text" name="button" class="form-control" id="button" placeholder="Link" v-model="box.button">
                                <small class="form-text text-muted" v-if="error != null && error.button">{{ error.button[0] }}</small>
                            </div>
                            <div class="form-group">
                                <label for="order">Redosled</label>
                                <input type="text" name="order" class="form-control" id="order" placeholder="Redosled" v-model="box.order">
                                <small class="form-text text-muted" v-if="error != null && error.order">{{ error.order[0] }}</small>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-primary">Kreiraj</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-sm-4">
                    <upload-image-helper
                            :image="box.image"
                            :defaultImage="''"
                            :titleImage="'slajda'"
                            :error="error"
                            @uploadImage="upload($event)"
                            @removeRow="remove($event)"
                    ></upload-image-helper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
    import UploadImageHelper from '../helper/UploadImageHelper.vue';
    import swal from 'sweetalert2';

    export default {
        data(){
          return {
              box: {},
              lists: {},
              error: null
          }
        },
        components: {
            'font-awesome-icon': FontAwesomeIcon,
            'upload-image-helper': UploadImageHelper,
        },
        created(){
            this.getList();
        },
        methods: {
            submit(){
                axios.post('api/boxes', this.box)
                    .then(res => {
                        swal({
                            position: 'center',
                            type: 'success',
                            title: 'Kreirano',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        this.$router.push('/boxes');
                    }).catch(e => {
                        console.log(e.response);
                        this.error = e.response.data.errors;
                    });
            },
            upload(image){
                this.box.image = image[0];
            },
            getList(){
                axios.get('api/blocks/lists')
                    .then(res => {
                        this.lists = res.data.blocks;
                    }).catch(e => {
                        console.log(e.response);
                        this.error = e.response.data.errors;
                    });
            },
        }
    }
</script>