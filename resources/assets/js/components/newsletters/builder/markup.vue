<template>
    <div class="body" style="background-color:#e9e2d0;">
        <div style="background-color:#FFF;">
            <div style="Margin:0px auto;max-width:600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                    <tbody>
                    <tr>
                        <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;padding-top:0;text-align:center;vertical-align:top;">
                            <!-- header -->
                            <div class="mj-column-per-50 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:bottom;" width="100%">
                                    <tr>
                                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                <tbody>
                                                <tr>
                                                    <td style="width:250px;">
                                                        <a :href="domain" target="_blank">
                                                            <img alt="Wellmedic" height="auto" :src="domain + 'img/logo-newsletter.png'" style="border:0;display:block;outline:none;text-decoration:none;width:100%;" width="250"/>
                                                        </a>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
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
                        <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;padding-top:0;text-align:center;vertical-align:top;">
                            <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:bottom;" width="100%">
                                    <tr>
                                        <td align="left" style="font-size:0px;padding:10px 25px;padding-right:0px;padding-left:0px;word-break:break-word;">
                                            <div style="font-family:Roboto;font-size:14px;line-height:1.5;text-align:left;color:#000000;">
                                                <ul class="nav">
                                                    <li class="nav_item"><a class="nav_link" :href="domain + 'proizvodi'">proizvodi</a></li>
                                                    <li class="nav_item"><a class="nav_link" :href="domain + 'blog'">blog</a></li>
                                                    <li class="nav_item"><a class="nav_link" :href="domain + 'iskustva'">iskustva</a></li>
                                                </ul>
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

            <template v-for="(item, index) in items">
                <component
                        :is="item.component"
                        :index="index"
                        :posts="posts"
                        :fullPosts="fullPosts"
                        :banners="banners"
                        :fullBanners="fullBanners"
                        :testimonials="testimonials"
                        :fullTestimonials="fullTestimonials"
                        :item="item"
                        :edit="edit"
                        :newsletter="newsletter"
                        @deleteRow="deleteRow($event)"
                        @setItem="setItem($event)"
                ></component>
            </template>

            <div style="background:#f2f5f8;background-color:#f2f5f8;Margin:0px auto;max-width:600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f2f5f8;background-color:#f2f5f8;width:100%;">
                    <tbody>
                    <tr>
                        <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;padding-top:0;text-align:center;vertical-align:top;">
                            <!-- footer -->
                            <div class="mj-column-per-50 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:bottom;" width="100%">
                                    <tr>
                                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                            <div style="font-family:Roboto;font-size:14px;line-height:1.5;text-align:center;color:#000000;">
                                                <h3 style="margin-bottom: 0; margin-top: 16px;">Pratite nas na:</h3>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" style="font-size:0px;padding:10px 25px;padding-top:0;padding-bottom:0;word-break:break-word;">
                                            <div style="font-family:Roboto;font-size:14px;line-height:1.5;text-align:left;color:#000000;">
                                                <ul class="social">
                                                    <li class="social_item"><a class="social_link" href="https://www.facebook.com/">
                                                        <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" xml:space="preserve">
                <path d="M891.6,85.3H132.4c-26,0-47.1,21.1-47.1,47.1v759.1c0,26,21.1,47.1,47.1,47.1h408.7V608.2H429.9V479.4h111.2 v-95c0-110.2,67.3-170.2,165.6-170.2c47.1,0,87.6,3.5,99.4,5.1v115.2l-68.2,0c-53.5,0-63.8,25.4-63.8,62.7v82.2h127.5L785,608.2 H674.1v330.5h217.5c26,0,47.1-21.1,47.1-47.1V132.4C938.7,106.4,917.6,85.3,891.6,85.3z"/>
              </svg>
                                                    </a></li>
                                                    <li class="social_item"><a class="social_link" href="https://www.instagram.com/">
                                                        <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" xml:space="preserve">
                <path d="M512,162.2c113.9,0,127.4,0.4,172.4,2.5c41.6,1.9,64.2,8.8,79.2,14.7c19.9,7.7,34.1,17,49.1,31.9 c14.9,14.9,24.2,29.1,31.9,49.1c5.8,15,12.8,37.6,14.7,79.2c2.1,45,2.5,58.5,2.5,172.4s-0.4,127.4-2.5,172.4 c-1.9,41.6-8.8,64.2-14.7,79.2c-7.7,19.9-17,34.1-31.9,49.1c-14.9,14.9-29.1,24.2-49.1,31.9c-15,5.8-37.6,12.8-79.2,14.7 c-45,2.1-58.5,2.5-172.4,2.5s-127.4-0.4-172.4-2.5c-41.6-1.9-64.2-8.8-79.2-14.7c-19.9-7.7-34.1-17-49.1-31.9 c-14.9-14.9-24.2-29.1-31.9-49.1c-5.8-15-12.8-37.6-14.7-79.2c-2.1-45-2.5-58.5-2.5-172.4s0.4-127.4,2.5-172.4 c1.9-41.6,8.8-64.2,14.7-79.2c7.7-19.9,17-34.1,31.9-49.1c14.9-14.9,29.1-24.2,49.1-31.9c15-5.8,37.6-12.8,79.2-14.7 C384.6,162.6,398.1,162.2,512,162.2 M512,85.3c-115.9,0-130.4,0.5-175.9,2.6c-45.4,2.1-76.4,9.3-103.6,19.8 c-28.1,10.9-51.9,25.5-75.6,49.2c-23.7,23.7-38.3,47.5-49.2,75.6C97.2,259.7,90,290.7,87.9,336.1c-2.1,45.5-2.6,60-2.6,175.9 c0,115.9,0.5,130.4,2.6,175.9c2.1,45.4,9.3,76.4,19.8,103.6c10.9,28.1,25.5,51.9,49.2,75.6c23.7,23.7,47.5,38.3,75.6,49.2 c27.1,10.5,58.2,17.8,103.6,19.8c45.5,2.1,60,2.6,175.9,2.6s130.4-0.5,175.9-2.6c45.4-2.1,76.4-9.3,103.6-19.8 c28.1-10.9,51.9-25.5,75.6-49.2c23.7-23.7,38.3-47.5,49.2-75.6c10.5-27.1,17.8-58.2,19.8-103.6c2.1-45.5,2.6-60,2.6-175.9 s-0.5-130.4-2.6-175.9c-2.1-45.4-9.3-76.4-19.8-103.6c-10.9-28.1-25.5-51.9-49.2-75.6c-23.7-23.7-47.5-38.3-75.6-49.2 C764.3,97.2,733.3,90,687.9,87.9C642.4,85.8,627.9,85.3,512,85.3L512,85.3z M512,292.9c-121,0-219.1,98.1-219.1,219.1 S391,731.1,512,731.1S731.1,633,731.1,512S633,292.9,512,292.9z M512,654.2c-78.5,0-142.2-63.7-142.2-142.2 c0-78.5,63.7-142.2,142.2-142.2S654.2,433.5,654.2,512C654.2,590.5,590.5,654.2,512,654.2z M739.8,233c-28.3,0-51.2,22.9-51.2,51.2 s22.9,51.2,51.2,51.2s51.2-22.9,51.2-51.2S768,233,739.8,233z"/>
              </svg>
                                                    </a></li>
                                                    <li class="social_item"><a class="social_link" href="https://twitter.com/">
                                                        <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" xml:space="preserve">
                <path d="M353.7,858.7c322,0,498.1-266.8,498.1-498.1c0-7.6,0-15.1-0.5-22.6c34.3-24.8,63.8-55.5,87.3-90.6 c-32,14.2-65.8,23.4-100.6,27.5c36.5-21.9,63.9-56.3,77-96.8c-34.4,20.4-72,34.8-111.2,42.5c-66.3-70.5-177.2-73.9-247.7-7.6 c-45.5,42.8-64.8,106.5-50.6,167.3c-140.8-7.1-271.9-73.5-360.8-182.9c-46.5,80-22.7,182.3,54.2,233.7c-27.9-0.8-55.1-8.3-79.5-21.9 c0,0.7,0,1.5,0,2.2c0,83.3,58.8,155.1,140.5,171.6c-25.8,7-52.8,8.1-79.1,3c22.9,71.3,88.7,120.2,163.6,121.6 c-62,48.7-138.6,75.2-217.4,75.1c-13.9,0-27.8-0.9-41.7-2.5c80.1,51.4,173.2,78.6,268.4,78.5"/>
              </svg>
                                                    </a></li>
                                                </ul>
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
            <div style="background:#f2f5f8;background-color:#f2f5f8;Margin:0px auto;max-width:600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f2f5f8;background-color:#f2f5f8;width:100%;">
                    <tbody>
                    <tr>
                        <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;padding-top:0;text-align:center;vertical-align:top;">
                            <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:bottom;" width="100%">
                                    <tr>
                                        <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                            <div style="font-family:Roboto;font-size:14px;line-height:1.5;text-align:left;color:#000000;">
                                                <div class="hr"></div>
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
            <div style="background:#f2f5f8;background-color:#f2f5f8;Margin:0px auto;max-width:600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f2f5f8;background-color:#f2f5f8;width:100%;">
                    <tbody>
                    <tr>
                        <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;padding-top:0;text-align:center;vertical-align:top;">
                            <div class="mj-column-per-50 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:bottom;" width="100%">
                                    <tr>
                                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                <tbody>
                                                <tr>
                                                    <td style="width:250px;"> <a href="http://www.wellmedic.rs/" target="_blank">

                                                        <img
                                                                alt="http://www.wellmedic.rs/" height="auto" src="http://www.wellmedic.co/wp-content/uploads/2015/09/logo1.png" style="border:0;display:block;outline:none;text-decoration:none;width:100%;" width="250"
                                                        />

                                                    </a> </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div style="background:#f2f5f8;background-color:#f2f5f8;Margin:0px auto;max-width:600px;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f2f5f8;background-color:#f2f5f8;width:100%;">
                    <tbody>
                    <tr>
                        <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;padding-top:0;text-align:center;vertical-align:top;">
                            <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:bottom;" width="100%">
                                    <tr>
                                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                            <div style="font-family:Roboto;font-size:13px;line-height:1.5;text-align:center;color:#000000;">
                                                <p>Quisque nec sollicitudin dui. Aliquam eu odio dui. Etiam vitae tempus elit. Nam mattis justo et pretium pellentesque.</p>
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
                        <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;padding-top:0;text-align:center;vertical-align:top;">
                            <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:bottom;" width="100%">
                                    <tr>
                                        <td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                            <div style="font-family:Roboto;font-size:10px;line-height:1.5;text-align:center;color:#000000;">
                                                <p>Dobili ste ovu poruku jer ste se prijavili na mailin listu na sajtu <a href="http://www.wellmedic.rs" class="link">www.wellmedic.rs</a>. Da bi ste se odjavili sa mailing liste, kliknite <a href="#" class="link">ovde</a>.</p>
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
            <!-- /footer -->

            <div>
                <button class="btn btn-primary" @click="create()" v-if="items.length > 0">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
    import leadingPost from './leadingPost.vue';
    import twoPosts from './twoPosts.vue';
    import banner from './banner.vue';
    import testimonial from './testimonial.vue';
    import { apiHost } from './../../../config';

    export default{
        data(){
          return {
              posts: {},
              banners: {},
              fullPosts: {},
              fullBanners: {},
              testimonials: {},
              fullTestimonials: {},
              attrs: [],
              domain: apiHost
          }
        },
        props: ['items', 'edit', 'newsletter'],
        components: {
            'leading-post': leadingPost,
            'two-posts': twoPosts,
            'banner': banner,
            'testimonial': testimonial,
        },
        created(){
            console.log(this.items);
            this.getPosts();
            this.getBanners();
            this.getTestimonials();
        },
        methods: {
            getPosts(){
                axios.get('api/posts/lists')
                    .then(res => {
                        this.fullPosts = res.data.posts;
                        this.posts = _.map(res.data.posts, (data) => {
                            var pick = _.pick(data, 'title', 'id');
                            var object = {id: pick.id, text: pick.title};
                            return object;
                        });
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            getBanners(){
                axios.get('api/banners/lists')
                    .then(res => {
                        this.fullBanners = res.data.banners;
                        this.banners = _.map(res.data.banners, (data) => {
                            var pick = _.pick(data, 'title', 'id');
                            var object = {id: pick.id, text: pick.title};
                            return object;
                        });
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            getTestimonials(){
                axios.get('api/testimonials/lists')
                    .then(res => {
                        this.fullTestimonials = res.data.testimonials;
                        this.testimonials = _.map(res.data.testimonials, (data) => {
                            var pick = _.pick(data, 'body', 'id');
                            var object = {id: pick.id, text: pick.body};
                            return object;
                        });
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            deleteRow(index){
                this.attrs.splice(index, 1);
                this.$emit('removeMarkup', index);
            },
            setItem(item){
                this.attrs[item.index] = item;
            },
            create(){
                this.$emit('create', this.attrs);
            },
        }
    }
</script>

<style scoped>
    @import url(https://fonts.googleapis.com/css?family=Roboto);

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    h1 {
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 600;
        margin-top: 0;
    }

    .hr {
        display: block;
        height: 2px;
        width: 100%;
        margin-top: 16px;
        margin-bottom: 16px;
        border-bottom: 1px solid #fff;
        background-color: rgba(0, 0, 0, .12);
        background-image: linear-gradient( to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, .21), rgba(0, 0, 0, 0));
        opacity: .5;
    }

    .image {
        position: relative;
        width: 100%;
        padding-top: 56.25%;
        overflow: hidden;
    }

    .image--hero {
        padding-top: 46.51%;
    }

    .image img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: auto;
        width: 100%;
    }

    .thumbnail {
        border-radius: 4px;
        margin-bottom: 16px;
    }

    .caption {
        color: #00adee;
    }

    .icon {
        width: 24px;
        height: 24px;
        fill: currentColor;
    }

    .link {
        color: #00adee;
    }

    .btn {
        display: inline-block;
        background-color: #00adee;
        color: #fff;
        font-weight: 500;
        padding: 10px 16px;
        border-radius: 50px;
        line-height: 1;
        border: 2px solid #00adee;
    }

    .btn--outline {
        background: none;
        color: #00adee;
    }

    .btn--outline:hover {
        color: #fff;
        background-color: #00adee;
    }

    .nav,
    .social {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
    }

    .nav_link {
        text-transform: uppercase;
        padding: 8px 16px;
    }

    .nav_item:hover {
        color: #00adee;
    }

    .social_item {
        color: #00adee;
    }

    .social_link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
    }

    .article_body {
        position: relative;
        font-size: 13px;
        line-height: 1.5;
        max-height: 3em;
        overflow: hidden;
    }

    .article_title {
        font-size: 18px;
        margin-top: 8px;
        margin-bottom: 16px;
    }

    .quote {
        margin-bottom: 15px;
    }

    .quote_body {
        font-style: italic;
        color: rgba(0, 0, 0, .54);
        line-height: 1.5;
        max-height: 6em;
        overflow: hidden;
    }

    .quote_author {
        color: #00adee;
        font-size: 16px;
    }

    .btn-primary{
        display: block;
        width: 70px;
        margin-left: auto;
        margin-right: auto;
    }

    @media only screen and (min-width:480px) {
        .mj-column-per-50 {
            width: 50% !important;
        }
        .mj-column-per-100 {
            width: 100% !important;
        }
    }
</style>
