<template>
    <div>
        <div style="Margin:0px auto;max-width:600px;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                <tbody>
                <tr>
                    <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;padding-top:0;text-align:center;vertical-align:top;">
                        <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:bottom;" width="100%">
                                <tr>
                                    <td align="left" style="font-size:0px;padding:0px;word-break:break-word;position: relative;">

                                        <font-awesome-icon icon="times" @click="deleteRow(index)" v-if="!newsletter.send" />
                                        <router-link tag="a" class="clicks" :to="'/clicks/' + newsletter.id + '/posts/' + item.banner.id" v-if="newsletter.send">{{ clicks }}</router-link>

                                        <div style="font-family:Roboto;font-size:14px;line-height:1.5;text-align:left;color:#000000;">
                                            <div class="image image--hero">
                                                <img :src="domain + 'img/nwl-600x180.png'"  v-if="item.banner == null"/>
                                                <img :src="domain + item.banner.image" v-else />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <div style="Margin:0px auto;max-width:600px;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                <tbody>
                <tr>
                    <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                            <tbody>
                            <tr>

                                <td style="width:550px; position: relative;">
                                    <select2 :options="banners" :value="item.item1" :name="item.component" @input="input($event)" v-if="!newsletter.send">
                                        <option value="0">select one</option>
                                    </select2>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
    import Select2 from '../../helper/Select2Helper.vue';
    import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
    import { apiHost } from '../../../config';

    export default {
        data(){
            return {
                domain: apiHost,
                clicks: 0
            }
        },
        props: ['banners', 'fullBanners', 'index', 'item', 'edit', 'newsletter'],
        created(){
            if(this.edit){
                this.$emit('setItem', {type: 'banner', item1: this.item.banner, item2: null,  index: this.index});
                this.getClicks();
            }
        },
        components: {
            'select2': Select2,
            'font-awesome-icon': FontAwesomeIcon,
        },
        methods: {
            deleteRow(index){
                this.$emit('deleteRow', index);
            },
            input(banner_id){
                if(banner_id == 0){
                    this.item.banner = null;
                    this.$emit('setItem', {type: 'banner', item1: this.item.banner, item2: null, index: this.index});
                }else{
                    this.item.banner = this.fullBanners.find(b => b.id == banner_id);
                    this.$emit('setItem', {type: 'banner', item1: this.item.banner, item2: null,  index: this.index});
                }
            },
            getClicks(){
                if(this.item.banner){
                    axios.get('api/clicks/' + this.newsletter.id + '/banners/' + this.item.banner.id)
                        .then(res => {
                            this.clicks = res.data.clicks;
                        })
                        .catch(e => {
                            console.log(e);
                        });
                }
            },
        }
    }
</script>

<style scoped>
    svg{
        display: block !important;
        width: 25px !important;
        height: 25px !important;
        cursor: pointer;
        position: absolute;
        top: 5px;
        left: 5px;
        color: red;
    }

    .clicks{
        display: block;
        position: absolute;
        top: 5px;
        right: 10px;
        border: 1px solid #008a88;
        font-size: 18px;
        background-color: white;
        padding: 0 2px;
    }
</style>