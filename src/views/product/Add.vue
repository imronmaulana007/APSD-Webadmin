<template>
    <div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Product Name</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input size="large" v-model="product_name" class="mt-5 w-full" name="Product" v-if="detail != true" />
                <vs-input size="large" v-model="product_name" class="mt-5 w-full" disabled name="Product" v-else/>
            </div>
        </div>
         <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Category</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <!-- <vs-input size="large" v-model="id_category" class="mt-5 w-full" name="Product" v-if="detail != true" />
                <vs-input size="large" v-model="id_category" class="mt-5 w-full" disabled name="Product" v-else/> -->

                <v-select label="category_name" v-model="id_category" :options="categoryOptions" v-if="detail != true"></v-select>
                <v-select label="category_name" v-model="id_category" :options="categoryOptions" v-else></v-select>
            </div>
        </div>
         <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Photo</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <input type="file" @change="onImageChange" class="w-full" v-if="detail != true">
                <img v-else :src="'/images/upload_product/' + photo" class="mt-5" width="100px" height="100px">
            </div>
        </div>
         <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Stock</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input size="large" v-model="stock" class="mt-5 w-full" name="Product" v-if="detail != true" />
                <vs-input size="large" v-model="stock" class="mt-5 w-full" disabled name="Product" v-else/>
            </div>
        </div>
         <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Description</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-textarea v-model="description" class="mt-5 w-full"  v-if="detail != true" />
                <vs-textarea v-model="description" class="mt-5 w-full"  v-else />
            </div>
        </div>
         <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Price</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input size="large" v-model="price" class="mt-5 w-full" name="price" v-if="detail != true" />
                <vs-input size="large" v-model="price" class="mt-5 w-full" disabled name="price" v-else/>
            </div>
        </div>
         <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Weight</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input size="large" v-model="weight" class="mt-5 w-full" name="weight" v-if="detail != true" />
                <vs-input size="large" v-model="weight" class="mt-5 w-full" disabled name="weight" v-else/>
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Long</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input size="large" v-model="long" class="mt-5 w-full" name="long" v-if="detail != true" />
                <vs-input size="large" v-model="long" class="mt-5 w-full" disabled name="long" v-else/>
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Heigt</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input size="large" v-model="heigt" class="mt-5 w-full" name="heigt" v-if="detail != true" />
                <vs-input size="large" v-model="heigt" class="mt-5 w-full" disabled name="heigt" v-else/>
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Wide</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-input size="large" v-model="wide" class="mt-5 w-full" name="wide" v-if="detail != true" />
                <vs-input size="large" v-model="wide" class="mt-5 w-full" disabled name="wide" v-else/>
            </div>
        </div>
        <div class="vx-row mb-6">
            <div class="vx-col sm:w-1/3 w-full">
                <span>Status</span>
            </div>
            <div class="vx-col sm:w-2/3 w-full">
                <vs-switch v-model="status" v-if="detail != true" >
                    <span slot="on">On</span>
                    <span slot="off">Off</span>
                </vs-switch>

                <vs-switch v-model="status" disabled v-else>
                    <span slot="on">On</span>
                    <span slot="off">Off</span>
                </vs-switch>
            </div>
        </div>
            
        <div class="vx-row">
            <div class="vx-col sm:w-2/3 w-full ml-auto">
                <vs-button class="mr-3 mb-2" @click="submitData">Submit</vs-button>
                <!-- <vs-button color="warning" type="border" class="mb-2" @click="input1 = input2 = input3 = input4 = input4 = ''; check1 = false;">Reset</vs-button> -->
            </div>
        </div>
    </div>
</template>


<script>
import vSelect from 'vue-select'

export default {
  components: {
    vSelect,
     'v-select': vSelect,
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    detail: {
      type: Boolean,
      default: () => {},
    }
  },
  data() {
    return {
        dataId: null,

        id_category : "",
		product_name : "",
		photo : "",
		stock : "",
		description : "",
		price : "",
		weight : "",
		long : "",
		heigt : "",
		wide : "",
        status:true,

        datas:[],

        popupdisplay:'',

        categoryOptions: [
            {
            id_category: "1",
            category_name: "Product",
            },
            {
            id_category: "2",
            category_name: "Customer",
            },
        ],
    }
  },
  watch: {
      data(val){
        // if(!val) return
        if(Object.entries(this.data).length === 0) {
            this.initValues()
            this.$validator.reset()
            this.onChange("Tambah Data");
        }else {
            let { id, id_category, product_name, photo, stock, description, price, weight, long, heigt, wide, status } = JSON.parse(JSON.stringify(this.data))
            this.dataId = id
            this.id_category = id_category
            this.product_name = product_name
            this.photo = photo
            this.stock = stock
            this.description = description
            this.price = price
            this.weight = weight
            this.long = long
            this.heigt = heigt
            this.wide = wide
            this.status = status
            this.initValues();
            this.onChange("Ubah Data");
        }
      },
        
  },
  computed: {
   
  },
  methods: {
    onImageChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        this.createImage(files[0]);
    },
    
    createImage(file) {
        let reader = new FileReader();
        let vm = this;
        reader.onload = (e) => {
            vm.photo = e.target.result;
        };
        reader.readAsDataURL(file);
    },

    onChange (e) {
      this.$emit('update', e);
    },

    initValues() {
      if(this.data.id) return
        this.dataId = null
        this.id_category = "";
		this.product_name = "";
		this.photo = "";
		this.stock = "";
		this.description = "";
		this.price = "";
		this.weight = "";
		this.long = "";
		this.heigt = "";
		this.wide = "";
		this.status = true;
    },

    getProduct() {
      this.$store.dispatch("PRODUCT").then(data => {
        this.datas = data;
        this.onChange(this.datas);
      });
    },

    submitData() {
        const obj = {
            id: this.dataId,
            id_category : this.id_category.id_category == undefined ? this.id_category : this.id_category.id_category,

            product_name: this.product_name,
            photo: this.photo,
            stock : this.stock,
            description: this.description,
            price: this.price,
            weight: this.weight,
            long: this.long,
            heigt: this.heigt,
            wide: this.wide,
            status : this.status,
        }

        if(this.dataId !== null && this.dataId >= 0) {
            // this.$store.dispatch("dataList/updateItem", obj).catch(err => { console.error(err) })
            this.$vs.loading();
            this.$store
            .dispatch("UPDATE_PRODUCT", obj)
            .then(() => {
                this.$vs.loading.close();
                this.initValues();

                this.$vs.notify({
                title: "Success",
                text: "Success, data added",
                color: "success",
                iconPack: "feather",
                icon: "icon-check"
                });
            this.getProduct();
            this.onChange(this.popupdisplay = false);
            });
        }else{
        //   delete obj.id
        //   obj.popularity = 0
            // this.$store.dispatch("dataList/addItem", obj).catch(err => { console.error(err) })
            this.$vs.loading();

            this.$store
            .dispatch("INSERT_PRODUCT", obj)
            .then(() => {
                this.$vs.loading.close();
                this.initValues();

                this.$vs.notify({
                title: "Success",
                text: "Success, data added",
                color: "success",
                iconPack: "feather",
                icon: "icon-check"
                });
            this.getProduct();
            this.onChange(this.popupdisplay = false);
            });
        }

        this.$emit('closeSidebar')
        this.initValues()
    },
  },
  mounted() {
    // console.log(this.data);
  },
  updated(){
    // console.log(this.data);
  }
}
</script>